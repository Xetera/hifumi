package com.github.moedevs.helpers

import arrow.core.Either
import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.core.FuelError
import com.github.kittinunf.fuel.coroutines.awaitStringResponse
import com.github.kittinunf.fuel.coroutines.awaitStringResponseResult
import com.github.moedevs.models.RequestError
import com.google.gson.Gson
import io.ktor.http.Headers
import io.ktor.http.Parameters

val gson = Gson()

suspend fun <T> get(url: String, json: Class<T>, headers: Map<String, Any>?): T {
  val defaultHeaders = mapOf("User-Agent" to "discord-api:/r/NewGame")
  return gson.fromJson(
    Fuel.get(url)
      .header(headers ?: defaultHeaders)
      .awaitStringResponse().third,
    json
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

fun extractHeader(headers: Headers, name: String): Either<RequestError.MissingHeader, String> {
  val header = headers[name]
    ?: return Either.Left(RequestError.MissingHeader(name))
  return Either.Right(header)
}

fun extractParameter(params: Parameters, name: String): Either<RequestError.MissingParameter, String> {
  val param = params[name]
    ?: return Either.Left(RequestError.MissingParameter(name))
  return Either.Right(param)
}
