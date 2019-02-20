{-# LANGUAGE DeriveGeneric     #-}
{-# LANGUAGE NamedFieldPuns    #-}
{-# LANGUAGE OverloadedStrings #-}

module Lib
  ( start
  ) where

import           Control.Concurrent.Async
import           Control.Lens
import           Control.Monad.IO.Class
import           Data.Aeson                 (ToJSON, Value, toJSON)
import           Data.Aeson.Lens
import qualified Data.ByteString.Lazy.Char8 as L8
import qualified Data.Text                  as T
import           GHC.Generics
import           Network.HTTP.Simple
import           Web.Scotty

data StatsResponse = StatsResponse
  { discord :: Int
  , reddit  :: Int
  } deriving (Show, Generic)

instance ToJSON StatsResponse

getBody res = getResponseBody res :: Value

newGameUrl = "https://reddit.com/r/newgame/about.json"

discordUrl = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true"

fetchData :: Request -> (Value -> [Int]) -> IO Int
fetchData url fn = head . fn . getBody <$> httpJSON url

getNewGameSubs :: IO Int
getNewGameSubs = fetchData newGameUrl extractSubs
  where
    extractSubs res = res ^.. key "data" . key "subscribers" . _Integral

getDiscordMembers :: IO Int
getDiscordMembers = fetchData discordUrl extractMembers
  where
    extractMembers res = res ^.. key "approximate_member_count" . _Integral

getStats :: IO (Int, Int)
getStats = concurrently getNewGameSubs getDiscordMembers

getStatsJSON :: IO StatsResponse
getStatsJSON = convertJson <$> getStats
  where
    convertJson (discord, reddit) = StatsResponse {discord, reddit}

start :: IO ()
start = scotty 3000 $ do
  get "/api/stats" $ liftIO getStatsJSON >>= json
  get "/api/discord" $ liftIO getDiscordMembers >>= json
  get "/api/reddit" $ liftIO getNewGameSubs >>= json
