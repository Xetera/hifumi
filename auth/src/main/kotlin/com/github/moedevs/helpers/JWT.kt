package com.github.moedevs.helpers

import arrow.core.Either
import com.github.moedevs.controllers.dotenv
import com.github.moedevs.controllers.logger
import com.github.moedevs.models.JWTValidationError
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.io.DecodingException
import io.jsonwebtoken.security.Keys

const val JWT_CLAIM_USER_ID = "user_id"

val secretKey = dotenv["YUN_JWT_SECRET"]!!.toByteArray()

val key = Keys.hmacShaKeyFor(secretKey)

val builder = Jwts.builder().signWith(key)
val parser = Jwts.parser().setSigningKey(key)

fun signUser(id: String): String =
  builder.claim(JWT_CLAIM_USER_ID, id).compact()

fun checkUser(token: String) =
  parser.parseClaimsJws(token)

fun <A> withAuthorizationHeader(header: String, f: (String) -> A): Either<JWTValidationError, A> {
  try {
    val parts = header.split(" ")
    if (parts.size < 2) {
      return Either.Left(JWTValidationError.MissingAuthType)
    }
    val (method, token) = parts
    if (method != "Bearer") {
      return Either.Left(JWTValidationError.InvalidAuthType)
    }
    return Either.Right(f(token))
  } catch (_: DecodingException) {
    return Either.Left(JWTValidationError.InvalidToken)
  } catch (err: Exception) {
    logger.error("Unexpected error handling jwt", err)
    return Either.Left(JWTValidationError.ServerError)
  }
}

fun isValidJWT(header: String): Boolean {
  val out = withAuthorizationHeader(header) {
    try {
      parser.parseClaimsJws(it)
      true
    } catch (e: Exception) {
      logger.error("Exception occurred while processing JWT", e)
      false
    }
  }
  return out.fold({ false }) { it }
}
