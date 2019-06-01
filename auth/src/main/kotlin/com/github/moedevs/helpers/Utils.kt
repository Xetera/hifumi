package com.github.moedevs.helpers

import arrow.core.Either
import io.ktor.application.ApplicationCall
import io.ktor.response.respond

fun <A, B, E> useNullable(a: A, orElse: E, f: (A) -> B?): Either<E, B> {
  val result = f(a)
  return if (result != null) {
    Either.Right(result)
  } else {
    Either.Left(orElse)
  }
}

suspend fun <A, B> ApplicationCall.respondEither(either: Either<A, B>) = when (either) {
  is Either.Left -> respond(either.a as Any)
  is Either.Right -> respond(either.b as Any)
}

