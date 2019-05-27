package main

import controllers.OAuthUserObj
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.sessions.SessionStorageMemory
import io.ktor.sessions.Sessions
import io.ktor.sessions.cookie
import org.slf4j.LoggerFactory
import setupRouting

val dotenv = dotenv()
const val DEFAULT_PORT = "3000"
val datadogStats = dotenv["DATADOG_STATS"].toString() // pesky nullable string warning

fun main() {
  val portInput = dotenv["NEWGAME_PORT"]
  val port = Integer.parseInt(portInput ?: DEFAULT_PORT)
  val server = embeddedServer(Netty, port = port) {
    install(CORS) {
      anyHost()
      allowCredentials = true
    }
    install(Sessions) {
      cookie<OAuthUserObj>("yunsessid", SessionStorageMemory()) {
        cookie.httpOnly = true
      }
    }
    setupRouting(routing {})
  }
  server.start(wait = true)
}

