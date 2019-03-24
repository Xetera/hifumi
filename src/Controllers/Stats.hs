{-# LANGUAGE DeriveGeneric     #-}
{-# LANGUAGE OverloadedStrings #-}

module Controllers.Stats where

import           Cache                    (StatCache, withCache)
import           Control.Concurrent.Async (concurrently)
import           Control.Lens             ((^?))
import           Data.Aeson               (ToJSON, Value)
import           Data.Aeson.Lens          (key, _Integral)
import           Data.Maybe               (fromMaybe)
import qualified Data.Text.Lazy           as T
import           GHC.Generics             (Generic)
import           Network.HTTP.Simple      (Request, Response, getResponseBody,
                                           httpJSON)

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

datadogUrl :: T.Text
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
    convertJson (r, d) = StatsResponse {discord = getDefault d, reddit = getDefault r}
