package com.github.moedevs.helpers

import com.github.moedevs.controllers.dotenv
import com.github.moedevs.controllers.logger
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import io.jsonwebtoken.security.SignatureException

const val JWT_CLAIM_USER_ID = "user_id"

val secretKey = dotenv["YUN_JWT_SECRET"]!!.toByteArray()

val key = Keys.hmacShaKeyFor(secretKey)

val builder = Jwts.builder().signWith(key)
val parser = Jwts.parser().setSigningKey(key)

fun signUser(id: String): String =
  builder.claim(JWT_CLAIM_USER_ID, id).compact()

fun checkUser(token: String) =
  parser.parseClaimsJws(token)

fun isValid(token: String) =
  try {
    checkUser(token)
    true
  } catch (e: SignatureException) {
    false
  } catch (e: Exception) {
    logger.error("Exception occurred while processing JWT")
    logger.error(e.message)
    false
  }
