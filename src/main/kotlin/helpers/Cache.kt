package helpers

import java.util.*
import kotlin.concurrent.schedule

data class CacheOptions(val expiry: Long)

class Cache<K, V>(private val opts: CacheOptions) {
    private val map = mutableMapOf<K, V>()
    fun get(key: K): V? = map[key]

    fun set(key: K, value: V) {
        map[key] = value
        Timer("expire-key", true).schedule(opts.expiry) {
            println("Removing expired key $key")
            map.remove(key)
        }
    }
}