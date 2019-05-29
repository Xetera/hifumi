package com.github.moedevs

import com.github.moedevs.controllers.authorize
import com.github.moedevs.controllers.callbackHandle
import com.github.moedevs.controllers.getStats
import com.github.moedevs.controllers.retrieveLoginStatus
import com.github.moedevs.helpers.gson
import io.ktor.application.call
import io.ktor.http.HttpStatusCode
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.sessions.sessions

private val redirectUrl = dotenv["REDIRECT_URL"] ?: "http://localhost:4040/dashboard"

fun setupRouting(router: Routing) {
  router.get("/auth") {
    call.respond(gson.toJson(retrieveLoginStatus(call.sessions)))
  }
  router.get("/hasura") {
    println("Accessed /hasura")
    val output = authorize(call.sessions)
    if (output == null) {
      call.respond(HttpStatusCode(401, "Unauthorized"))
    } else {
      call.respondText(gson.toJson(output))
    }
  }
  router.get("bot/stats") {
    call.respondRedirect(datadogStats)
  }
  router.get("social/stats") {
    call.respondText(getStats())
  }
  router.get("callback") {
    val code = call.parameters["code"]
    val state = call.parameters["state"] // currently unused, here for future use.
    println(code)
    if (code == null) {
      call.respondText("Callback code is invalid and/or expired.\n\nPlease try again.")
    } else {
      callbackHandle(code, this)
      call.respondRedirect(redirectUrl)
    }
  }
}


