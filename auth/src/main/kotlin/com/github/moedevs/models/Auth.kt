package com.github.moedevs.models

import com.google.gson.annotations.SerializedName

data class HasuraResponse(
  /**
   * the Discord ID of the logged in user
   */
  @SerializedName("X-Hasura-User-Id") val userId: String,
  @SerializedName("X-Hasura-Role") val role: String
)

data class AuthorizedResponse(val authorized: Boolean)

data class UserCache(
  val user_id: String
)

data class OAuthResponse(
  val access_token: String,
  val token_type: String,
  val expires_in: Int,
  val refresh_token: String,
  val scope: String
)

data class OAuthUserObj(
  val id: String,
  val username: String,
  val discriminator: String,
  val avatar: String?,
  val bot: Boolean,
  val mfa_enabled: Boolean,
  val locale: String,
  val verified: Boolean,
  val flags: Int,
  val premium_type: Int
)

