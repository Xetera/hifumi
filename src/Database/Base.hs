{-# LANGUAGE DeriveGeneric        #-}
{-# LANGUAGE FlexibleInstances    #-}
{-# LANGUAGE OverloadedStrings    #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Database.Base
  ( Image
  , findImages
  , dbConnect
  , serialize
  ) where

import           Control.Monad.IO.Class (MonadIO)
import           Data.Aeson             (Object)
import           Data.Aeson.Bson
import           Data.Maybe             (fromMaybe)
import qualified Database.MongoDB       as M
import           GHC.Generics
import           System.Environment     (lookupEnv)

data Image
  = Image { url :: String }
  | Document
  deriving (Show, Generic)

defaultDbUrl :: String
defaultDbUrl = "127.0.0.1"

dbUrl :: IO String
dbUrl = lookupEnv "MONGO_URL" >>= return <$> fromMaybe defaultDbUrl

serialize :: MonadIO a => a [M.Document] -> a [Object]
serialize = fmap $ map toAeson

dbConnect :: IO M.Pipe
dbConnect = dbUrl >>= M.connect . M.host

findImages :: MonadIO a => M.Action a [M.Document]
findImages = M.find (M.select [] "images") >>= M.rest
