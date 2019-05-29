package com.github.moedevs

import com.github.moedevs.controllers.OAuthUserObj
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.DefaultHeaders
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.sessions.SessionStorageMemory
import io.ktor.sessions.Sessions
import io.ktor.sessions.cookie

val dotenv = dotenv()
const val DEFAULT_PORT = "3000"
val datadogStats = dotenv["DATADOG_STATS"].toString() // pesky nullable string warning

fun main() {
  val portInput = dotenv["NEWGAME_PORT"]
  val port = Integer.parseInt(portInput ?: DEFAULT_PORT)
  val server = embeddedServer(Netty, port = port) {
    install(DefaultHeaders) {
      header("Access-Control-Allow-Origin", "https://web.hifumi.io")
      header("Access-Control-Allow-Credentials", "true")
    }
    install(Sessions) {
      cookie<OAuthUserObj>("yunsessid", SessionStorageMemory()) {
        cookie.domain = ".hifumi.io"
        cookie.httpOnly = true
      }
    }
    setupRouting(routing {})
  }
  server.start(wait = true)
}

