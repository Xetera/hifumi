package com.github.moedevs

import com.github.moedevs.helpers.gson
import com.github.moedevs.models.OAuthUserObj
import com.google.gson.Gson
import com.google.gson.GsonBuilder
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.gson.GsonConverter
import io.ktor.http.ContentType
import io.ktor.http.HttpMethod
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

val dotenv = dotenv()
const val DEFAULT_PORT = "4000"
val datadogStats = dotenv["DATADOG_STATS"].toString() // pesky nullable string warning

fun main() {
  val portInput = dotenv["YUN_PORT"]
  val port = Integer.parseInt(portInput ?: DEFAULT_PORT)
  val server = embeddedServer(Netty, port = port) {
    install(ContentNegotiation) {
      register(ContentType.Application.Json, GsonConverter(GsonBuilder().create()))
    }
    install(DefaultHeaders) {
      header("Access-Control-Allow-Origin", "*")
      header("Access-Control-Allow-Methods", "GET,POST")
      header("Access-Control-Allow-Headers", "Authorization")
    }
    setupRouting(routing {})
  }
  server.start(wait = true)
}

