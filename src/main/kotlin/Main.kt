import controllers.getGuildImages
import controllers.getStats
import io.ktor.application.call
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.slf4j.LoggerFactory
import io.github.cdimascio.dotenv.dotenv

val dotenv = dotenv()

val datadogStats = dotenv["DATADOG_STATS"].toString() // pesky nullable string warning

fun main(args: Array<String>) {
    val logger = LoggerFactory.getLogger("Ktor.Router")
    val port = Integer.parseInt(dotenv["NEWGAME_PORT"] ?: "3000")
    val server = embeddedServer(Netty, port = port) {
        routing {
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
            route("images/{guildId}") {
                get {
                    val id = call.parameters["guildId"]
                    if (id == null) {
                        call.respondText("No guild id present")
                    } else {
                        call.respondText(getGuildImages(id))
                    }
                }
            }
            route("oauth") {
                get {
                    // handle stuff ty
                }
            }
        }
    }
    server.start(wait = true)
}

