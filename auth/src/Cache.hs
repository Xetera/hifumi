module Cache
  ( generateCache
  , withCache
  , StatCache
  ) where

import qualified Data.Cache    as C
import           Data.Hashable
import           GHC.Int       (Int64)
import           System.Clock

type StatCache = C.Cache String (Maybe Int)

cacheDuration :: Int64
cacheDuration = 60 * 60

generateCache :: IO (C.Cache k v)
generateCache = C.newCache . Just $ TimeSpec {sec = cacheDuration, nsec = 0}

withCache :: (Eq k, Hashable k) => C.Cache k v -> k -> IO v -> IO v
withCache cache key func =
  let value = C.lookup cache key >>= maybe func return
   in value >>= C.insert cache key >> value
