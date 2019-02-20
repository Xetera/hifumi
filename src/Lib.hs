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
import qualified Data.ByteString.Lazy.Char8           as L8
import           Data.Maybe
import qualified Data.Text                            as T
import           Debug.Trace
import           GHC.Generics
import           Network.HTTP.Simple
import           Network.Wai.Middleware.RequestLogger (logStdout)
import           Web.Scotty                           as WS

data StatsResponse = StatsResponse
  { discord :: Int
  , reddit  :: Int
  } deriving (Show, Generic)

instance ToJSON StatsResponse

getBody res = getResponseBody res :: Value

newGameUrl = "https://reddit.com/r/newgame/about.json"

discordUrl = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true"

fetchData :: Request -> (Value -> Maybe Int) -> IO (Maybe Int)
fetchData url fn = fn . getBody <$> httpJSON url

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
start =
  scotty 3000 $ do
    middleware logStdout
    get "/api/stats" $ liftIO getStatsJSON >>= json
    get "/api/discord" $ liftIO getDiscordMembers >>= json
    get "/api/reddit" $ liftIO getNewGameSubs >>= json
