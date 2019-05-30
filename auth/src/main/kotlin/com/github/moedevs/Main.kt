package com.github.moedevs

import com.github.moedevs.models.OAuthUserObj
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.DefaultHeaders
import io.ktor.http.HttpMethod
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

val dotenv = dotenv()
const val DEFAULT_PORT = "3000"
val datadogStats = dotenv["DATADOG_STATS"].toString() // pesky nullable string warning

fun main() {
  val portInput = dotenv["NEWGAME_PORT"]
  val port = Integer.parseInt(portInput ?: DEFAULT_PORT)
  val server = embeddedServer(Netty, port = port) {
    install(DefaultHeaders) {
      header("Access-Control-Allow-Origin", "*")
      header("Access-Control-Allow-Methods", "GET,POST")
      header("Access-Control-Allow-Headers", "Authorization")
    }
    setupRouting(routing {})
  }
  server.start(wait = true)
}

