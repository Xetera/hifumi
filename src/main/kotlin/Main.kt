import controllers.getGuildImages
import controllers.getStats
import io.ktor.application.call
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.slf4j.LoggerFactory

const val datadogStats = "https://p.datadoghq.com/sb/71d9e3d68-233c63b5d43908deb0df73c63059cdb2"

fun main(args: Array<String>) {
    val logger = LoggerFactory.getLogger("Ktor.Router")
    val port = Integer.parseInt(System.getenv("NEWGAME_PORT") ?: "3000")
    val server = embeddedServer(Netty, port = port) {
        routing {
            route("stats") {
                get("social") {
                    call.respondText(getStats())
                }
                get("bot") {
                    call.respondRedirect(datadogStats)
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
        }
    }
    server.start(wait = true)
}

