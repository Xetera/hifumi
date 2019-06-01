package com.github.moedevs

import com.github.moedevs.controllers.callbackHandle
import com.github.moedevs.controllers.getHasura
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
import io.ktor.routing.options

private val redirectUrl = dotenv["REDIRECT_URL"] ?: "http://localhost:4040/dashboard"

fun setupRouting(router: Routing) {
  // really not sure why we need this but we do
  router.options("*") {
    call.respond(HttpStatusCode.Accepted)
  }

  router.get("/auth") {
    call.respond(retrieveLoginStatus(call))
  }
  router.get("/hasura") {
    getHasura(call)
  }
  router.get("bot/stats") {
    call.respondRedirect(datadogStats)
  }
  router.get("social/stats") {
    call.respond(getStats())
  }
  router.get("callback") {
    callbackHandle(call)
  }
}


