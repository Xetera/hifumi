{-# LANGUAGE DeriveGeneric     #-}
{-# LANGUAGE NamedFieldPuns    #-}
{-# LANGUAGE OverloadedStrings #-}

module Lib
  ( start
  ) where

import           Cache
import Data.Aeson.Bson
import           Control.Concurrent.Async
import           Control.Lens
import           Control.Monad.IO.Class
import           Data.Aeson                           (ToJSON, Value)
import           Data.Aeson.Lens
import           Data.Maybe
import           Data.Text.Internal.Lazy              as T
import qualified Database.MongoDB                     as M
import           Debug.Trace
import           GHC.Generics
import           Mongo
import           Network.HTTP.Simple
import           Network.Wai.Middleware.Cors
import           Network.Wai.Middleware.RequestLogger (logStdout)
import           System.Environment
import           Web.Scotty                           as WS

data StatsResponse = StatsResponse
  { discord :: Int
  , reddit  :: Int
  } deriving (Show, Generic)

instance ToJSON StatsResponse

getBody :: Response Value -> Value
getBody res = getResponseBody res :: Value

newGameUrl :: Request
newGameUrl = "https://reddit.com/r/newgame/about.json"

discordUrl :: Request
discordUrl = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true"

fetchData :: Request -> (Value -> Maybe Int) -> IO (Maybe Int)
fetchData url fn = fn . getBody <$> httpJSON url

datadogUrl :: Text
datadogUrl = "https://p.datadoghq.com/sb/71d9e3d68-233c63b5d43908deb0df73c63059cdb2"

getNewGameSubs :: StatCache -> IO (Maybe Int)
getNewGameSubs cache = makeCache $ fetchData newGameUrl extractSubs
  where
    makeCache = withCache cache "newgame"
    extractSubs res = res ^? key "data" . key "subscribers" . _Integral

getDiscordMembers :: StatCache -> IO (Maybe Int)
getDiscordMembers cache = makeCache $ fetchData discordUrl extractMembers
  where
    makeCache = withCache cache "discord"
    extractMembers res = res ^? key "approximate_member_count" . _Integral

getStats :: StatCache -> IO (Maybe Int, Maybe Int)
getStats cache = concurrently (getNewGameSubs cache) (getDiscordMembers cache)

getStatsJSON :: StatCache -> IO StatsResponse
getStatsJSON cache = convertJson <$> getStats cache
  where
    getDefault = fromMaybe 0
    convertJson (reddit, discord) = StatsResponse {discord = getDefault discord, reddit = getDefault reddit}

start :: IO ()
start = do
  cache <- generateCache
  pipe <- dbConnect
  let run = M.access pipe M.master "test" :: M.Action ActionM a -> ActionM a
  port <- read <$> getEnv "NEWGAME_PORT"
  scotty port $ do
    middleware logStdout
    middleware simpleCors
    get "/bot/stats" $ redirect datadogUrl
    get "/social/stats" $ liftIO (getStatsJSON cache) >>= json
    get "/social/discord" $ liftIO (getDiscordMembers cache) >>= json
    get "/social/reddit" $ liftIO (getNewGameSubs cache) >>= json
    get "/test" $ serialize (run findImages) >>= json
