package com.github.moedevs.controllers

import arrow.core.flatMap
import com.github.moedevs.helpers.*
import com.github.moedevs.models.AuthorizedResponse
import com.github.moedevs.models.HasuraResponse
import com.github.moedevs.models.OAuthResponse
import com.github.moedevs.models.OAuthUserObj
import com.google.gson.Gson
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.ApplicationCall
import io.ktor.http.HttpStatusCode
import io.ktor.response.respondRedirect
import kotlin.collections.set

private val gson = Gson()
val dotenv = dotenv()

val members = mutableMapOf<String, OAuthUserObj>()

val OAUTH_ID = dotenv["YUN_OAUTH_ID"].toString()
val OAUTH_SECRET = dotenv["YUN_OAUTH_SECRET"].toString()
val OAUTH_CALLBACK = dotenv["YUN_OAUTH_CALLBACK"].toString()
val OAUTH_REDIRECT = dotenv["YUN_OAUTH_REDIRECT"].toString()

private const val API_ENDPOINT = "https://discordapp.com/api/v6"
private const val API_TOKEN = "/oauth2/token"
private const val USER_AGENT = "discord-api:/r/NewGame (by /u/whamer100)"
private const val CONTENT_TYPE = "application/x-www-form-urlencoded"
private const val SCOPE_TYPE = "identify"

fun getParams(code: String): List<Pair<String, String>> = listOf(
  "client_id" to OAUTH_ID,
  "client_secret" to OAUTH_SECRET,
  "grant_type" to "authorization_code",
  "code" to code,
  "redirect_uri" to OAUTH_CALLBACK,
  "scope" to SCOPE_TYPE
)

suspend fun getData(code: String): OAuthResponse {
  val headers = mapOf("User-Agent" to USER_AGENT, "Content-Type" to CONTENT_TYPE)
  val parameters = getParams(code)
  val endpoint = API_ENDPOINT + API_TOKEN
  return post(endpoint, OAuthResponse::class.java, parameters, headers)
}

suspend fun callbackHandle(call: ApplicationCall) {
  val code = call.request.queryParameters["code"]
    ?: return
  val returnData = getData(code)
  val auth = "${returnData.token_type} ${returnData.access_token}"

  val headers = mapOf(
    "User-Agent" to USER_AGENT,
    "Content-Type" to CONTENT_TYPE,
    "Authorization" to auth
  )

  val response = get("$API_ENDPOINT/users/@me", OAuthUserObj::class.java, headers)

  members[response.id] = response

  val jwt = signUser(response.id)
  call.respondRedirect("$OAUTH_REDIRECT?code=$jwt")
}

suspend fun getHasura(call: ApplicationCall) {
  logger.info("Accessed /hasura")

  val auth = extractHeader(call.request.headers, "Authorization")
  val result = auth
    .flatMap { withAuthorizationHeader(it, ::authorize) }
    .mapLeft { HttpStatusCode.Unauthorized }
  call.respondEither(result)
}

/**
 * Attempts to pull authorization from the current session.
 * Returns nulls for unauthorized users
 */
fun authorize(jwt: String): HasuraResponse {
  val token = checkUser(jwt)
  val userId = token.body[JWT_CLAIM_USER_ID] as String
  // TODO: add role based permissions, remove hardcoded user response
  return HasuraResponse(userId, role = "user")
}

fun retrieveLoginStatus(call: ApplicationCall): AuthorizedResponse =
  AuthorizedResponse(
    extractHeader(call.request.headers, "Authorization")
      .flatMap { withAuthorizationHeader(it, ::isValidJWT) }
      .fold({ false }) { it }
  )

