package helpers

import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.coroutines.awaitStringResponse
import com.google.gson.Gson

val gson = Gson()

suspend fun <T> get(url: String, json: Class<T>, headers: Map<String, Any>?): T {
  val defaultHeaders = mapOf("User-Agent" to "discord-api:/r/NewGame")
  return gson.fromJson(
    Fuel.get(url)
      .header(headers ?: defaultHeaders)
      .awaitStringResponse().third, json
  )
}

suspend fun <T> post(url: String, json: Class<T>, parameters: List<Pair<String, Any?>>, headers: Map<String, Any>?): T {
  val defaultHeaders = mapOf("User-Agent" to "discord-api:/r/NewGame")
  return gson.fromJson(
    Fuel.post(url, parameters)
      .header(headers ?: defaultHeaders)
      .awaitStringResponse().third, json
  )
}

