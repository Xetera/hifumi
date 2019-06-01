package com.github.moedevs.models

data class HttpError(val error: String)

sealed class Errors

sealed class RequestError : Errors() {
  data class MissingHeader(val name: String) : RequestError()
  data class MissingParameter(val name: String) : RequestError()
  data class MissingBody(val name: String) : RequestError()
}

sealed class JWTValidationError : Errors() {
  object MissingAuthType : JWTValidationError()
  object InvalidAuthType : JWTValidationError()
  object InvalidToken : JWTValidationError()
  object ServerError : JWTValidationError()
}

