package com.github.moedevs.controllers

import com.github.moedevs.helpers.*
import com.github.moedevs.models.AuthorizedResponse
import com.github.moedevs.models.HasuraResponse
import com.github.moedevs.models.OAuthResponse
import com.github.moedevs.models.OAuthUserObj
import com.google.gson.Gson
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.ApplicationCall
import io.ktor.http.HttpStatusCode
import io.ktor.response.header
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.util.pipeline.PipelineContext
import kotlin.collections.set

private val gson = Gson()
val dotenv = dotenv()

val members = mutableMapOf<String, OAuthUserObj>()

val OAUTH_ID = dotenv["YUN_OAUTH_ID"].toString()
val OAUTH_SECRET = dotenv["YUN_OAUTH_SECRET"].toString()
val OAUTH_CALLBACK = dotenv["YUN_OAUTH_CALLBACK"].toString()

private const val API_ENDPOINT = "https://discordapp.com/api/v6"
private const val API_TOKEN = "/oauth2/token"
private const val USER_AGENT = "discord-api:/r/NewGame (by /u/whamer100)"
private const val CONTENT_TYPE = "application/x-www-form-urlencoded"
private const val SCOPE_TYPE = "identify"

fun getParams(code: String): List<Pair<String, Any?>> = listOf(
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

suspend fun callbackHandle(code: String, ctx: PipelineContext<Unit, ApplicationCall>): String {
  val returnData = getData(code)
  val auth = "${returnData.token_type} ${returnData.access_token}"

  val headers = mapOf(
    "User-Agent" to USER_AGENT,
    "Content-Type" to CONTENT_TYPE,
    "Authorization" to auth
  )

  val response = get("$API_ENDPOINT/users/@me", OAuthUserObj::class.java, headers)

  members[response.id] = response

  return signUser(response.id)
}

suspend fun getHasura(call: ApplicationCall) {
  val is401 = HttpStatusCode(401, "Unauthorized")
  println("Accessed /hasura")
  val auth = call.request.headers["Authorization"]
  if (auth == null) {
    call.response.header("WWW-Authenticate", "Bearer")
    return call.respond(is401)
  }
  if (auth.split(" ").size < 2) {
    return call.respond(HttpStatusCode(400, "A 'Bearer' authorization schema is required"))
  }
  val (method, key) = auth.split(" ")
  if (method != "Bearer") {
    return call.respond(HttpStatusCode(400, "$method is not a valid schema, only 'Bearer' is allowed"))
  }
  val output = authorize(key)
  call.respondText(gson.toJson(output))
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

fun retrieveLoginStatus(jwt: String): AuthorizedResponse =
  AuthorizedResponse(isValid(jwt))
