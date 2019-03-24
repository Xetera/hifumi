package controllers

import arrow.core.None
import arrow.core.Option
import arrow.core.Some
import arrow.core.orElse
import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.coroutines.awaitStringResponse
import com.google.gson.Gson
import helpers.Cache
import helpers.CacheOptions
import kotlinx.coroutines.*

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
val gson = Gson()

suspend fun <T> get(url: String, json: Class<T>): T =
    gson.fromJson(
        Fuel.get(url)
            .header("User-Agent", USER_AGENT)
            .awaitStringResponse().third, json
    )

suspend fun getDiscordAsync(): Deferred<Int> = coroutineScope {
    async {
        val existing = statCache.get("discord")
        if (existing != null) {
            existing
        } else {
            val discord = get(discordURL, DiscordResponse::class.java)
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
            val reddit = get(redditUrl, RedditResponse::class.java)
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
