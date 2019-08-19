{-
Welcome to your new Dhall package-set!

Below are instructions for how to edit this file for most use
cases, so that you don't need to know Dhall to use it.

## Warning: Don't Move This Top-Level Comment!

-------------------------------
-}


let upstream =
      https://github.com/purescript/package-sets/releases/download/psc-0.13.3-20190818/packages.dhall sha256:c95c4a8b8033a48a350106b759179f68a695c7ea2208228c522866fd43814dc8

let overrides = {=}

let additions = {=}

in  upstream // overrides // additions
