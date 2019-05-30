package com.github.moedevs

import com.github.moedevs.controllers.*
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
  router.options("*") {
    call.respond(HttpStatusCode.Accepted)
  }
  router.get("/auth") {
    val auth = call.request.headers["Authorization"]
    call.respond(gson.toJson(retrieveLoginStatus(auth ?: "no-auth")))
  }
  router.get("/hasura") {
    getHasura(call)
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
      call.respondText("Callback code is invalid and/or expired.\nPlease try again.")
    } else {
      val jwt = callbackHandle(code, this)
      val redirect = "$redirectUrl?code=$jwt"
      call.respondRedirect(redirect)
    }
  }
}


