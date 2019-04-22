package main

import controllers.*
import helpers.gson
import io.github.cdimascio.dotenv.dotenv
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.http.HttpStatusCode
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.route
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.sessions.*
import org.slf4j.LoggerFactory

val dotenv = dotenv()

val datadogStats = dotenv["DATADOG_STATS"].toString() // pesky nullable string warning

fun main() {
  val logger = LoggerFactory.getLogger("Ktor.Router")
  val port = Integer.parseInt(dotenv["NEWGAME_PORT"] ?: "3000")
  val server = embeddedServer(Netty, port = port) {
    install(Sessions) {
      cookie<OAuthUserObj>("yunsessid", SessionStorageMemory())
    }
    routing {
      get("/auth") {
        val output = authorize(call.sessions)
        if (output == null) {
          call.respond(HttpStatusCode(401, "Unauthorized"))
        } else {
          call.respondText(gson.toJson(output))
        }
      }
      route("bot") {
        get("stats") {
          call.respondRedirect(datadogStats)
        }
      }
      route("social") {
        get("stats") {
          call.respondText(getStats())
        }
      }
      route("callback") {
        get {
          val code = call.parameters["code"]
          val state = call.parameters["state"] // currently unused, here for future use.
          if (code == null) {
            call.respondText("Callback code is invalid and/or expired.\n\nPlease try again.")
          } else {
            call.respondText(callbackHandle(code, this))
          }
        }
      }
    }
  }
  server.start(wait = true)
}

