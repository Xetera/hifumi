module Main where

import Prelude
import Backup (DatabaseM)
import Control.Monad.Reader (runReaderT)
import Data.Maybe (Maybe(..))
import Dotenv as Env
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console (log)
import Node.Process (exit, lookupEnv)

dbUrlKey :: String
dbUrlKey = "BACKUP_DATABASE_URL"

run :: DatabaseM Unit -> Aff Unit
run cb = do
  _ <- Env.loadFile
  liftEffect do
    urlM <- lookupEnv dbUrlKey
    case urlM of
      Nothing -> exitProgram
      Just url -> startReader { dbURL: url }
  where
  exitProgram :: Effect Unit
  exitProgram = liftEffect $ log "No database URL was found" *> exit 1

  startReader = launchAff_ <<< runReaderT cb

backup :: DatabaseM Unit
backup = do
  log "yeet"

main :: Effect Unit
main = launchAff_ $ run backup
