import controllers.getStats
import io.ktor.application.call
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

fun main(args: Array<String>) {
    val port = Integer.parseInt(System.getenv("NEWGAME_PORT") ?: "3000")
    val server = embeddedServer(Netty, port = port) {
        routing {
            get("/") {
                call.respondText(getStats())
            }
        }
    }
    server.start(wait = true)
}