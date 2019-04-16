package connection

import io.github.cdimascio.dotenv.dotenv

val dotenv = dotenv()

val OAUTH_ID = dotenv["OAUTH_ID"].toString()
val OAUTH_SECRET = dotenv["OAUTH_SECRET"].toString()
val OAUTH_CALLBACK_PORT = dotenv["OAUTH_CALLBACK_PORT"].toString()

// add the oauth stuff