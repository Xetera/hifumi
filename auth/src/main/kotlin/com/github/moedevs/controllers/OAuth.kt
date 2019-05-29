package com.github.moedevs.controllers

import com.google.gson.Gson
import com.google.gson.annotations.SerializedName
import com.github.moedevs.helpers.get
import com.github.moedevs.helpers.post
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.sessions.CurrentSession
import io.ktor.sessions.get
import io.ktor.sessions.sessions
import io.ktor.sessions.set
import io.ktor.util.pipeline.PipelineContext

private val gson = Gson()
val dotenv = dotenv()

val OAUTH_ID = dotenv["OAUTH_ID"].toString()
val OAUTH_SECRET = dotenv["OAUTH_SECRET"].toString()
val OAUTH_CALLBACK = dotenv["OAUTH_CALLBACK"].toString()

private const val API_ENDPOINT = "https://discordapp.com/api/v6"
private const val API_TOKEN = "/oauth2/token"
private const val USER_AGENT = "discord-api:/r/NewGame (by /u/whamer100)"
private const val CONTENT_TYPE = "application/x-www-form-urlencoded"
private const val SCOPE_TYPE = "identify"

data class HasuraResponse(
  /**
   * the Discord ID of the logged in user
   */
  @SerializedName("X-Hasura-User-Id") val userId: String,
  @SerializedName("X-Hasura-Role") val role: String
)

data class AuthorizedResponse(val authorized: Boolean)

data class UserCache(
  val user: OAuthUserObj
)

data class UserGuild(
  val owner: Boolean,
  val permissions: Float,
  val icon: String,
  val id: String,
  val name: String
)

data class User(
  val name: String,
  val id: String
)

data class OAuthResponse(
  val access_token: String,
  val token_type: String,
  val expires_in: Int,
  val refresh_token: String,
  val scope: String
)

data class OAuthUserObj(
  val id: String,
  val username: String,
  val discriminator: String,
  val avatar: String?,
  val bot: Boolean,
  val mfa_enabled: Boolean,
  val locale: String,
  val verified: Boolean,
  val flags: Int,
  val premium_type: Int
)

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

suspend fun getGuilds(headers: Map<String, String>): List<UserGuild> =
  get("$API_ENDPOINT/users/@me/guilds", Array<UserGuild>::class.java, headers)
    .toList()

suspend fun callbackHandle(code: String, ctx: PipelineContext<Unit, ApplicationCall>): String {
  val returnData = getData(code)
  val auth = "${returnData.token_type} ${returnData.access_token}"

  val headers = mapOf(
    "User-Agent" to USER_AGENT,
    "Content-Type" to CONTENT_TYPE,
    "Authorization" to auth
  )

  val response = get("$API_ENDPOINT/users/@me", OAuthUserObj::class.java, headers)

  val cache = UserCache(response)
  ctx.call.sessions.set(response)

  return gson.toJson(cache)
}

/**
 * Attempts to pull authorization from the current session.
 * Returns nulls for unauthorized users
 *
 * @param session - the session of the user making the request
 */
fun authorize(session: CurrentSession): HasuraResponse? {
  val sess = session.get<OAuthUserObj>() ?: return null
  return HasuraResponse(sess.id, role = "user")
}

fun retrieveLoginStatus(session: CurrentSession): AuthorizedResponse {
  val sess = session.get<OAuthUserObj>()
  return AuthorizedResponse(sess != null)
}

//fun retreiveUser(session: CurrentSession): User? {
//  val sess = session.get<OAuthUserObj>() ?: return null
//
//  return User(sess)
//}
