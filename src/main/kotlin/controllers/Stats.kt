package controllers

import com.google.gson.Gson
import helpers.Cache
import helpers.CacheOptions
import helpers.get
import kotlinx.coroutines.*
import org.slf4j.LoggerFactory

val gson = Gson()

val logger = LoggerFactory.getLogger("Controller.Stats")

const val discordURL = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true"
const val redditUrl = "https://reddit.com/r/newgame/about.json"
const val USER_AGENT = "discord-api:/r/NewGame (by /u/Deathmeter)"

data class RedditResponseData(val subscribers: Int)
data class RedditResponse(val data: RedditResponseData)
data class DiscordResponse(val approximate_member_count: Int)
data class StatResponse(val discord: Int, val reddit: Int)

val statCache = Cache<String, Int>(
    CacheOptions(
        expiry = 10_000L
    )
)

suspend fun getDiscordAsync(): Deferred<Int> = coroutineScope {
    async {
        val existing = statCache.get("discord")
        if (existing != null) {
            existing
        } else {
            val discord = get(discordURL, DiscordResponse::class.java, mapOf("User-Agent" to USER_AGENT))
            val members = discord.approximate_member_count
            statCache.set("discord", members)
            members
        }
    }
}

suspend fun getRedditAsync() = coroutineScope {
    async {
        val existing = statCache.get("reddit")
        if (existing != null) {
            existing
        } else {
            val reddit = get(redditUrl, RedditResponse::class.java, mapOf("User-Agent" to USER_AGENT))
            val members = reddit.data.subscribers
            statCache.set("reddit", members)
            members
        }
    }
}

suspend fun getStats(): String {
    val (discord, reddit) = awaitAll(getDiscordAsync(), getRedditAsync())
    val out = StatResponse(discord, reddit)
    return gson.toJson(out)
}
