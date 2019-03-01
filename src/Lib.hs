{-# LANGUAGE DeriveGeneric     #-}
{-# LANGUAGE NamedFieldPuns    #-}
{-# LANGUAGE OverloadedStrings #-}

module Lib
  ( start
  ) where

import           Control.Concurrent.Async
import           Control.Lens
import           Control.Monad.IO.Class
import           Data.Aeson                           (ToJSON, Value)
import           Data.Aeson.Lens
import System.Environment
import           Data.Maybe
import Data.Text.Internal.Lazy as T
import           GHC.Generics
import           Network.HTTP.Simple
import           Network.Wai.Middleware.RequestLogger (logStdout)
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

getNewGameSubs :: IO (Maybe Int)
getNewGameSubs = fetchData newGameUrl extractSubs
  where
    extractSubs res = res ^? key "data" . key "subscribers" . _Integral

getDiscordMembers :: IO (Maybe Int)
getDiscordMembers = fetchData discordUrl extractMembers
  where
    extractMembers res = res ^? key "approximate_member_count" . _Integral

getStats :: IO (Maybe Int, Maybe Int)
getStats = concurrently getNewGameSubs getDiscordMembers

getStatsJSON :: IO StatsResponse
getStatsJSON = convertJson <$> getStats
  where
    getDefault = fromMaybe 0
    convertJson (reddit, discord) = StatsResponse {discord = getDefault discord, reddit = getDefault reddit}

start :: IO ()
start = read <$> getEnv "NEWGAME_PORT" >>= \port ->
  scotty port $ do
    middleware logStdout
    get "/bot/stats" $ redirect datadogUrl
    get "/social/stats" $ liftIO getStatsJSON >>= json
    get "/social/discord" $ liftIO getDiscordMembers >>= json
    get "/social/reddit" $ liftIO getNewGameSubs >>= json
