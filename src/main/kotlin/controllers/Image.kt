package controllers

import connection.*
import kotlinx.coroutines.*
import org.litote.kmongo.*

data class Image(
    val message_id: String,
    val file_name: String,
    val guild: String,
    val url: String,
    val user_id: String
)

suspend fun getGuildImages(guildId: String) = coroutineScope {
    val images = db.getCollection<Image>("images")
    val results: List<Image> = images.find(Image::guild eq guildId).toList()
    results.json
}
