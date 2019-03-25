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
        }
    }
    server.start(wait = true)
}