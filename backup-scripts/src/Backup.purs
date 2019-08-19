module Backup (DatabaseM, BackupContext) where

import Prelude
import Control.Monad.Reader (ReaderT(..), ask)
import Data.Maybe (Maybe(..))
import Effect.Aff (Aff)
import Effect.Aff.Class (liftAff)
import Node.ChildProcess (defaultSpawnOptions)
import Node.Path (FilePath)
import Sunde as S

type BackupContext
  = { dbURL :: String }

type DatabaseM
  = ReaderT BackupContext Aff

dump :: FilePath -> DatabaseM Unit
dump location = do
  ctx <- ask
  _ <- liftAff $ S.spawn { cmd: "pg_dump", args: [ ctx.dbURL ], stdin: Nothing } defaultSpawnOptions
  pure unit
