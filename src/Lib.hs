{-# LANGUAGE NamedFieldPuns    #-}
{-# LANGUAGE OverloadedStrings #-}

module Lib
  ( start
  ) where

import           Cache
import           Control.Monad.IO.Class
import           Controllers.Stats
import           Database.Base
import qualified Database.MongoDB                     as M
import           Network.Wai.Middleware.Cors          (simpleCors)
import           Network.Wai.Middleware.RequestLogger (logStdout)
import           System.Environment
import           Web.Scotty                           as WS

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
