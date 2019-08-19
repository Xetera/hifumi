module Checks (commandExists) where

import Prelude
import Data.Maybe (Maybe(..))
import Effect.Aff (Aff)
import Node.ChildProcess (Exit(..))
import Node.ChildProcess as CP
import Sunde as S

commandExists :: String -> Aff Boolean
commandExists command = do
  res <- S.spawn { cmd: "command", args: [], stdin: Nothing } CP.defaultSpawnOptions
  pure
    $ case res.exit of
        Normally e -> e == 0
        BySignal _ -> false
