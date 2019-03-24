package controllers

import com.google.gson.Gson
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import java.net.URL

const val discordURL = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true"
const val redditUrl = "https://reddit.com/r/newgame/about.json"

data class RedditResponseData(val subscribers: Int)
data class RedditResponse(val data: RedditResponseData)
data class DiscordResponse(val approximate_member_count: Int)
data class StatResponse(val discord: Int, val reddit: Int)

val gson = Gson()

fun get(url: String) = URL(url).readText()

suspend fun getStats() = coroutineScope {
    val discordReq = async { get(discordURL) }
    val redditReq = async { get(redditUrl) }
    val (discordRes, redditRes) = awaitAll(discordReq, redditReq)
    val reddit = gson.fromJson(redditRes, RedditResponse::class.java)
    val discord = gson.fromJson(discordRes, DiscordResponse::class.java)
    val out = StatResponse(reddit.data.subscribers, discord.approximate_member_count)
    gson.toJson(out)
}
