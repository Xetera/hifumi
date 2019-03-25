package connection

import org.litote.kmongo.coroutine.*
import org.litote.kmongo.reactivestreams.KMongo

const val DEFAULT_URL = "client://localhost:27017"
var uri = System.getenv("MONGODB_URL") ?: DEFAULT_URL
val client = KMongo.createClient().coroutine
val db = client.getDatabase("test")
