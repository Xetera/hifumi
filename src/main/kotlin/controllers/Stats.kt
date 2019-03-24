package controllers

import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.coroutines.awaitStringResponse
import com.google.gson.Gson
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope

const val discordURL = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true"
const val redditUrl = "https://reddit.com/r/newgame/about.json"
const val USER_AGENT = "discord-api:/r/NewGame (by /u/Deathmeter)"

data class RedditResponseData(val subscribers: Int)
data class RedditResponse(val data: RedditResponseData)
data class DiscordResponse(val approximate_member_count: Int)
data class StatResponse(val discord: Int, val reddit: Int)

val gson = Gson()

suspend fun <T>get(url: String, json: Class<T>): T =
    gson.fromJson(Fuel.get(url)
        .header("User-Agent", USER_AGENT)
        .awaitStringResponse().third, json)

suspend fun getDiscordAsync() = coroutineScope {
    async {
        val discord = get(discordURL, DiscordResponse::class.java)
        discord.approximate_member_count
    }
}

suspend fun getRedditAsync() = coroutineScope {
    async {
        val reddit = get(redditUrl, RedditResponse::class.java)
        reddit.data.subscribers
    }
}

suspend fun getStats(): String = coroutineScope {
    val (discord, reddit) = awaitAll(getDiscordAsync(), getRedditAsync())
    val out = StatResponse(discord, reddit)
    gson.toJson(out)
}
