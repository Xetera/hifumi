package connection

import helpers.post
import helpers.get
import com.google.gson.Gson
import io.github.cdimascio.dotenv.dotenv

val gson = Gson()
val dotenv = dotenv()

val OAUTH_ID = dotenv["OAUTH_ID"].toString()
val OAUTH_SECRET = dotenv["OAUTH_SECRET"].toString()
val OAUTH_CALLBACK = dotenv["OAUTH_CALLBACK"].toString()

const val API_ENDPOINT = "https://discordapp.com/api/v6"
const val API_TOKEN = "/oauth2/token"
const val USER_AGENT = "discord-api:/r/NewGame (by /u/whamer100)"
const val CONTENT_TYPE = "application/x-www-form-urlencoded"
const val SCOPE_TYPE = "identify"

data class OAuthResponse(val access_token: String,
                         val token_type: String,
                         val expires_in: Int,
                         val refresh_token: String,
                         val scope: String)

data class OAuthUserObj(val id: String,
                        val username: String,
                        val discriminator: String,
                        val avatar: String?,
                        val bot: Boolean,
                        val mfa_enabled: Boolean,
                        val locale: String,
                        val verified: Boolean,
                        val email: String,
                        val flags: Int,
                        val premium_type: Int)

fun getParams(code: String): List<Pair<String, Any?>> {
    return listOf(
            "client_id" to OAUTH_ID,
            "client_secret" to OAUTH_SECRET,
            "grant_type" to "authorization_code",
            "code" to code,
            "redirect_uri" to OAUTH_CALLBACK,
            "scope" to SCOPE_TYPE
    )
}

suspend fun getData(code: String): OAuthResponse {
    val headers = mapOf("User-Agent" to USER_AGENT, "Content-Type" to CONTENT_TYPE)
    val parameters = getParams(code)
    return post(API_ENDPOINT+API_TOKEN, OAuthResponse::class.java, parameters, headers)
}

suspend fun callbackHandle(code: String): String {
    val returnData = getData(code)
    val auth = "${returnData.token_type} ${returnData.access_token}"
    val headers = mapOf("User-Agent" to USER_AGENT,
                        "Content-Type" to CONTENT_TYPE,
                        "Authorization" to auth)
    val response = get("$API_ENDPOINT/users/@me", OAuthUserObj::class.java, headers)
    return gson.toJson(mapOf("id" to response.id, "access_token" to returnData.access_token, "refresh_token" to returnData.refresh_token))
}