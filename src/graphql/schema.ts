import { Observable } from "graphql-typed-client"

/** query root */
export interface query_root {
  /** fetch data from the table: "auto_tags" */
  auto_tags: auto_tags[]
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: auto_tags_aggregate
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk: auto_tags | null
  /** fetch data from the table: "guilds" */
  guilds: guilds[]
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: guilds_aggregate
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk: guilds | null
  /** fetch data from the table: "image_channels" */
  image_channels: image_channels[]
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: image_channels_aggregate
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk: image_channels | null
  /** fetch data from the table: "image_tags" */
  image_tags: image_tags[]
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: image_tags_aggregate
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk: image_tags | null
  /** fetch data from the table: "images" */
  images: images[]
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: images_aggregate
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk: images | null
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: tag_counts[]
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: tag_counts_aggregate
  /** fetch data from the table: "tag_counts" */
  tag_counts: tag_counts[]
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: tag_counts_aggregate
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk: tag_counts | null
  /** fetch data from the table: "users" */
  users: users[]
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: users | null
  __typename: String
}

/** select columns of table "auto_tags" */
export enum auto_tags_select_column {
  /** column name */
  channel_id = "channel_id",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.  */
export type Int = number

/** column ordering options */
export enum order_by {
  /** in the ascending order, nulls last */
  asc = "asc",
  /** in the ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in the ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in the descending order, nulls first */
  desc = "desc",
  /** in the descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in the descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export type timestamptz = any

/** columns and relationships of "auto_tags" */
export interface auto_tags {
  channel_id: String
  id: Int
  /** An object relationship */
  image_channel: image_channels
  name: String
  __typename: String
}

/** columns and relationships of "image_channels" */
export interface image_channels {
  assigner_id: String
  /** An array relationship */
  auto_tags: auto_tags[]
  /** An aggregated array relationship */
  auto_tags_aggregate: auto_tags_aggregate
  channel_id: String
  /** An object relationship */
  guild: guilds
  guild_id: String
  /** An object relationship */
  user: users
  __typename: String
}

/** aggregated selection of "auto_tags" */
export interface auto_tags_aggregate {
  aggregate: auto_tags_aggregate_fields | null
  nodes: auto_tags[]
  __typename: String
}

/** aggregate fields of "auto_tags" */
export interface auto_tags_aggregate_fields {
  avg: auto_tags_avg_fields | null
  count: Int | null
  max: auto_tags_max_fields | null
  min: auto_tags_min_fields | null
  stddev: auto_tags_stddev_fields | null
  stddev_pop: auto_tags_stddev_pop_fields | null
  stddev_samp: auto_tags_stddev_samp_fields | null
  sum: auto_tags_sum_fields | null
  var_pop: auto_tags_var_pop_fields | null
  var_samp: auto_tags_var_samp_fields | null
  variance: auto_tags_variance_fields | null
  __typename: String
}

/** aggregate avg on columns */
export interface auto_tags_avg_fields {
  id: Float | null
  __typename: String
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).  */
export type Float = number

/** aggregate max on columns */
export interface auto_tags_max_fields {
  channel_id: String | null
  id: Int | null
  name: String | null
  __typename: String
}

/** aggregate min on columns */
export interface auto_tags_min_fields {
  channel_id: String | null
  id: Int | null
  name: String | null
  __typename: String
}

/** aggregate stddev on columns */
export interface auto_tags_stddev_fields {
  id: Float | null
  __typename: String
}

/** aggregate stddev_pop on columns */
export interface auto_tags_stddev_pop_fields {
  id: Float | null
  __typename: String
}

/** aggregate stddev_samp on columns */
export interface auto_tags_stddev_samp_fields {
  id: Float | null
  __typename: String
}

/** aggregate sum on columns */
export interface auto_tags_sum_fields {
  id: Int | null
  __typename: String
}

/** aggregate var_pop on columns */
export interface auto_tags_var_pop_fields {
  id: Float | null
  __typename: String
}

/** aggregate var_samp on columns */
export interface auto_tags_var_samp_fields {
  id: Float | null
  __typename: String
}

/** aggregate variance on columns */
export interface auto_tags_variance_fields {
  id: Float | null
  __typename: String
}

/** columns and relationships of "guilds" */
export interface guilds {
  enabled: Boolean | null
  guild_id: String
  /** An array relationship */
  image_channels: image_channels[]
  /** An aggregated array relationship */
  image_channels_aggregate: image_channels_aggregate
  /** An array relationship */
  images: images[]
  /** An aggregated array relationship */
  images_aggregate: images_aggregate
  name: String
  welcome_channel: String | null
  __typename: String
}

/** select columns of table "image_channels" */
export enum image_channels_select_column {
  /** column name */
  assigner_id = "assigner_id",
  /** column name */
  channel_id = "channel_id",
  /** column name */
  guild_id = "guild_id",
}

/** aggregated selection of "image_channels" */
export interface image_channels_aggregate {
  aggregate: image_channels_aggregate_fields | null
  nodes: image_channels[]
  __typename: String
}

/** aggregate fields of "image_channels" */
export interface image_channels_aggregate_fields {
  count: Int | null
  max: image_channels_max_fields | null
  min: image_channels_min_fields | null
  __typename: String
}

/** aggregate max on columns */
export interface image_channels_max_fields {
  assigner_id: String | null
  channel_id: String | null
  guild_id: String | null
  __typename: String
}

/** aggregate min on columns */
export interface image_channels_min_fields {
  assigner_id: String | null
  channel_id: String | null
  guild_id: String | null
  __typename: String
}

/** select columns of table "images" */
export enum images_select_column {
  /** column name */
  created_at = "created_at",
  /** column name */
  file_name = "file_name",
  /** column name */
  guild_id = "guild_id",
  /** column name */
  id = "id",
  /** column name */
  message_id = "message_id",
  /** column name */
  url = "url",
  /** column name */
  user_id = "user_id",
}

/** columns and relationships of "images" */
export interface images {
  created_at: timestamptz
  file_name: String | null
  /** An object relationship */
  guild: guilds | null
  guild_id: String | null
  id: Int
  /** An array relationship */
  image_tags: image_tags[]
  /** An aggregated array relationship */
  image_tags_aggregate: image_tags_aggregate
  message_id: String | null
  url: String
  /** An object relationship */
  user: users | null
  user_id: String | null
  __typename: String
}

/** select columns of table "image_tags" */
export enum image_tags_select_column {
  /** column name */
  id = "id",
  /** column name */
  image_id = "image_id",
  /** column name */
  name = "name",
  /** column name */
  tagger_id = "tagger_id",
}

/** columns and relationships of "image_tags" */
export interface image_tags {
  id: Int
  /** An object relationship */
  image: images
  image_id: Int
  name: String
  tagger_id: String
  /** An object relationship */
  user: users
  __typename: String
}

/** columns and relationships of "users" */
export interface users {
  avatar: String | null
  /** An array relationship */
  image_channels: image_channels[]
  /** An aggregated array relationship */
  image_channels_aggregate: image_channels_aggregate
  /** An array relationship */
  image_tags: image_tags[]
  /** An aggregated array relationship */
  image_tags_aggregate: image_tags_aggregate
  /** An array relationship */
  images: images[]
  /** An aggregated array relationship */
  images_aggregate: images_aggregate
  name: String | null
  user_id: String
  __typename: String
}

/** aggregated selection of "image_tags" */
export interface image_tags_aggregate {
  aggregate: image_tags_aggregate_fields | null
  nodes: image_tags[]
  __typename: String
}

/** aggregate fields of "image_tags" */
export interface image_tags_aggregate_fields {
  avg: image_tags_avg_fields | null
  count: Int | null
  max: image_tags_max_fields | null
  min: image_tags_min_fields | null
  stddev: image_tags_stddev_fields | null
  stddev_pop: image_tags_stddev_pop_fields | null
  stddev_samp: image_tags_stddev_samp_fields | null
  sum: image_tags_sum_fields | null
  var_pop: image_tags_var_pop_fields | null
  var_samp: image_tags_var_samp_fields | null
  variance: image_tags_variance_fields | null
  __typename: String
}

/** aggregate avg on columns */
export interface image_tags_avg_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregate max on columns */
export interface image_tags_max_fields {
  id: Int | null
  image_id: Int | null
  name: String | null
  tagger_id: String | null
  __typename: String
}

/** aggregate min on columns */
export interface image_tags_min_fields {
  id: Int | null
  image_id: Int | null
  name: String | null
  tagger_id: String | null
  __typename: String
}

/** aggregate stddev on columns */
export interface image_tags_stddev_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregate stddev_pop on columns */
export interface image_tags_stddev_pop_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregate stddev_samp on columns */
export interface image_tags_stddev_samp_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregate sum on columns */
export interface image_tags_sum_fields {
  id: Int | null
  image_id: Int | null
  __typename: String
}

/** aggregate var_pop on columns */
export interface image_tags_var_pop_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregate var_samp on columns */
export interface image_tags_var_samp_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregate variance on columns */
export interface image_tags_variance_fields {
  id: Float | null
  image_id: Float | null
  __typename: String
}

/** aggregated selection of "images" */
export interface images_aggregate {
  aggregate: images_aggregate_fields | null
  nodes: images[]
  __typename: String
}

/** aggregate fields of "images" */
export interface images_aggregate_fields {
  avg: images_avg_fields | null
  count: Int | null
  max: images_max_fields | null
  min: images_min_fields | null
  stddev: images_stddev_fields | null
  stddev_pop: images_stddev_pop_fields | null
  stddev_samp: images_stddev_samp_fields | null
  sum: images_sum_fields | null
  var_pop: images_var_pop_fields | null
  var_samp: images_var_samp_fields | null
  variance: images_variance_fields | null
  __typename: String
}

/** aggregate avg on columns */
export interface images_avg_fields {
  id: Float | null
  __typename: String
}

/** aggregate max on columns */
export interface images_max_fields {
  created_at: timestamptz | null
  file_name: String | null
  guild_id: String | null
  id: Int | null
  message_id: String | null
  url: String | null
  user_id: String | null
  __typename: String
}

/** aggregate min on columns */
export interface images_min_fields {
  created_at: timestamptz | null
  file_name: String | null
  guild_id: String | null
  id: Int | null
  message_id: String | null
  url: String | null
  user_id: String | null
  __typename: String
}

/** aggregate stddev on columns */
export interface images_stddev_fields {
  id: Float | null
  __typename: String
}

/** aggregate stddev_pop on columns */
export interface images_stddev_pop_fields {
  id: Float | null
  __typename: String
}

/** aggregate stddev_samp on columns */
export interface images_stddev_samp_fields {
  id: Float | null
  __typename: String
}

/** aggregate sum on columns */
export interface images_sum_fields {
  id: Int | null
  __typename: String
}

/** aggregate var_pop on columns */
export interface images_var_pop_fields {
  id: Float | null
  __typename: String
}

/** aggregate var_samp on columns */
export interface images_var_samp_fields {
  id: Float | null
  __typename: String
}

/** aggregate variance on columns */
export interface images_variance_fields {
  id: Float | null
  __typename: String
}

/** select columns of table "guilds" */
export enum guilds_select_column {
  /** column name */
  enabled = "enabled",
  /** column name */
  guild_id = "guild_id",
  /** column name */
  name = "name",
  /** column name */
  welcome_channel = "welcome_channel",
}

/** aggregated selection of "guilds" */
export interface guilds_aggregate {
  aggregate: guilds_aggregate_fields | null
  nodes: guilds[]
  __typename: String
}

/** aggregate fields of "guilds" */
export interface guilds_aggregate_fields {
  count: Int | null
  max: guilds_max_fields | null
  min: guilds_min_fields | null
  __typename: String
}

/** aggregate max on columns */
export interface guilds_max_fields {
  guild_id: String | null
  name: String | null
  welcome_channel: String | null
  __typename: String
}

/** aggregate min on columns */
export interface guilds_min_fields {
  guild_id: String | null
  name: String | null
  welcome_channel: String | null
  __typename: String
}

/** select columns of table "tag_counts" */
export enum tag_counts_select_column {
  /** column name */
  count = "count",
  /** column name */
  name = "name",
}

export type bigint = any

/** columns and relationships of "tag_counts" */
export interface tag_counts {
  count: bigint
  name: String
  __typename: String
}

/** aggregated selection of "tag_counts" */
export interface tag_counts_aggregate {
  aggregate: tag_counts_aggregate_fields | null
  nodes: tag_counts[]
  __typename: String
}

/** aggregate fields of "tag_counts" */
export interface tag_counts_aggregate_fields {
  avg: tag_counts_avg_fields | null
  count: Int | null
  max: tag_counts_max_fields | null
  min: tag_counts_min_fields | null
  stddev: tag_counts_stddev_fields | null
  stddev_pop: tag_counts_stddev_pop_fields | null
  stddev_samp: tag_counts_stddev_samp_fields | null
  sum: tag_counts_sum_fields | null
  var_pop: tag_counts_var_pop_fields | null
  var_samp: tag_counts_var_samp_fields | null
  variance: tag_counts_variance_fields | null
  __typename: String
}

/** aggregate avg on columns */
export interface tag_counts_avg_fields {
  count: Float | null
  __typename: String
}

/** aggregate max on columns */
export interface tag_counts_max_fields {
  count: bigint | null
  name: String | null
  __typename: String
}

/** aggregate min on columns */
export interface tag_counts_min_fields {
  count: bigint | null
  name: String | null
  __typename: String
}

/** aggregate stddev on columns */
export interface tag_counts_stddev_fields {
  count: Float | null
  __typename: String
}

/** aggregate stddev_pop on columns */
export interface tag_counts_stddev_pop_fields {
  count: Float | null
  __typename: String
}

/** aggregate stddev_samp on columns */
export interface tag_counts_stddev_samp_fields {
  count: Float | null
  __typename: String
}

/** aggregate sum on columns */
export interface tag_counts_sum_fields {
  count: bigint | null
  __typename: String
}

/** aggregate var_pop on columns */
export interface tag_counts_var_pop_fields {
  count: Float | null
  __typename: String
}

/** aggregate var_samp on columns */
export interface tag_counts_var_samp_fields {
  count: Float | null
  __typename: String
}

/** aggregate variance on columns */
export interface tag_counts_variance_fields {
  count: Float | null
  __typename: String
}

/** select columns of table "users" */
export enum users_select_column {
  /** column name */
  avatar = "avatar",
  /** column name */
  name = "name",
  /** column name */
  user_id = "user_id",
}

/** aggregated selection of "users" */
export interface users_aggregate {
  aggregate: users_aggregate_fields | null
  nodes: users[]
  __typename: String
}

/** aggregate fields of "users" */
export interface users_aggregate_fields {
  count: Int | null
  max: users_max_fields | null
  min: users_min_fields | null
  __typename: String
}

/** aggregate max on columns */
export interface users_max_fields {
  avatar: String | null
  name: String | null
  user_id: String | null
  __typename: String
}

/** aggregate min on columns */
export interface users_min_fields {
  avatar: String | null
  name: String | null
  user_id: String | null
  __typename: String
}

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "auto_tags" */
  delete_auto_tags: auto_tags_mutation_response | null
  /** delete data from the table: "guilds" */
  delete_guilds: guilds_mutation_response | null
  /** delete data from the table: "image_channels" */
  delete_image_channels: image_channels_mutation_response | null
  /** delete data from the table: "image_tags" */
  delete_image_tags: image_tags_mutation_response | null
  /** delete data from the table: "images" */
  delete_images: images_mutation_response | null
  /** delete data from the table: "tag_counts" */
  delete_tag_counts: tag_counts_mutation_response | null
  /** delete data from the table: "users" */
  delete_users: users_mutation_response | null
  /** insert data into the table: "auto_tags" */
  insert_auto_tags: auto_tags_mutation_response | null
  /** insert data into the table: "guilds" */
  insert_guilds: guilds_mutation_response | null
  /** insert data into the table: "image_channels" */
  insert_image_channels: image_channels_mutation_response | null
  /** insert data into the table: "image_tags" */
  insert_image_tags: image_tags_mutation_response | null
  /** insert data into the table: "images" */
  insert_images: images_mutation_response | null
  /** insert data into the table: "tag_counts" */
  insert_tag_counts: tag_counts_mutation_response | null
  /** insert data into the table: "users" */
  insert_users: users_mutation_response | null
  /** update data of the table: "auto_tags" */
  update_auto_tags: auto_tags_mutation_response | null
  /** update data of the table: "guilds" */
  update_guilds: guilds_mutation_response | null
  /** update data of the table: "image_channels" */
  update_image_channels: image_channels_mutation_response | null
  /** update data of the table: "image_tags" */
  update_image_tags: image_tags_mutation_response | null
  /** update data of the table: "images" */
  update_images: images_mutation_response | null
  /** update data of the table: "tag_counts" */
  update_tag_counts: tag_counts_mutation_response | null
  /** update data of the table: "users" */
  update_users: users_mutation_response | null
  __typename: String
}

/** response of any mutation on the table "auto_tags" */
export interface auto_tags_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: auto_tags[]
  __typename: String
}

/** response of any mutation on the table "guilds" */
export interface guilds_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: guilds[]
  __typename: String
}

/** response of any mutation on the table "image_channels" */
export interface image_channels_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: image_channels[]
  __typename: String
}

/** response of any mutation on the table "image_tags" */
export interface image_tags_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: image_tags[]
  __typename: String
}

/** response of any mutation on the table "images" */
export interface images_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: images[]
  __typename: String
}

/** response of any mutation on the table "tag_counts" */
export interface tag_counts_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: tag_counts[]
  __typename: String
}

/** response of any mutation on the table "users" */
export interface users_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: users[]
  __typename: String
}

/** unique or primary key constraints on table "auto_tags" */
export enum auto_tags_constraint {
  /** unique or primary key constraint */
  auto_tags_pkey = "auto_tags_pkey",
}

/** update columns of table "auto_tags" */
export enum auto_tags_update_column {
  /** column name */
  channel_id = "channel_id",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
}

/** unique or primary key constraints on table "image_channels" */
export enum image_channels_constraint {
  /** unique or primary key constraint */
  image_channels_pkey = "image_channels_pkey",
}

/** update columns of table "image_channels" */
export enum image_channels_update_column {
  /** column name */
  assigner_id = "assigner_id",
  /** column name */
  channel_id = "channel_id",
  /** column name */
  guild_id = "guild_id",
}

/** unique or primary key constraints on table "images" */
export enum images_constraint {
  /** unique or primary key constraint */
  images_pkey = "images_pkey",
}

/** update columns of table "images" */
export enum images_update_column {
  /** column name */
  created_at = "created_at",
  /** column name */
  file_name = "file_name",
  /** column name */
  guild_id = "guild_id",
  /** column name */
  id = "id",
  /** column name */
  message_id = "message_id",
  /** column name */
  url = "url",
  /** column name */
  user_id = "user_id",
}

/** unique or primary key constraints on table "users" */
export enum users_constraint {
  /** unique or primary key constraint */
  users_pkey = "users_pkey",
}

/** update columns of table "users" */
export enum users_update_column {
  /** column name */
  avatar = "avatar",
  /** column name */
  name = "name",
  /** column name */
  user_id = "user_id",
}

/** unique or primary key constraints on table "image_tags" */
export enum image_tags_constraint {
  /** unique or primary key constraint */
  image_tags_pkey = "image_tags_pkey",
}

/** update columns of table "image_tags" */
export enum image_tags_update_column {
  /** column name */
  id = "id",
  /** column name */
  image_id = "image_id",
  /** column name */
  name = "name",
  /** column name */
  tagger_id = "tagger_id",
}

/** unique or primary key constraints on table "guilds" */
export enum guilds_constraint {
  /** unique or primary key constraint */
  guilds_pkey = "guilds_pkey",
}

/** update columns of table "guilds" */
export enum guilds_update_column {
  /** column name */
  enabled = "enabled",
  /** column name */
  guild_id = "guild_id",
  /** column name */
  name = "name",
  /** column name */
  welcome_channel = "welcome_channel",
}

/** unique or primary key constraints on table "tag_counts" */
export enum tag_counts_constraint {
  /** unique or primary key constraint */
  tag_counts_pkey = "tag_counts_pkey",
}

/** update columns of table "tag_counts" */
export enum tag_counts_update_column {
  /** column name */
  count = "count",
  /** column name */
  name = "name",
}

/** subscription root */
export interface subscription_root {
  /** fetch data from the table: "auto_tags" */
  auto_tags: auto_tags[]
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: auto_tags_aggregate
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk: auto_tags | null
  /** fetch data from the table: "guilds" */
  guilds: guilds[]
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: guilds_aggregate
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk: guilds | null
  /** fetch data from the table: "image_channels" */
  image_channels: image_channels[]
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: image_channels_aggregate
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk: image_channels | null
  /** fetch data from the table: "image_tags" */
  image_tags: image_tags[]
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: image_tags_aggregate
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk: image_tags | null
  /** fetch data from the table: "images" */
  images: images[]
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: images_aggregate
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk: images | null
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: tag_counts[]
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: tag_counts_aggregate
  /** fetch data from the table: "tag_counts" */
  tag_counts: tag_counts[]
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: tag_counts_aggregate
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk: tag_counts | null
  /** fetch data from the table: "users" */
  users: users[]
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: users | null
  __typename: String
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

/** conflict action */
export enum conflict_action {
  /** ignore the insert on this row */
  ignore = "ignore",
  /** update the row with the given values */
  update = "update",
}

/** query root */
export interface query_rootRequest {
  /** fetch data from the table: "auto_tags" */
  auto_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: auto_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: auto_tags_order_by[] | null
          /** filter the rows returned */
          where?: auto_tags_bool_exp | null
        },
        auto_tagsRequest
      ]
    | auto_tagsRequest
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: auto_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: auto_tags_order_by[] | null
          /** filter the rows returned */
          where?: auto_tags_bool_exp | null
        },
        auto_tags_aggregateRequest
      ]
    | auto_tags_aggregateRequest
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk?: [{ id: Int }, auto_tagsRequest]
  /** fetch data from the table: "guilds" */
  guilds?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: guilds_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: guilds_order_by[] | null
          /** filter the rows returned */
          where?: guilds_bool_exp | null
        },
        guildsRequest
      ]
    | guildsRequest
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: guilds_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: guilds_order_by[] | null
          /** filter the rows returned */
          where?: guilds_bool_exp | null
        },
        guilds_aggregateRequest
      ]
    | guilds_aggregateRequest
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk?: [{ guild_id: String }, guildsRequest]
  /** fetch data from the table: "image_channels" */
  image_channels?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channelsRequest
      ]
    | image_channelsRequest
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channels_aggregateRequest
      ]
    | image_channels_aggregateRequest
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk?: [{ channel_id: String }, image_channelsRequest]
  /** fetch data from the table: "image_tags" */
  image_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tagsRequest
      ]
    | image_tagsRequest
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tags_aggregateRequest
      ]
    | image_tags_aggregateRequest
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk?: [{ id: Int }, image_tagsRequest]
  /** fetch data from the table: "images" */
  images?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        imagesRequest
      ]
    | imagesRequest
  /** fetch aggregated fields from the table: "images" */
  images_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        images_aggregateRequest
      ]
    | images_aggregateRequest
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: [{ id: Int }, imagesRequest]
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_countsRequest
      ]
    | tag_countsRequest
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_counts_aggregateRequest
      ]
    | tag_counts_aggregateRequest
  /** fetch data from the table: "tag_counts" */
  tag_counts?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_countsRequest
      ]
    | tag_countsRequest
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_counts_aggregateRequest
      ]
    | tag_counts_aggregateRequest
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk?: [{ name: String }, tag_countsRequest]
  /** fetch data from the table: "users" */
  users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        usersRequest
      ]
    | usersRequest
  /** fetch aggregated fields from the table: "users" */
  users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        users_aggregateRequest
      ]
    | users_aggregateRequest
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: [{ user_id: String }, usersRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** ordering options when selecting data from "auto_tags" */
export interface auto_tags_order_by {
  channel_id?: order_by | null
  id?: order_by | null
  image_channel?: image_channels_order_by | null
  name?: order_by | null
}

/** ordering options when selecting data from "image_channels" */
export interface image_channels_order_by {
  assigner_id?: order_by | null
  auto_tags_aggregate?: auto_tags_aggregate_order_by | null
  channel_id?: order_by | null
  guild?: guilds_order_by | null
  guild_id?: order_by | null
  user?: users_order_by | null
}

/** order by aggregate values of table "auto_tags" */
export interface auto_tags_aggregate_order_by {
  avg?: auto_tags_avg_order_by | null
  count?: order_by | null
  max?: auto_tags_max_order_by | null
  min?: auto_tags_min_order_by | null
  stddev?: auto_tags_stddev_order_by | null
  stddev_pop?: auto_tags_stddev_pop_order_by | null
  stddev_samp?: auto_tags_stddev_samp_order_by | null
  sum?: auto_tags_sum_order_by | null
  var_pop?: auto_tags_var_pop_order_by | null
  var_samp?: auto_tags_var_samp_order_by | null
  variance?: auto_tags_variance_order_by | null
}

/** order by avg() on columns of table "auto_tags" */
export interface auto_tags_avg_order_by {
  id?: order_by | null
}

/** order by max() on columns of table "auto_tags" */
export interface auto_tags_max_order_by {
  channel_id?: order_by | null
  id?: order_by | null
  name?: order_by | null
}

/** order by min() on columns of table "auto_tags" */
export interface auto_tags_min_order_by {
  channel_id?: order_by | null
  id?: order_by | null
  name?: order_by | null
}

/** order by stddev() on columns of table "auto_tags" */
export interface auto_tags_stddev_order_by {
  id?: order_by | null
}

/** order by stddev_pop() on columns of table "auto_tags" */
export interface auto_tags_stddev_pop_order_by {
  id?: order_by | null
}

/** order by stddev_samp() on columns of table "auto_tags" */
export interface auto_tags_stddev_samp_order_by {
  id?: order_by | null
}

/** order by sum() on columns of table "auto_tags" */
export interface auto_tags_sum_order_by {
  id?: order_by | null
}

/** order by var_pop() on columns of table "auto_tags" */
export interface auto_tags_var_pop_order_by {
  id?: order_by | null
}

/** order by var_samp() on columns of table "auto_tags" */
export interface auto_tags_var_samp_order_by {
  id?: order_by | null
}

/** order by variance() on columns of table "auto_tags" */
export interface auto_tags_variance_order_by {
  id?: order_by | null
}

/** ordering options when selecting data from "guilds" */
export interface guilds_order_by {
  enabled?: order_by | null
  guild_id?: order_by | null
  image_channels_aggregate?: image_channels_aggregate_order_by | null
  images_aggregate?: images_aggregate_order_by | null
  name?: order_by | null
  welcome_channel?: order_by | null
}

/** order by aggregate values of table "image_channels" */
export interface image_channels_aggregate_order_by {
  count?: order_by | null
  max?: image_channels_max_order_by | null
  min?: image_channels_min_order_by | null
}

/** order by max() on columns of table "image_channels" */
export interface image_channels_max_order_by {
  assigner_id?: order_by | null
  channel_id?: order_by | null
  guild_id?: order_by | null
}

/** order by min() on columns of table "image_channels" */
export interface image_channels_min_order_by {
  assigner_id?: order_by | null
  channel_id?: order_by | null
  guild_id?: order_by | null
}

/** order by aggregate values of table "images" */
export interface images_aggregate_order_by {
  avg?: images_avg_order_by | null
  count?: order_by | null
  max?: images_max_order_by | null
  min?: images_min_order_by | null
  stddev?: images_stddev_order_by | null
  stddev_pop?: images_stddev_pop_order_by | null
  stddev_samp?: images_stddev_samp_order_by | null
  sum?: images_sum_order_by | null
  var_pop?: images_var_pop_order_by | null
  var_samp?: images_var_samp_order_by | null
  variance?: images_variance_order_by | null
}

/** order by avg() on columns of table "images" */
export interface images_avg_order_by {
  id?: order_by | null
}

/** order by max() on columns of table "images" */
export interface images_max_order_by {
  created_at?: order_by | null
  file_name?: order_by | null
  guild_id?: order_by | null
  id?: order_by | null
  message_id?: order_by | null
  url?: order_by | null
  user_id?: order_by | null
}

/** order by min() on columns of table "images" */
export interface images_min_order_by {
  created_at?: order_by | null
  file_name?: order_by | null
  guild_id?: order_by | null
  id?: order_by | null
  message_id?: order_by | null
  url?: order_by | null
  user_id?: order_by | null
}

/** order by stddev() on columns of table "images" */
export interface images_stddev_order_by {
  id?: order_by | null
}

/** order by stddev_pop() on columns of table "images" */
export interface images_stddev_pop_order_by {
  id?: order_by | null
}

/** order by stddev_samp() on columns of table "images" */
export interface images_stddev_samp_order_by {
  id?: order_by | null
}

/** order by sum() on columns of table "images" */
export interface images_sum_order_by {
  id?: order_by | null
}

/** order by var_pop() on columns of table "images" */
export interface images_var_pop_order_by {
  id?: order_by | null
}

/** order by var_samp() on columns of table "images" */
export interface images_var_samp_order_by {
  id?: order_by | null
}

/** order by variance() on columns of table "images" */
export interface images_variance_order_by {
  id?: order_by | null
}

/** ordering options when selecting data from "users" */
export interface users_order_by {
  avatar?: order_by | null
  image_channels_aggregate?: image_channels_aggregate_order_by | null
  image_tags_aggregate?: image_tags_aggregate_order_by | null
  images_aggregate?: images_aggregate_order_by | null
  name?: order_by | null
  user_id?: order_by | null
}

/** order by aggregate values of table "image_tags" */
export interface image_tags_aggregate_order_by {
  avg?: image_tags_avg_order_by | null
  count?: order_by | null
  max?: image_tags_max_order_by | null
  min?: image_tags_min_order_by | null
  stddev?: image_tags_stddev_order_by | null
  stddev_pop?: image_tags_stddev_pop_order_by | null
  stddev_samp?: image_tags_stddev_samp_order_by | null
  sum?: image_tags_sum_order_by | null
  var_pop?: image_tags_var_pop_order_by | null
  var_samp?: image_tags_var_samp_order_by | null
  variance?: image_tags_variance_order_by | null
}

/** order by avg() on columns of table "image_tags" */
export interface image_tags_avg_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by max() on columns of table "image_tags" */
export interface image_tags_max_order_by {
  id?: order_by | null
  image_id?: order_by | null
  name?: order_by | null
  tagger_id?: order_by | null
}

/** order by min() on columns of table "image_tags" */
export interface image_tags_min_order_by {
  id?: order_by | null
  image_id?: order_by | null
  name?: order_by | null
  tagger_id?: order_by | null
}

/** order by stddev() on columns of table "image_tags" */
export interface image_tags_stddev_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by stddev_pop() on columns of table "image_tags" */
export interface image_tags_stddev_pop_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by stddev_samp() on columns of table "image_tags" */
export interface image_tags_stddev_samp_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by sum() on columns of table "image_tags" */
export interface image_tags_sum_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by var_pop() on columns of table "image_tags" */
export interface image_tags_var_pop_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by var_samp() on columns of table "image_tags" */
export interface image_tags_var_samp_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** order by variance() on columns of table "image_tags" */
export interface image_tags_variance_order_by {
  id?: order_by | null
  image_id?: order_by | null
}

/** Boolean expression to filter rows from the table "auto_tags". All fields are combined with a logical 'AND'. */
export interface auto_tags_bool_exp {
  _and?: Array<auto_tags_bool_exp | null> | null
  _not?: auto_tags_bool_exp | null
  _or?: Array<auto_tags_bool_exp | null> | null
  channel_id?: text_comparison_exp | null
  id?: integer_comparison_exp | null
  image_channel?: image_channels_bool_exp | null
  name?: text_comparison_exp | null
}

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export interface text_comparison_exp {
  _eq?: String | null
  _gt?: String | null
  _gte?: String | null
  _ilike?: String | null
  _in?: Array<String | null> | null
  _is_null?: Boolean | null
  _like?: String | null
  _lt?: String | null
  _lte?: String | null
  _neq?: String | null
  _nilike?: String | null
  _nin?: Array<String | null> | null
  _nlike?: String | null
  _nsimilar?: String | null
  _similar?: String | null
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export interface integer_comparison_exp {
  _eq?: Int | null
  _gt?: Int | null
  _gte?: Int | null
  _in?: Array<Int | null> | null
  _is_null?: Boolean | null
  _lt?: Int | null
  _lte?: Int | null
  _neq?: Int | null
  _nin?: Array<Int | null> | null
}

/** Boolean expression to filter rows from the table "image_channels". All fields are combined with a logical 'AND'. */
export interface image_channels_bool_exp {
  _and?: Array<image_channels_bool_exp | null> | null
  _not?: image_channels_bool_exp | null
  _or?: Array<image_channels_bool_exp | null> | null
  assigner_id?: text_comparison_exp | null
  auto_tags?: auto_tags_bool_exp | null
  channel_id?: text_comparison_exp | null
  guild?: guilds_bool_exp | null
  guild_id?: text_comparison_exp | null
  user?: users_bool_exp | null
}

/** Boolean expression to filter rows from the table "guilds". All fields are combined with a logical 'AND'. */
export interface guilds_bool_exp {
  _and?: Array<guilds_bool_exp | null> | null
  _not?: guilds_bool_exp | null
  _or?: Array<guilds_bool_exp | null> | null
  enabled?: boolean_comparison_exp | null
  guild_id?: text_comparison_exp | null
  image_channels?: image_channels_bool_exp | null
  images?: images_bool_exp | null
  name?: text_comparison_exp | null
  welcome_channel?: text_comparison_exp | null
}

/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export interface boolean_comparison_exp {
  _eq?: Boolean | null
  _gt?: Boolean | null
  _gte?: Boolean | null
  _in?: Array<Boolean | null> | null
  _is_null?: Boolean | null
  _lt?: Boolean | null
  _lte?: Boolean | null
  _neq?: Boolean | null
  _nin?: Array<Boolean | null> | null
}

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export interface images_bool_exp {
  _and?: Array<images_bool_exp | null> | null
  _not?: images_bool_exp | null
  _or?: Array<images_bool_exp | null> | null
  created_at?: timestamptz_comparison_exp | null
  file_name?: text_comparison_exp | null
  guild?: guilds_bool_exp | null
  guild_id?: text_comparison_exp | null
  id?: integer_comparison_exp | null
  image_tags?: image_tags_bool_exp | null
  message_id?: text_comparison_exp | null
  url?: text_comparison_exp | null
  user?: users_bool_exp | null
  user_id?: text_comparison_exp | null
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: timestamptz | null
  _gt?: timestamptz | null
  _gte?: timestamptz | null
  _in?: Array<timestamptz | null> | null
  _is_null?: Boolean | null
  _lt?: timestamptz | null
  _lte?: timestamptz | null
  _neq?: timestamptz | null
  _nin?: Array<timestamptz | null> | null
}

/** Boolean expression to filter rows from the table "image_tags". All fields are combined with a logical 'AND'. */
export interface image_tags_bool_exp {
  _and?: Array<image_tags_bool_exp | null> | null
  _not?: image_tags_bool_exp | null
  _or?: Array<image_tags_bool_exp | null> | null
  id?: integer_comparison_exp | null
  image?: images_bool_exp | null
  image_id?: integer_comparison_exp | null
  name?: text_comparison_exp | null
  tagger_id?: text_comparison_exp | null
  user?: users_bool_exp | null
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: Array<users_bool_exp | null> | null
  _not?: users_bool_exp | null
  _or?: Array<users_bool_exp | null> | null
  avatar?: text_comparison_exp | null
  image_channels?: image_channels_bool_exp | null
  image_tags?: image_tags_bool_exp | null
  images?: images_bool_exp | null
  name?: text_comparison_exp | null
  user_id?: text_comparison_exp | null
}

/** columns and relationships of "auto_tags" */
export interface auto_tagsRequest {
  channel_id?: boolean | number
  id?: boolean | number
  /** An object relationship */
  image_channel?: image_channelsRequest
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "image_channels" */
export interface image_channelsRequest {
  assigner_id?: boolean | number
  /** An array relationship */
  auto_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: auto_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: auto_tags_order_by[] | null
          /** filter the rows returned */
          where?: auto_tags_bool_exp | null
        },
        auto_tagsRequest
      ]
    | auto_tagsRequest
  /** An aggregated array relationship */
  auto_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: auto_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: auto_tags_order_by[] | null
          /** filter the rows returned */
          where?: auto_tags_bool_exp | null
        },
        auto_tags_aggregateRequest
      ]
    | auto_tags_aggregateRequest
  channel_id?: boolean | number
  /** An object relationship */
  guild?: guildsRequest
  guild_id?: boolean | number
  /** An object relationship */
  user?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "auto_tags" */
export interface auto_tags_aggregateRequest {
  aggregate?: auto_tags_aggregate_fieldsRequest
  nodes?: auto_tagsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "auto_tags" */
export interface auto_tags_aggregate_fieldsRequest {
  avg?: auto_tags_avg_fieldsRequest
  count?: [{ columns?: auto_tags_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: auto_tags_max_fieldsRequest
  min?: auto_tags_min_fieldsRequest
  stddev?: auto_tags_stddev_fieldsRequest
  stddev_pop?: auto_tags_stddev_pop_fieldsRequest
  stddev_samp?: auto_tags_stddev_samp_fieldsRequest
  sum?: auto_tags_sum_fieldsRequest
  var_pop?: auto_tags_var_pop_fieldsRequest
  var_samp?: auto_tags_var_samp_fieldsRequest
  variance?: auto_tags_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface auto_tags_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface auto_tags_max_fieldsRequest {
  channel_id?: boolean | number
  id?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface auto_tags_min_fieldsRequest {
  channel_id?: boolean | number
  id?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface auto_tags_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface auto_tags_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface auto_tags_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface auto_tags_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface auto_tags_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface auto_tags_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface auto_tags_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "guilds" */
export interface guildsRequest {
  enabled?: boolean | number
  guild_id?: boolean | number
  /** An array relationship */
  image_channels?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channelsRequest
      ]
    | image_channelsRequest
  /** An aggregated array relationship */
  image_channels_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channels_aggregateRequest
      ]
    | image_channels_aggregateRequest
  /** An array relationship */
  images?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        imagesRequest
      ]
    | imagesRequest
  /** An aggregated array relationship */
  images_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        images_aggregateRequest
      ]
    | images_aggregateRequest
  name?: boolean | number
  welcome_channel?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "image_channels" */
export interface image_channels_aggregateRequest {
  aggregate?: image_channels_aggregate_fieldsRequest
  nodes?: image_channelsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "image_channels" */
export interface image_channels_aggregate_fieldsRequest {
  count?: [{ columns?: image_channels_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: image_channels_max_fieldsRequest
  min?: image_channels_min_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface image_channels_max_fieldsRequest {
  assigner_id?: boolean | number
  channel_id?: boolean | number
  guild_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface image_channels_min_fieldsRequest {
  assigner_id?: boolean | number
  channel_id?: boolean | number
  guild_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** ordering options when selecting data from "images" */
export interface images_order_by {
  created_at?: order_by | null
  file_name?: order_by | null
  guild?: guilds_order_by | null
  guild_id?: order_by | null
  id?: order_by | null
  image_tags_aggregate?: image_tags_aggregate_order_by | null
  message_id?: order_by | null
  url?: order_by | null
  user?: users_order_by | null
  user_id?: order_by | null
}

/** columns and relationships of "images" */
export interface imagesRequest {
  created_at?: boolean | number
  file_name?: boolean | number
  /** An object relationship */
  guild?: guildsRequest
  guild_id?: boolean | number
  id?: boolean | number
  /** An array relationship */
  image_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tagsRequest
      ]
    | image_tagsRequest
  /** An aggregated array relationship */
  image_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tags_aggregateRequest
      ]
    | image_tags_aggregateRequest
  message_id?: boolean | number
  url?: boolean | number
  /** An object relationship */
  user?: usersRequest
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** ordering options when selecting data from "image_tags" */
export interface image_tags_order_by {
  id?: order_by | null
  image?: images_order_by | null
  image_id?: order_by | null
  name?: order_by | null
  tagger_id?: order_by | null
  user?: users_order_by | null
}

/** columns and relationships of "image_tags" */
export interface image_tagsRequest {
  id?: boolean | number
  /** An object relationship */
  image?: imagesRequest
  image_id?: boolean | number
  name?: boolean | number
  tagger_id?: boolean | number
  /** An object relationship */
  user?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "users" */
export interface usersRequest {
  avatar?: boolean | number
  /** An array relationship */
  image_channels?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channelsRequest
      ]
    | image_channelsRequest
  /** An aggregated array relationship */
  image_channels_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channels_aggregateRequest
      ]
    | image_channels_aggregateRequest
  /** An array relationship */
  image_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tagsRequest
      ]
    | image_tagsRequest
  /** An aggregated array relationship */
  image_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tags_aggregateRequest
      ]
    | image_tags_aggregateRequest
  /** An array relationship */
  images?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        imagesRequest
      ]
    | imagesRequest
  /** An aggregated array relationship */
  images_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        images_aggregateRequest
      ]
    | images_aggregateRequest
  name?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "image_tags" */
export interface image_tags_aggregateRequest {
  aggregate?: image_tags_aggregate_fieldsRequest
  nodes?: image_tagsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "image_tags" */
export interface image_tags_aggregate_fieldsRequest {
  avg?: image_tags_avg_fieldsRequest
  count?: [{ columns?: image_tags_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: image_tags_max_fieldsRequest
  min?: image_tags_min_fieldsRequest
  stddev?: image_tags_stddev_fieldsRequest
  stddev_pop?: image_tags_stddev_pop_fieldsRequest
  stddev_samp?: image_tags_stddev_samp_fieldsRequest
  sum?: image_tags_sum_fieldsRequest
  var_pop?: image_tags_var_pop_fieldsRequest
  var_samp?: image_tags_var_samp_fieldsRequest
  variance?: image_tags_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface image_tags_avg_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface image_tags_max_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  name?: boolean | number
  tagger_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface image_tags_min_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  name?: boolean | number
  tagger_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface image_tags_stddev_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface image_tags_stddev_pop_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface image_tags_stddev_samp_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface image_tags_sum_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface image_tags_var_pop_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface image_tags_var_samp_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface image_tags_variance_fieldsRequest {
  id?: boolean | number
  image_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "images" */
export interface images_aggregateRequest {
  aggregate?: images_aggregate_fieldsRequest
  nodes?: imagesRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "images" */
export interface images_aggregate_fieldsRequest {
  avg?: images_avg_fieldsRequest
  count?: [{ columns?: images_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: images_max_fieldsRequest
  min?: images_min_fieldsRequest
  stddev?: images_stddev_fieldsRequest
  stddev_pop?: images_stddev_pop_fieldsRequest
  stddev_samp?: images_stddev_samp_fieldsRequest
  sum?: images_sum_fieldsRequest
  var_pop?: images_var_pop_fieldsRequest
  var_samp?: images_var_samp_fieldsRequest
  variance?: images_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface images_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface images_max_fieldsRequest {
  created_at?: boolean | number
  file_name?: boolean | number
  guild_id?: boolean | number
  id?: boolean | number
  message_id?: boolean | number
  url?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface images_min_fieldsRequest {
  created_at?: boolean | number
  file_name?: boolean | number
  guild_id?: boolean | number
  id?: boolean | number
  message_id?: boolean | number
  url?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface images_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface images_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface images_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface images_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface images_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface images_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface images_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "guilds" */
export interface guilds_aggregateRequest {
  aggregate?: guilds_aggregate_fieldsRequest
  nodes?: guildsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "guilds" */
export interface guilds_aggregate_fieldsRequest {
  count?: [{ columns?: guilds_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: guilds_max_fieldsRequest
  min?: guilds_min_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface guilds_max_fieldsRequest {
  guild_id?: boolean | number
  name?: boolean | number
  welcome_channel?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface guilds_min_fieldsRequest {
  guild_id?: boolean | number
  name?: boolean | number
  welcome_channel?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** ordering options when selecting data from "tag_counts" */
export interface tag_counts_order_by {
  count?: order_by | null
  name?: order_by | null
}

/** Boolean expression to filter rows from the table "tag_counts". All fields are combined with a logical 'AND'. */
export interface tag_counts_bool_exp {
  _and?: Array<tag_counts_bool_exp | null> | null
  _not?: tag_counts_bool_exp | null
  _or?: Array<tag_counts_bool_exp | null> | null
  count?: bigint_comparison_exp | null
  name?: text_comparison_exp | null
}

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {
  _eq?: bigint | null
  _gt?: bigint | null
  _gte?: bigint | null
  _in?: Array<bigint | null> | null
  _is_null?: Boolean | null
  _lt?: bigint | null
  _lte?: bigint | null
  _neq?: bigint | null
  _nin?: Array<bigint | null> | null
}

/** columns and relationships of "tag_counts" */
export interface tag_countsRequest {
  count?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "tag_counts" */
export interface tag_counts_aggregateRequest {
  aggregate?: tag_counts_aggregate_fieldsRequest
  nodes?: tag_countsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "tag_counts" */
export interface tag_counts_aggregate_fieldsRequest {
  avg?: tag_counts_avg_fieldsRequest
  count?: [{ columns?: tag_counts_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: tag_counts_max_fieldsRequest
  min?: tag_counts_min_fieldsRequest
  stddev?: tag_counts_stddev_fieldsRequest
  stddev_pop?: tag_counts_stddev_pop_fieldsRequest
  stddev_samp?: tag_counts_stddev_samp_fieldsRequest
  sum?: tag_counts_sum_fieldsRequest
  var_pop?: tag_counts_var_pop_fieldsRequest
  var_samp?: tag_counts_var_samp_fieldsRequest
  variance?: tag_counts_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface tag_counts_avg_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface tag_counts_max_fieldsRequest {
  count?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface tag_counts_min_fieldsRequest {
  count?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface tag_counts_stddev_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface tag_counts_stddev_pop_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface tag_counts_stddev_samp_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface tag_counts_sum_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface tag_counts_var_pop_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface tag_counts_var_samp_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface tag_counts_variance_fieldsRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "users" */
export interface users_aggregateRequest {
  aggregate?: users_aggregate_fieldsRequest
  nodes?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsRequest {
  count?: [{ columns?: users_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: users_max_fieldsRequest
  min?: users_min_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface users_max_fieldsRequest {
  avatar?: boolean | number
  name?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface users_min_fieldsRequest {
  avatar?: boolean | number
  name?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** mutation root */
export interface mutation_rootRequest {
  /** delete data from the table: "auto_tags" */
  delete_auto_tags?: [
    {
      /** filter the rows which have to be deleted */
      where: auto_tags_bool_exp
    },
    auto_tags_mutation_responseRequest
  ]
  /** delete data from the table: "guilds" */
  delete_guilds?: [
    {
      /** filter the rows which have to be deleted */
      where: guilds_bool_exp
    },
    guilds_mutation_responseRequest
  ]
  /** delete data from the table: "image_channels" */
  delete_image_channels?: [
    {
      /** filter the rows which have to be deleted */
      where: image_channels_bool_exp
    },
    image_channels_mutation_responseRequest
  ]
  /** delete data from the table: "image_tags" */
  delete_image_tags?: [
    {
      /** filter the rows which have to be deleted */
      where: image_tags_bool_exp
    },
    image_tags_mutation_responseRequest
  ]
  /** delete data from the table: "images" */
  delete_images?: [
    {
      /** filter the rows which have to be deleted */
      where: images_bool_exp
    },
    images_mutation_responseRequest
  ]
  /** delete data from the table: "tag_counts" */
  delete_tag_counts?: [
    {
      /** filter the rows which have to be deleted */
      where: tag_counts_bool_exp
    },
    tag_counts_mutation_responseRequest
  ]
  /** delete data from the table: "users" */
  delete_users?: [
    {
      /** filter the rows which have to be deleted */
      where: users_bool_exp
    },
    users_mutation_responseRequest
  ]
  /** insert data into the table: "auto_tags" */
  insert_auto_tags?: [
    {
      /** the rows to be inserted */
      objects: auto_tags_insert_input[]
      /** on conflict condition */
      on_conflict?: auto_tags_on_conflict | null
    },
    auto_tags_mutation_responseRequest
  ]
  /** insert data into the table: "guilds" */
  insert_guilds?: [
    {
      /** the rows to be inserted */
      objects: guilds_insert_input[]
      /** on conflict condition */
      on_conflict?: guilds_on_conflict | null
    },
    guilds_mutation_responseRequest
  ]
  /** insert data into the table: "image_channels" */
  insert_image_channels?: [
    {
      /** the rows to be inserted */
      objects: image_channels_insert_input[]
      /** on conflict condition */
      on_conflict?: image_channels_on_conflict | null
    },
    image_channels_mutation_responseRequest
  ]
  /** insert data into the table: "image_tags" */
  insert_image_tags?: [
    {
      /** the rows to be inserted */
      objects: image_tags_insert_input[]
      /** on conflict condition */
      on_conflict?: image_tags_on_conflict | null
    },
    image_tags_mutation_responseRequest
  ]
  /** insert data into the table: "images" */
  insert_images?: [
    {
      /** the rows to be inserted */
      objects: images_insert_input[]
      /** on conflict condition */
      on_conflict?: images_on_conflict | null
    },
    images_mutation_responseRequest
  ]
  /** insert data into the table: "tag_counts" */
  insert_tag_counts?: [
    {
      /** the rows to be inserted */
      objects: tag_counts_insert_input[]
      /** on conflict condition */
      on_conflict?: tag_counts_on_conflict | null
    },
    tag_counts_mutation_responseRequest
  ]
  /** insert data into the table: "users" */
  insert_users?: [
    {
      /** the rows to be inserted */
      objects: users_insert_input[]
      /** on conflict condition */
      on_conflict?: users_on_conflict | null
    },
    users_mutation_responseRequest
  ]
  /** update data of the table: "auto_tags" */
  update_auto_tags?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: auto_tags_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: auto_tags_set_input | null
      /** filter the rows which have to be updated */
      where: auto_tags_bool_exp
    },
    auto_tags_mutation_responseRequest
  ]
  /** update data of the table: "guilds" */
  update_guilds?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: guilds_set_input | null
      /** filter the rows which have to be updated */
      where: guilds_bool_exp
    },
    guilds_mutation_responseRequest
  ]
  /** update data of the table: "image_channels" */
  update_image_channels?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: image_channels_set_input | null
      /** filter the rows which have to be updated */
      where: image_channels_bool_exp
    },
    image_channels_mutation_responseRequest
  ]
  /** update data of the table: "image_tags" */
  update_image_tags?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: image_tags_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: image_tags_set_input | null
      /** filter the rows which have to be updated */
      where: image_tags_bool_exp
    },
    image_tags_mutation_responseRequest
  ]
  /** update data of the table: "images" */
  update_images?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: images_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: images_set_input | null
      /** filter the rows which have to be updated */
      where: images_bool_exp
    },
    images_mutation_responseRequest
  ]
  /** update data of the table: "tag_counts" */
  update_tag_counts?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: tag_counts_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: tag_counts_set_input | null
      /** filter the rows which have to be updated */
      where: tag_counts_bool_exp
    },
    tag_counts_mutation_responseRequest
  ]
  /** update data of the table: "users" */
  update_users?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: users_set_input | null
      /** filter the rows which have to be updated */
      where: users_bool_exp
    },
    users_mutation_responseRequest
  ]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "auto_tags" */
export interface auto_tags_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: auto_tagsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "guilds" */
export interface guilds_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: guildsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "image_channels" */
export interface image_channels_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: image_channelsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "image_tags" */
export interface image_tags_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: image_tagsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "images" */
export interface images_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: imagesRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "tag_counts" */
export interface tag_counts_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: tag_countsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "users" */
export interface users_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting data into table "auto_tags" */
export interface auto_tags_insert_input {
  channel_id?: String | null
  id?: Int | null
  image_channel?: image_channels_obj_rel_insert_input | null
  name?: String | null
}

/** input type for inserting object relation for remote table "image_channels" */
export interface image_channels_obj_rel_insert_input {
  data: image_channels_insert_input
  on_conflict?: image_channels_on_conflict | null
}

/** input type for inserting data into table "image_channels" */
export interface image_channels_insert_input {
  assigner_id?: String | null
  auto_tags?: auto_tags_arr_rel_insert_input | null
  channel_id?: String | null
  guild?: guilds_obj_rel_insert_input | null
  guild_id?: String | null
  user?: users_obj_rel_insert_input | null
}

/** input type for inserting array relation for remote table "auto_tags" */
export interface auto_tags_arr_rel_insert_input {
  data: auto_tags_insert_input[]
  on_conflict?: auto_tags_on_conflict | null
}

/** on conflict condition type for table "auto_tags" */
export interface auto_tags_on_conflict {
  constraint: auto_tags_constraint
  update_columns: auto_tags_update_column[]
}

/** input type for inserting object relation for remote table "guilds" */
export interface guilds_obj_rel_insert_input {
  data: guilds_insert_input
  on_conflict?: guilds_on_conflict | null
}

/** input type for inserting data into table "guilds" */
export interface guilds_insert_input {
  enabled?: Boolean | null
  guild_id?: String | null
  image_channels?: image_channels_arr_rel_insert_input | null
  images?: images_arr_rel_insert_input | null
  name?: String | null
  welcome_channel?: String | null
}

/** input type for inserting array relation for remote table "image_channels" */
export interface image_channels_arr_rel_insert_input {
  data: image_channels_insert_input[]
  on_conflict?: image_channels_on_conflict | null
}

/** on conflict condition type for table "image_channels" */
export interface image_channels_on_conflict {
  constraint: image_channels_constraint
  update_columns: image_channels_update_column[]
}

/** input type for inserting array relation for remote table "images" */
export interface images_arr_rel_insert_input {
  data: images_insert_input[]
  on_conflict?: images_on_conflict | null
}

/** input type for inserting data into table "images" */
export interface images_insert_input {
  created_at?: timestamptz | null
  file_name?: String | null
  guild?: guilds_obj_rel_insert_input | null
  guild_id?: String | null
  id?: Int | null
  image_tags?: image_tags_arr_rel_insert_input | null
  message_id?: String | null
  url?: String | null
  user?: users_obj_rel_insert_input | null
  user_id?: String | null
}

/** input type for inserting array relation for remote table "image_tags" */
export interface image_tags_arr_rel_insert_input {
  data: image_tags_insert_input[]
  on_conflict?: image_tags_on_conflict | null
}

/** input type for inserting data into table "image_tags" */
export interface image_tags_insert_input {
  id?: Int | null
  image?: images_obj_rel_insert_input | null
  image_id?: Int | null
  name?: String | null
  tagger_id?: String | null
  user?: users_obj_rel_insert_input | null
}

/** input type for inserting object relation for remote table "images" */
export interface images_obj_rel_insert_input {
  data: images_insert_input
  on_conflict?: images_on_conflict | null
}

/** on conflict condition type for table "images" */
export interface images_on_conflict {
  constraint: images_constraint
  update_columns: images_update_column[]
}

/** input type for inserting object relation for remote table "users" */
export interface users_obj_rel_insert_input {
  data: users_insert_input
  on_conflict?: users_on_conflict | null
}

/** input type for inserting data into table "users" */
export interface users_insert_input {
  avatar?: String | null
  image_channels?: image_channels_arr_rel_insert_input | null
  image_tags?: image_tags_arr_rel_insert_input | null
  images?: images_arr_rel_insert_input | null
  name?: String | null
  user_id?: String | null
}

/** on conflict condition type for table "users" */
export interface users_on_conflict {
  constraint: users_constraint
  update_columns: users_update_column[]
}

/** on conflict condition type for table "image_tags" */
export interface image_tags_on_conflict {
  constraint: image_tags_constraint
  update_columns: image_tags_update_column[]
}

/** on conflict condition type for table "guilds" */
export interface guilds_on_conflict {
  constraint: guilds_constraint
  update_columns: guilds_update_column[]
}

/** input type for inserting data into table "tag_counts" */
export interface tag_counts_insert_input {
  count?: bigint | null
  name?: String | null
}

/** on conflict condition type for table "tag_counts" */
export interface tag_counts_on_conflict {
  constraint: tag_counts_constraint
  update_columns: tag_counts_update_column[]
}

/** input type for incrementing integer columne in table "auto_tags" */
export interface auto_tags_inc_input {
  id?: Int | null
}

/** input type for updating data in table "auto_tags" */
export interface auto_tags_set_input {
  channel_id?: String | null
  id?: Int | null
  name?: String | null
}

/** input type for updating data in table "guilds" */
export interface guilds_set_input {
  enabled?: Boolean | null
  guild_id?: String | null
  name?: String | null
  welcome_channel?: String | null
}

/** input type for updating data in table "image_channels" */
export interface image_channels_set_input {
  assigner_id?: String | null
  channel_id?: String | null
  guild_id?: String | null
}

/** input type for incrementing integer columne in table "image_tags" */
export interface image_tags_inc_input {
  id?: Int | null
  image_id?: Int | null
}

/** input type for updating data in table "image_tags" */
export interface image_tags_set_input {
  id?: Int | null
  image_id?: Int | null
  name?: String | null
  tagger_id?: String | null
}

/** input type for incrementing integer columne in table "images" */
export interface images_inc_input {
  id?: Int | null
}

/** input type for updating data in table "images" */
export interface images_set_input {
  created_at?: timestamptz | null
  file_name?: String | null
  guild_id?: String | null
  id?: Int | null
  message_id?: String | null
  url?: String | null
  user_id?: String | null
}

/** input type for incrementing integer columne in table "tag_counts" */
export interface tag_counts_inc_input {
  count?: bigint | null
}

/** input type for updating data in table "tag_counts" */
export interface tag_counts_set_input {
  count?: bigint | null
  name?: String | null
}

/** input type for updating data in table "users" */
export interface users_set_input {
  avatar?: String | null
  name?: String | null
  user_id?: String | null
}

/** subscription root */
export interface subscription_rootRequest {
  /** fetch data from the table: "auto_tags" */
  auto_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: auto_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: auto_tags_order_by[] | null
          /** filter the rows returned */
          where?: auto_tags_bool_exp | null
        },
        auto_tagsRequest
      ]
    | auto_tagsRequest
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: auto_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: auto_tags_order_by[] | null
          /** filter the rows returned */
          where?: auto_tags_bool_exp | null
        },
        auto_tags_aggregateRequest
      ]
    | auto_tags_aggregateRequest
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk?: [{ id: Int }, auto_tagsRequest]
  /** fetch data from the table: "guilds" */
  guilds?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: guilds_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: guilds_order_by[] | null
          /** filter the rows returned */
          where?: guilds_bool_exp | null
        },
        guildsRequest
      ]
    | guildsRequest
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: guilds_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: guilds_order_by[] | null
          /** filter the rows returned */
          where?: guilds_bool_exp | null
        },
        guilds_aggregateRequest
      ]
    | guilds_aggregateRequest
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk?: [{ guild_id: String }, guildsRequest]
  /** fetch data from the table: "image_channels" */
  image_channels?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channelsRequest
      ]
    | image_channelsRequest
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_channels_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_channels_order_by[] | null
          /** filter the rows returned */
          where?: image_channels_bool_exp | null
        },
        image_channels_aggregateRequest
      ]
    | image_channels_aggregateRequest
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk?: [{ channel_id: String }, image_channelsRequest]
  /** fetch data from the table: "image_tags" */
  image_tags?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tagsRequest
      ]
    | image_tagsRequest
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: image_tags_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: image_tags_order_by[] | null
          /** filter the rows returned */
          where?: image_tags_bool_exp | null
        },
        image_tags_aggregateRequest
      ]
    | image_tags_aggregateRequest
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk?: [{ id: Int }, image_tagsRequest]
  /** fetch data from the table: "images" */
  images?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        imagesRequest
      ]
    | imagesRequest
  /** fetch aggregated fields from the table: "images" */
  images_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: images_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: images_order_by[] | null
          /** filter the rows returned */
          where?: images_bool_exp | null
        },
        images_aggregateRequest
      ]
    | images_aggregateRequest
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: [{ id: Int }, imagesRequest]
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_countsRequest
      ]
    | tag_countsRequest
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_counts_aggregateRequest
      ]
    | tag_counts_aggregateRequest
  /** fetch data from the table: "tag_counts" */
  tag_counts?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_countsRequest
      ]
    | tag_countsRequest
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: tag_counts_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: tag_counts_order_by[] | null
          /** filter the rows returned */
          where?: tag_counts_bool_exp | null
        },
        tag_counts_aggregateRequest
      ]
    | tag_counts_aggregateRequest
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk?: [{ name: String }, tag_countsRequest]
  /** fetch data from the table: "users" */
  users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        usersRequest
      ]
    | usersRequest
  /** fetch aggregated fields from the table: "users" */
  users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        users_aggregateRequest
      ]
    | users_aggregateRequest
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: [{ user_id: String }, usersRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "auto_tags" */
export interface auto_tags_obj_rel_insert_input {
  data: auto_tags_insert_input
  on_conflict?: auto_tags_on_conflict | null
}

/** order by aggregate values of table "guilds" */
export interface guilds_aggregate_order_by {
  count?: order_by | null
  max?: guilds_max_order_by | null
  min?: guilds_min_order_by | null
}

/** order by max() on columns of table "guilds" */
export interface guilds_max_order_by {
  guild_id?: order_by | null
  name?: order_by | null
  welcome_channel?: order_by | null
}

/** order by min() on columns of table "guilds" */
export interface guilds_min_order_by {
  guild_id?: order_by | null
  name?: order_by | null
  welcome_channel?: order_by | null
}

/** input type for inserting array relation for remote table "guilds" */
export interface guilds_arr_rel_insert_input {
  data: guilds_insert_input[]
  on_conflict?: guilds_on_conflict | null
}

/** input type for inserting object relation for remote table "image_tags" */
export interface image_tags_obj_rel_insert_input {
  data: image_tags_insert_input
  on_conflict?: image_tags_on_conflict | null
}

/** order by aggregate values of table "tag_counts" */
export interface tag_counts_aggregate_order_by {
  avg?: tag_counts_avg_order_by | null
  count?: order_by | null
  max?: tag_counts_max_order_by | null
  min?: tag_counts_min_order_by | null
  stddev?: tag_counts_stddev_order_by | null
  stddev_pop?: tag_counts_stddev_pop_order_by | null
  stddev_samp?: tag_counts_stddev_samp_order_by | null
  sum?: tag_counts_sum_order_by | null
  var_pop?: tag_counts_var_pop_order_by | null
  var_samp?: tag_counts_var_samp_order_by | null
  variance?: tag_counts_variance_order_by | null
}

/** order by avg() on columns of table "tag_counts" */
export interface tag_counts_avg_order_by {
  count?: order_by | null
}

/** order by max() on columns of table "tag_counts" */
export interface tag_counts_max_order_by {
  count?: order_by | null
  name?: order_by | null
}

/** order by min() on columns of table "tag_counts" */
export interface tag_counts_min_order_by {
  count?: order_by | null
  name?: order_by | null
}

/** order by stddev() on columns of table "tag_counts" */
export interface tag_counts_stddev_order_by {
  count?: order_by | null
}

/** order by stddev_pop() on columns of table "tag_counts" */
export interface tag_counts_stddev_pop_order_by {
  count?: order_by | null
}

/** order by stddev_samp() on columns of table "tag_counts" */
export interface tag_counts_stddev_samp_order_by {
  count?: order_by | null
}

/** order by sum() on columns of table "tag_counts" */
export interface tag_counts_sum_order_by {
  count?: order_by | null
}

/** order by var_pop() on columns of table "tag_counts" */
export interface tag_counts_var_pop_order_by {
  count?: order_by | null
}

/** order by var_samp() on columns of table "tag_counts" */
export interface tag_counts_var_samp_order_by {
  count?: order_by | null
}

/** order by variance() on columns of table "tag_counts" */
export interface tag_counts_variance_order_by {
  count?: order_by | null
}

/** input type for inserting array relation for remote table "tag_counts" */
export interface tag_counts_arr_rel_insert_input {
  data: tag_counts_insert_input[]
  on_conflict?: tag_counts_on_conflict | null
}

/** input type for inserting object relation for remote table "tag_counts" */
export interface tag_counts_obj_rel_insert_input {
  data: tag_counts_insert_input
  on_conflict?: tag_counts_on_conflict | null
}

/** order by aggregate values of table "users" */
export interface users_aggregate_order_by {
  count?: order_by | null
  max?: users_max_order_by | null
  min?: users_min_order_by | null
}

/** order by max() on columns of table "users" */
export interface users_max_order_by {
  avatar?: order_by | null
  name?: order_by | null
  user_id?: order_by | null
}

/** order by min() on columns of table "users" */
export interface users_min_order_by {
  avatar?: order_by | null
  name?: order_by | null
  user_id?: order_by | null
}

/** input type for inserting array relation for remote table "users" */
export interface users_arr_rel_insert_input {
  data: users_insert_input[]
  on_conflict?: users_on_conflict | null
}

const query_root_possibleTypes = ["query_root"]
export const isquery_root = (obj: { __typename: String }): obj is query_root => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return query_root_possibleTypes.includes(obj.__typename)
}

const auto_tags_possibleTypes = ["auto_tags"]
export const isauto_tags = (obj: { __typename: String }): obj is auto_tags => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_possibleTypes.includes(obj.__typename)
}

const image_channels_possibleTypes = ["image_channels"]
export const isimage_channels = (obj: { __typename: String }): obj is image_channels => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_channels_possibleTypes.includes(obj.__typename)
}

const auto_tags_aggregate_possibleTypes = ["auto_tags_aggregate"]
export const isauto_tags_aggregate = (obj: { __typename: String }): obj is auto_tags_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_aggregate_possibleTypes.includes(obj.__typename)
}

const auto_tags_aggregate_fields_possibleTypes = ["auto_tags_aggregate_fields"]
export const isauto_tags_aggregate_fields = (obj: { __typename: String }): obj is auto_tags_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_avg_fields_possibleTypes = ["auto_tags_avg_fields"]
export const isauto_tags_avg_fields = (obj: { __typename: String }): obj is auto_tags_avg_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_avg_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_max_fields_possibleTypes = ["auto_tags_max_fields"]
export const isauto_tags_max_fields = (obj: { __typename: String }): obj is auto_tags_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_max_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_min_fields_possibleTypes = ["auto_tags_min_fields"]
export const isauto_tags_min_fields = (obj: { __typename: String }): obj is auto_tags_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_min_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_stddev_fields_possibleTypes = ["auto_tags_stddev_fields"]
export const isauto_tags_stddev_fields = (obj: { __typename: String }): obj is auto_tags_stddev_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_stddev_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_stddev_pop_fields_possibleTypes = ["auto_tags_stddev_pop_fields"]
export const isauto_tags_stddev_pop_fields = (obj: { __typename: String }): obj is auto_tags_stddev_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_stddev_samp_fields_possibleTypes = ["auto_tags_stddev_samp_fields"]
export const isauto_tags_stddev_samp_fields = (obj: { __typename: String }): obj is auto_tags_stddev_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_sum_fields_possibleTypes = ["auto_tags_sum_fields"]
export const isauto_tags_sum_fields = (obj: { __typename: String }): obj is auto_tags_sum_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_sum_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_var_pop_fields_possibleTypes = ["auto_tags_var_pop_fields"]
export const isauto_tags_var_pop_fields = (obj: { __typename: String }): obj is auto_tags_var_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_var_samp_fields_possibleTypes = ["auto_tags_var_samp_fields"]
export const isauto_tags_var_samp_fields = (obj: { __typename: String }): obj is auto_tags_var_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const auto_tags_variance_fields_possibleTypes = ["auto_tags_variance_fields"]
export const isauto_tags_variance_fields = (obj: { __typename: String }): obj is auto_tags_variance_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_variance_fields_possibleTypes.includes(obj.__typename)
}

const guilds_possibleTypes = ["guilds"]
export const isguilds = (obj: { __typename: String }): obj is guilds => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return guilds_possibleTypes.includes(obj.__typename)
}

const image_channels_aggregate_possibleTypes = ["image_channels_aggregate"]
export const isimage_channels_aggregate = (obj: { __typename: String }): obj is image_channels_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_channels_aggregate_possibleTypes.includes(obj.__typename)
}

const image_channels_aggregate_fields_possibleTypes = ["image_channels_aggregate_fields"]
export const isimage_channels_aggregate_fields = (obj: { __typename: String }): obj is image_channels_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_channels_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const image_channels_max_fields_possibleTypes = ["image_channels_max_fields"]
export const isimage_channels_max_fields = (obj: { __typename: String }): obj is image_channels_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_channels_max_fields_possibleTypes.includes(obj.__typename)
}

const image_channels_min_fields_possibleTypes = ["image_channels_min_fields"]
export const isimage_channels_min_fields = (obj: { __typename: String }): obj is image_channels_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_channels_min_fields_possibleTypes.includes(obj.__typename)
}

const images_possibleTypes = ["images"]
export const isimages = (obj: { __typename: String }): obj is images => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_possibleTypes.includes(obj.__typename)
}

const image_tags_possibleTypes = ["image_tags"]
export const isimage_tags = (obj: { __typename: String }): obj is image_tags => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_possibleTypes.includes(obj.__typename)
}

const users_possibleTypes = ["users"]
export const isusers = (obj: { __typename: String }): obj is users => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return users_possibleTypes.includes(obj.__typename)
}

const image_tags_aggregate_possibleTypes = ["image_tags_aggregate"]
export const isimage_tags_aggregate = (obj: { __typename: String }): obj is image_tags_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_aggregate_possibleTypes.includes(obj.__typename)
}

const image_tags_aggregate_fields_possibleTypes = ["image_tags_aggregate_fields"]
export const isimage_tags_aggregate_fields = (obj: { __typename: String }): obj is image_tags_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_avg_fields_possibleTypes = ["image_tags_avg_fields"]
export const isimage_tags_avg_fields = (obj: { __typename: String }): obj is image_tags_avg_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_avg_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_max_fields_possibleTypes = ["image_tags_max_fields"]
export const isimage_tags_max_fields = (obj: { __typename: String }): obj is image_tags_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_max_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_min_fields_possibleTypes = ["image_tags_min_fields"]
export const isimage_tags_min_fields = (obj: { __typename: String }): obj is image_tags_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_min_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_stddev_fields_possibleTypes = ["image_tags_stddev_fields"]
export const isimage_tags_stddev_fields = (obj: { __typename: String }): obj is image_tags_stddev_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_stddev_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_stddev_pop_fields_possibleTypes = ["image_tags_stddev_pop_fields"]
export const isimage_tags_stddev_pop_fields = (obj: { __typename: String }): obj is image_tags_stddev_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_stddev_samp_fields_possibleTypes = ["image_tags_stddev_samp_fields"]
export const isimage_tags_stddev_samp_fields = (obj: { __typename: String }): obj is image_tags_stddev_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_sum_fields_possibleTypes = ["image_tags_sum_fields"]
export const isimage_tags_sum_fields = (obj: { __typename: String }): obj is image_tags_sum_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_sum_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_var_pop_fields_possibleTypes = ["image_tags_var_pop_fields"]
export const isimage_tags_var_pop_fields = (obj: { __typename: String }): obj is image_tags_var_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_var_samp_fields_possibleTypes = ["image_tags_var_samp_fields"]
export const isimage_tags_var_samp_fields = (obj: { __typename: String }): obj is image_tags_var_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const image_tags_variance_fields_possibleTypes = ["image_tags_variance_fields"]
export const isimage_tags_variance_fields = (obj: { __typename: String }): obj is image_tags_variance_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_variance_fields_possibleTypes.includes(obj.__typename)
}

const images_aggregate_possibleTypes = ["images_aggregate"]
export const isimages_aggregate = (obj: { __typename: String }): obj is images_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_aggregate_possibleTypes.includes(obj.__typename)
}

const images_aggregate_fields_possibleTypes = ["images_aggregate_fields"]
export const isimages_aggregate_fields = (obj: { __typename: String }): obj is images_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const images_avg_fields_possibleTypes = ["images_avg_fields"]
export const isimages_avg_fields = (obj: { __typename: String }): obj is images_avg_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_avg_fields_possibleTypes.includes(obj.__typename)
}

const images_max_fields_possibleTypes = ["images_max_fields"]
export const isimages_max_fields = (obj: { __typename: String }): obj is images_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_max_fields_possibleTypes.includes(obj.__typename)
}

const images_min_fields_possibleTypes = ["images_min_fields"]
export const isimages_min_fields = (obj: { __typename: String }): obj is images_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_min_fields_possibleTypes.includes(obj.__typename)
}

const images_stddev_fields_possibleTypes = ["images_stddev_fields"]
export const isimages_stddev_fields = (obj: { __typename: String }): obj is images_stddev_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_stddev_fields_possibleTypes.includes(obj.__typename)
}

const images_stddev_pop_fields_possibleTypes = ["images_stddev_pop_fields"]
export const isimages_stddev_pop_fields = (obj: { __typename: String }): obj is images_stddev_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const images_stddev_samp_fields_possibleTypes = ["images_stddev_samp_fields"]
export const isimages_stddev_samp_fields = (obj: { __typename: String }): obj is images_stddev_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const images_sum_fields_possibleTypes = ["images_sum_fields"]
export const isimages_sum_fields = (obj: { __typename: String }): obj is images_sum_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_sum_fields_possibleTypes.includes(obj.__typename)
}

const images_var_pop_fields_possibleTypes = ["images_var_pop_fields"]
export const isimages_var_pop_fields = (obj: { __typename: String }): obj is images_var_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const images_var_samp_fields_possibleTypes = ["images_var_samp_fields"]
export const isimages_var_samp_fields = (obj: { __typename: String }): obj is images_var_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const images_variance_fields_possibleTypes = ["images_variance_fields"]
export const isimages_variance_fields = (obj: { __typename: String }): obj is images_variance_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_variance_fields_possibleTypes.includes(obj.__typename)
}

const guilds_aggregate_possibleTypes = ["guilds_aggregate"]
export const isguilds_aggregate = (obj: { __typename: String }): obj is guilds_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return guilds_aggregate_possibleTypes.includes(obj.__typename)
}

const guilds_aggregate_fields_possibleTypes = ["guilds_aggregate_fields"]
export const isguilds_aggregate_fields = (obj: { __typename: String }): obj is guilds_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return guilds_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const guilds_max_fields_possibleTypes = ["guilds_max_fields"]
export const isguilds_max_fields = (obj: { __typename: String }): obj is guilds_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return guilds_max_fields_possibleTypes.includes(obj.__typename)
}

const guilds_min_fields_possibleTypes = ["guilds_min_fields"]
export const isguilds_min_fields = (obj: { __typename: String }): obj is guilds_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return guilds_min_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_possibleTypes = ["tag_counts"]
export const istag_counts = (obj: { __typename: String }): obj is tag_counts => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_possibleTypes.includes(obj.__typename)
}

const tag_counts_aggregate_possibleTypes = ["tag_counts_aggregate"]
export const istag_counts_aggregate = (obj: { __typename: String }): obj is tag_counts_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_aggregate_possibleTypes.includes(obj.__typename)
}

const tag_counts_aggregate_fields_possibleTypes = ["tag_counts_aggregate_fields"]
export const istag_counts_aggregate_fields = (obj: { __typename: String }): obj is tag_counts_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_avg_fields_possibleTypes = ["tag_counts_avg_fields"]
export const istag_counts_avg_fields = (obj: { __typename: String }): obj is tag_counts_avg_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_avg_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_max_fields_possibleTypes = ["tag_counts_max_fields"]
export const istag_counts_max_fields = (obj: { __typename: String }): obj is tag_counts_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_max_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_min_fields_possibleTypes = ["tag_counts_min_fields"]
export const istag_counts_min_fields = (obj: { __typename: String }): obj is tag_counts_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_min_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_stddev_fields_possibleTypes = ["tag_counts_stddev_fields"]
export const istag_counts_stddev_fields = (obj: { __typename: String }): obj is tag_counts_stddev_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_stddev_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_stddev_pop_fields_possibleTypes = ["tag_counts_stddev_pop_fields"]
export const istag_counts_stddev_pop_fields = (obj: { __typename: String }): obj is tag_counts_stddev_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_stddev_samp_fields_possibleTypes = ["tag_counts_stddev_samp_fields"]
export const istag_counts_stddev_samp_fields = (obj: { __typename: String }): obj is tag_counts_stddev_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_sum_fields_possibleTypes = ["tag_counts_sum_fields"]
export const istag_counts_sum_fields = (obj: { __typename: String }): obj is tag_counts_sum_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_sum_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_var_pop_fields_possibleTypes = ["tag_counts_var_pop_fields"]
export const istag_counts_var_pop_fields = (obj: { __typename: String }): obj is tag_counts_var_pop_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_var_samp_fields_possibleTypes = ["tag_counts_var_samp_fields"]
export const istag_counts_var_samp_fields = (obj: { __typename: String }): obj is tag_counts_var_samp_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const tag_counts_variance_fields_possibleTypes = ["tag_counts_variance_fields"]
export const istag_counts_variance_fields = (obj: { __typename: String }): obj is tag_counts_variance_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_variance_fields_possibleTypes.includes(obj.__typename)
}

const users_aggregate_possibleTypes = ["users_aggregate"]
export const isusers_aggregate = (obj: { __typename: String }): obj is users_aggregate => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return users_aggregate_possibleTypes.includes(obj.__typename)
}

const users_aggregate_fields_possibleTypes = ["users_aggregate_fields"]
export const isusers_aggregate_fields = (obj: { __typename: String }): obj is users_aggregate_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return users_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const users_max_fields_possibleTypes = ["users_max_fields"]
export const isusers_max_fields = (obj: { __typename: String }): obj is users_max_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return users_max_fields_possibleTypes.includes(obj.__typename)
}

const users_min_fields_possibleTypes = ["users_min_fields"]
export const isusers_min_fields = (obj: { __typename: String }): obj is users_min_fields => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return users_min_fields_possibleTypes.includes(obj.__typename)
}

const mutation_root_possibleTypes = ["mutation_root"]
export const ismutation_root = (obj: { __typename: String }): obj is mutation_root => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return mutation_root_possibleTypes.includes(obj.__typename)
}

const auto_tags_mutation_response_possibleTypes = ["auto_tags_mutation_response"]
export const isauto_tags_mutation_response = (obj: { __typename: String }): obj is auto_tags_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return auto_tags_mutation_response_possibleTypes.includes(obj.__typename)
}

const guilds_mutation_response_possibleTypes = ["guilds_mutation_response"]
export const isguilds_mutation_response = (obj: { __typename: String }): obj is guilds_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return guilds_mutation_response_possibleTypes.includes(obj.__typename)
}

const image_channels_mutation_response_possibleTypes = ["image_channels_mutation_response"]
export const isimage_channels_mutation_response = (obj: { __typename: String }): obj is image_channels_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_channels_mutation_response_possibleTypes.includes(obj.__typename)
}

const image_tags_mutation_response_possibleTypes = ["image_tags_mutation_response"]
export const isimage_tags_mutation_response = (obj: { __typename: String }): obj is image_tags_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return image_tags_mutation_response_possibleTypes.includes(obj.__typename)
}

const images_mutation_response_possibleTypes = ["images_mutation_response"]
export const isimages_mutation_response = (obj: { __typename: String }): obj is images_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return images_mutation_response_possibleTypes.includes(obj.__typename)
}

const tag_counts_mutation_response_possibleTypes = ["tag_counts_mutation_response"]
export const istag_counts_mutation_response = (obj: { __typename: String }): obj is tag_counts_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return tag_counts_mutation_response_possibleTypes.includes(obj.__typename)
}

const users_mutation_response_possibleTypes = ["users_mutation_response"]
export const isusers_mutation_response = (obj: { __typename: String }): obj is users_mutation_response => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return users_mutation_response_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes = ["subscription_root"]
export const issubscription_root = (obj: { __typename: String }): obj is subscription_root => {
  if (!obj.__typename) { throw new Error("__typename is missing") }
  return subscription_root_possibleTypes.includes(obj.__typename)
}

/** query root */
export interface query_rootPromiseChain {
  /** fetch data from the table: "auto_tags" */
  auto_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> }) &
    ({ execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> })
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => auto_tags_aggregatePromiseChain & {
    execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Promise<auto_tags_aggregate>
  }) &
    (auto_tags_aggregatePromiseChain & {
      execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Promise<auto_tags_aggregate>
    })
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk: (args: {
    id: Int
  }) => auto_tagsPromiseChain & {
    execute: (request: auto_tagsRequest, defaultValue?: auto_tags | null) => Promise<auto_tags | null>
  }
  /** fetch data from the table: "guilds" */
  guilds: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => { execute: (request: guildsRequest, defaultValue?: guilds[]) => Promise<guilds[]> }) &
    ({ execute: (request: guildsRequest, defaultValue?: guilds[]) => Promise<guilds[]> })
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => guilds_aggregatePromiseChain & {
    execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Promise<guilds_aggregate>
  }) &
    (guilds_aggregatePromiseChain & {
      execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Promise<guilds_aggregate>
    })
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk: (args: {
    guild_id: String
  }) => guildsPromiseChain & { execute: (request: guildsRequest, defaultValue?: guilds | null) => Promise<guilds | null> }
  /** fetch data from the table: "image_channels" */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> })
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregatePromiseChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Promise<image_channels_aggregate>
  }) &
    (image_channels_aggregatePromiseChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Promise<image_channels_aggregate>
    })
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk: (args: {
    channel_id: String
  }) => image_channelsPromiseChain & {
    execute: (request: image_channelsRequest, defaultValue?: image_channels | null) => Promise<image_channels | null>
  }
  /** fetch data from the table: "image_tags" */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> })
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregatePromiseChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
  }) &
    (image_tags_aggregatePromiseChain & {
      execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
    })
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk: (args: {
    id: Int
  }) => image_tagsPromiseChain & {
    execute: (request: image_tagsRequest, defaultValue?: image_tags | null) => Promise<image_tags | null>
  }
  /** fetch data from the table: "images" */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> })
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregatePromiseChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
  }) &
    (images_aggregatePromiseChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
    })
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk: (args: {
    id: Int
  }) => imagesPromiseChain & { execute: (request: imagesRequest, defaultValue?: images | null) => Promise<images | null> }
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> })
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregatePromiseChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
  }) &
    (tag_counts_aggregatePromiseChain & {
      execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" */
  tag_counts: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> })
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregatePromiseChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
  }) &
    (tag_counts_aggregatePromiseChain & {
      execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk: (args: {
    name: String
  }) => tag_countsPromiseChain & {
    execute: (request: tag_countsRequest, defaultValue?: tag_counts | null) => Promise<tag_counts | null>
  }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }) &
    ({ execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> })
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregatePromiseChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
  }) &
    (users_aggregatePromiseChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    user_id: String
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** query root */
export interface query_rootObservableChain {
  /** fetch data from the table: "auto_tags" */
  auto_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> }) &
    ({ execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> })
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => auto_tags_aggregateObservableChain & {
    execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Observable<auto_tags_aggregate>
  }) &
    (auto_tags_aggregateObservableChain & {
      execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Observable<auto_tags_aggregate>
    })
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk: (args: {
    id: Int
  }) => auto_tagsObservableChain & {
    execute: (request: auto_tagsRequest, defaultValue?: auto_tags | null) => Observable<auto_tags | null>
  }
  /** fetch data from the table: "guilds" */
  guilds: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => { execute: (request: guildsRequest, defaultValue?: guilds[]) => Observable<guilds[]> }) &
    ({ execute: (request: guildsRequest, defaultValue?: guilds[]) => Observable<guilds[]> })
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => guilds_aggregateObservableChain & {
    execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Observable<guilds_aggregate>
  }) &
    (guilds_aggregateObservableChain & {
      execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Observable<guilds_aggregate>
    })
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk: (args: {
    guild_id: String
  }) => guildsObservableChain & {
    execute: (request: guildsRequest, defaultValue?: guilds | null) => Observable<guilds | null>
  }
  /** fetch data from the table: "image_channels" */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> })
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregateObservableChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Observable<image_channels_aggregate>
  }) &
    (image_channels_aggregateObservableChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Observable<image_channels_aggregate>
    })
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk: (args: {
    channel_id: String
  }) => image_channelsObservableChain & {
    execute: (request: image_channelsRequest, defaultValue?: image_channels | null) => Observable<image_channels | null>
  }
  /** fetch data from the table: "image_tags" */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> })
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregateObservableChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Observable<image_tags_aggregate>
  }) &
    (image_tags_aggregateObservableChain & {
      execute: (
        request: image_tags_aggregateRequest,
        defaultValue?: image_tags_aggregate,
      ) => Observable<image_tags_aggregate>
    })
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk: (args: {
    id: Int
  }) => image_tagsObservableChain & {
    execute: (request: image_tagsRequest, defaultValue?: image_tags | null) => Observable<image_tags | null>
  }
  /** fetch data from the table: "images" */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> })
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregateObservableChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
  }) &
    (images_aggregateObservableChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
    })
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk: (args: {
    id: Int
  }) => imagesObservableChain & {
    execute: (request: imagesRequest, defaultValue?: images | null) => Observable<images | null>
  }
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> })
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregateObservableChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Observable<tag_counts_aggregate>
  }) &
    (tag_counts_aggregateObservableChain & {
      execute: (
        request: tag_counts_aggregateRequest,
        defaultValue?: tag_counts_aggregate,
      ) => Observable<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" */
  tag_counts: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> })
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregateObservableChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Observable<tag_counts_aggregate>
  }) &
    (tag_counts_aggregateObservableChain & {
      execute: (
        request: tag_counts_aggregateRequest,
        defaultValue?: tag_counts_aggregate,
      ) => Observable<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk: (args: {
    name: String
  }) => tag_countsObservableChain & {
    execute: (request: tag_countsRequest, defaultValue?: tag_counts | null) => Observable<tag_counts | null>
  }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }) &
    ({ execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> })
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregateObservableChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
  }) &
    (users_aggregateObservableChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    user_id: String
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}

/** columns and relationships of "auto_tags" */
export interface auto_tagsPromiseChain {
  channel_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** An object relationship */
  image_channel: image_channelsPromiseChain & {
    execute: (request: image_channelsRequest, defaultValue?: image_channels) => Promise<image_channels>
  }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** columns and relationships of "auto_tags" */
export interface auto_tagsObservableChain {
  channel_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** An object relationship */
  image_channel: image_channelsObservableChain & {
    execute: (request: image_channelsRequest, defaultValue?: image_channels) => Observable<image_channels>
  }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** columns and relationships of "image_channels" */
export interface image_channelsPromiseChain {
  assigner_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An array relationship */
  auto_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> }) &
    ({ execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> })
  /** An aggregated array relationship */
  auto_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => auto_tags_aggregatePromiseChain & {
    execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Promise<auto_tags_aggregate>
  }) &
    (auto_tags_aggregatePromiseChain & {
      execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Promise<auto_tags_aggregate>
    })
  channel_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An object relationship */
  guild: guildsPromiseChain & { execute: (request: guildsRequest, defaultValue?: guilds) => Promise<guilds> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An object relationship */
  user: usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users) => Promise<users> }
}

/** columns and relationships of "image_channels" */
export interface image_channelsObservableChain {
  assigner_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An array relationship */
  auto_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> }) &
    ({ execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> })
  /** An aggregated array relationship */
  auto_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => auto_tags_aggregateObservableChain & {
    execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Observable<auto_tags_aggregate>
  }) &
    (auto_tags_aggregateObservableChain & {
      execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Observable<auto_tags_aggregate>
    })
  channel_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An object relationship */
  guild: guildsObservableChain & { execute: (request: guildsRequest, defaultValue?: guilds) => Observable<guilds> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An object relationship */
  user: usersObservableChain & { execute: (request: usersRequest, defaultValue?: users) => Observable<users> }
}

/** aggregated selection of "auto_tags" */
export interface auto_tags_aggregatePromiseChain {
  aggregate: auto_tags_aggregate_fieldsPromiseChain & {
    execute: (
      request: auto_tags_aggregate_fieldsRequest,
      defaultValue?: auto_tags_aggregate_fields | null,
    ) => Promise<auto_tags_aggregate_fields | null>
  }
  nodes: { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> }
}

/** aggregated selection of "auto_tags" */
export interface auto_tags_aggregateObservableChain {
  aggregate: auto_tags_aggregate_fieldsObservableChain & {
    execute: (
      request: auto_tags_aggregate_fieldsRequest,
      defaultValue?: auto_tags_aggregate_fields | null,
    ) => Observable<auto_tags_aggregate_fields | null>
  }
  nodes: { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> }
}

/** aggregate fields of "auto_tags" */
export interface auto_tags_aggregate_fieldsPromiseChain {
  avg: auto_tags_avg_fieldsPromiseChain & {
    execute: (
      request: auto_tags_avg_fieldsRequest,
      defaultValue?: auto_tags_avg_fields | null,
    ) => Promise<auto_tags_avg_fields | null>
  }
  count: ((args?: {
    columns?: auto_tags_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: auto_tags_max_fieldsPromiseChain & {
    execute: (
      request: auto_tags_max_fieldsRequest,
      defaultValue?: auto_tags_max_fields | null,
    ) => Promise<auto_tags_max_fields | null>
  }
  min: auto_tags_min_fieldsPromiseChain & {
    execute: (
      request: auto_tags_min_fieldsRequest,
      defaultValue?: auto_tags_min_fields | null,
    ) => Promise<auto_tags_min_fields | null>
  }
  stddev: auto_tags_stddev_fieldsPromiseChain & {
    execute: (
      request: auto_tags_stddev_fieldsRequest,
      defaultValue?: auto_tags_stddev_fields | null,
    ) => Promise<auto_tags_stddev_fields | null>
  }
  stddev_pop: auto_tags_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: auto_tags_stddev_pop_fieldsRequest,
      defaultValue?: auto_tags_stddev_pop_fields | null,
    ) => Promise<auto_tags_stddev_pop_fields | null>
  }
  stddev_samp: auto_tags_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: auto_tags_stddev_samp_fieldsRequest,
      defaultValue?: auto_tags_stddev_samp_fields | null,
    ) => Promise<auto_tags_stddev_samp_fields | null>
  }
  sum: auto_tags_sum_fieldsPromiseChain & {
    execute: (
      request: auto_tags_sum_fieldsRequest,
      defaultValue?: auto_tags_sum_fields | null,
    ) => Promise<auto_tags_sum_fields | null>
  }
  var_pop: auto_tags_var_pop_fieldsPromiseChain & {
    execute: (
      request: auto_tags_var_pop_fieldsRequest,
      defaultValue?: auto_tags_var_pop_fields | null,
    ) => Promise<auto_tags_var_pop_fields | null>
  }
  var_samp: auto_tags_var_samp_fieldsPromiseChain & {
    execute: (
      request: auto_tags_var_samp_fieldsRequest,
      defaultValue?: auto_tags_var_samp_fields | null,
    ) => Promise<auto_tags_var_samp_fields | null>
  }
  variance: auto_tags_variance_fieldsPromiseChain & {
    execute: (
      request: auto_tags_variance_fieldsRequest,
      defaultValue?: auto_tags_variance_fields | null,
    ) => Promise<auto_tags_variance_fields | null>
  }
}

/** aggregate fields of "auto_tags" */
export interface auto_tags_aggregate_fieldsObservableChain {
  avg: auto_tags_avg_fieldsObservableChain & {
    execute: (
      request: auto_tags_avg_fieldsRequest,
      defaultValue?: auto_tags_avg_fields | null,
    ) => Observable<auto_tags_avg_fields | null>
  }
  count: ((args?: {
    columns?: auto_tags_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: auto_tags_max_fieldsObservableChain & {
    execute: (
      request: auto_tags_max_fieldsRequest,
      defaultValue?: auto_tags_max_fields | null,
    ) => Observable<auto_tags_max_fields | null>
  }
  min: auto_tags_min_fieldsObservableChain & {
    execute: (
      request: auto_tags_min_fieldsRequest,
      defaultValue?: auto_tags_min_fields | null,
    ) => Observable<auto_tags_min_fields | null>
  }
  stddev: auto_tags_stddev_fieldsObservableChain & {
    execute: (
      request: auto_tags_stddev_fieldsRequest,
      defaultValue?: auto_tags_stddev_fields | null,
    ) => Observable<auto_tags_stddev_fields | null>
  }
  stddev_pop: auto_tags_stddev_pop_fieldsObservableChain & {
    execute: (
      request: auto_tags_stddev_pop_fieldsRequest,
      defaultValue?: auto_tags_stddev_pop_fields | null,
    ) => Observable<auto_tags_stddev_pop_fields | null>
  }
  stddev_samp: auto_tags_stddev_samp_fieldsObservableChain & {
    execute: (
      request: auto_tags_stddev_samp_fieldsRequest,
      defaultValue?: auto_tags_stddev_samp_fields | null,
    ) => Observable<auto_tags_stddev_samp_fields | null>
  }
  sum: auto_tags_sum_fieldsObservableChain & {
    execute: (
      request: auto_tags_sum_fieldsRequest,
      defaultValue?: auto_tags_sum_fields | null,
    ) => Observable<auto_tags_sum_fields | null>
  }
  var_pop: auto_tags_var_pop_fieldsObservableChain & {
    execute: (
      request: auto_tags_var_pop_fieldsRequest,
      defaultValue?: auto_tags_var_pop_fields | null,
    ) => Observable<auto_tags_var_pop_fields | null>
  }
  var_samp: auto_tags_var_samp_fieldsObservableChain & {
    execute: (
      request: auto_tags_var_samp_fieldsRequest,
      defaultValue?: auto_tags_var_samp_fields | null,
    ) => Observable<auto_tags_var_samp_fields | null>
  }
  variance: auto_tags_variance_fieldsObservableChain & {
    execute: (
      request: auto_tags_variance_fieldsRequest,
      defaultValue?: auto_tags_variance_fields | null,
    ) => Observable<auto_tags_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface auto_tags_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface auto_tags_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface auto_tags_max_fieldsPromiseChain {
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface auto_tags_max_fieldsObservableChain {
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface auto_tags_min_fieldsPromiseChain {
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface auto_tags_min_fieldsObservableChain {
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface auto_tags_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface auto_tags_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface auto_tags_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface auto_tags_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface auto_tags_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface auto_tags_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface auto_tags_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface auto_tags_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface auto_tags_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface auto_tags_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface auto_tags_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface auto_tags_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface auto_tags_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface auto_tags_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** columns and relationships of "guilds" */
export interface guildsPromiseChain {
  enabled: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An array relationship */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> })
  /** An aggregated array relationship */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregatePromiseChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Promise<image_channels_aggregate>
  }) &
    (image_channels_aggregatePromiseChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Promise<image_channels_aggregate>
    })
  /** An array relationship */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> })
  /** An aggregated array relationship */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregatePromiseChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
  }) &
    (images_aggregatePromiseChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
    })
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  welcome_channel: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** columns and relationships of "guilds" */
export interface guildsObservableChain {
  enabled: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An array relationship */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> })
  /** An aggregated array relationship */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregateObservableChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Observable<image_channels_aggregate>
  }) &
    (image_channels_aggregateObservableChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Observable<image_channels_aggregate>
    })
  /** An array relationship */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> })
  /** An aggregated array relationship */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregateObservableChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
  }) &
    (images_aggregateObservableChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
    })
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  welcome_channel: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregated selection of "image_channels" */
export interface image_channels_aggregatePromiseChain {
  aggregate: image_channels_aggregate_fieldsPromiseChain & {
    execute: (
      request: image_channels_aggregate_fieldsRequest,
      defaultValue?: image_channels_aggregate_fields | null,
    ) => Promise<image_channels_aggregate_fields | null>
  }
  nodes: { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> }
}

/** aggregated selection of "image_channels" */
export interface image_channels_aggregateObservableChain {
  aggregate: image_channels_aggregate_fieldsObservableChain & {
    execute: (
      request: image_channels_aggregate_fieldsRequest,
      defaultValue?: image_channels_aggregate_fields | null,
    ) => Observable<image_channels_aggregate_fields | null>
  }
  nodes: { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> }
}

/** aggregate fields of "image_channels" */
export interface image_channels_aggregate_fieldsPromiseChain {
  count: ((args?: {
    columns?: image_channels_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: image_channels_max_fieldsPromiseChain & {
    execute: (
      request: image_channels_max_fieldsRequest,
      defaultValue?: image_channels_max_fields | null,
    ) => Promise<image_channels_max_fields | null>
  }
  min: image_channels_min_fieldsPromiseChain & {
    execute: (
      request: image_channels_min_fieldsRequest,
      defaultValue?: image_channels_min_fields | null,
    ) => Promise<image_channels_min_fields | null>
  }
}

/** aggregate fields of "image_channels" */
export interface image_channels_aggregate_fieldsObservableChain {
  count: ((args?: {
    columns?: image_channels_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: image_channels_max_fieldsObservableChain & {
    execute: (
      request: image_channels_max_fieldsRequest,
      defaultValue?: image_channels_max_fields | null,
    ) => Observable<image_channels_max_fields | null>
  }
  min: image_channels_min_fieldsObservableChain & {
    execute: (
      request: image_channels_min_fieldsRequest,
      defaultValue?: image_channels_min_fields | null,
    ) => Observable<image_channels_min_fields | null>
  }
}

/** aggregate max on columns */
export interface image_channels_max_fieldsPromiseChain {
  assigner_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface image_channels_max_fieldsObservableChain {
  assigner_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface image_channels_min_fieldsPromiseChain {
  assigner_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface image_channels_min_fieldsObservableChain {
  assigner_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  channel_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** columns and relationships of "images" */
export interface imagesPromiseChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz) => Promise<timestamptz> }
  file_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  /** An object relationship */
  guild: guildsPromiseChain & { execute: (request: guildsRequest, defaultValue?: guilds | null) => Promise<guilds | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** An array relationship */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> })
  /** An aggregated array relationship */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregatePromiseChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
  }) &
    (image_tags_aggregatePromiseChain & {
      execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
    })
  message_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An object relationship */
  user: usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** columns and relationships of "images" */
export interface imagesObservableChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz) => Observable<timestamptz> }
  file_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  /** An object relationship */
  guild: guildsObservableChain & {
    execute: (request: guildsRequest, defaultValue?: guilds | null) => Observable<guilds | null>
  }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** An array relationship */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> })
  /** An aggregated array relationship */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregateObservableChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Observable<image_tags_aggregate>
  }) &
    (image_tags_aggregateObservableChain & {
      execute: (
        request: image_tags_aggregateRequest,
        defaultValue?: image_tags_aggregate,
      ) => Observable<image_tags_aggregate>
    })
  message_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An object relationship */
  user: usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** columns and relationships of "image_tags" */
export interface image_tagsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** An object relationship */
  image: imagesPromiseChain & { execute: (request: imagesRequest, defaultValue?: images) => Promise<images> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  tagger_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An object relationship */
  user: usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users) => Promise<users> }
}

/** columns and relationships of "image_tags" */
export interface image_tagsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** An object relationship */
  image: imagesObservableChain & { execute: (request: imagesRequest, defaultValue?: images) => Observable<images> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  tagger_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An object relationship */
  user: usersObservableChain & { execute: (request: usersRequest, defaultValue?: users) => Observable<users> }
}

/** columns and relationships of "users" */
export interface usersPromiseChain {
  avatar: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  /** An array relationship */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> })
  /** An aggregated array relationship */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregatePromiseChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Promise<image_channels_aggregate>
  }) &
    (image_channels_aggregatePromiseChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Promise<image_channels_aggregate>
    })
  /** An array relationship */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> })
  /** An aggregated array relationship */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregatePromiseChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
  }) &
    (image_tags_aggregatePromiseChain & {
      execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
    })
  /** An array relationship */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> })
  /** An aggregated array relationship */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregatePromiseChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
  }) &
    (images_aggregatePromiseChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
    })
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** columns and relationships of "users" */
export interface usersObservableChain {
  avatar: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  /** An array relationship */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> })
  /** An aggregated array relationship */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregateObservableChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Observable<image_channels_aggregate>
  }) &
    (image_channels_aggregateObservableChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Observable<image_channels_aggregate>
    })
  /** An array relationship */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> })
  /** An aggregated array relationship */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregateObservableChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Observable<image_tags_aggregate>
  }) &
    (image_tags_aggregateObservableChain & {
      execute: (
        request: image_tags_aggregateRequest,
        defaultValue?: image_tags_aggregate,
      ) => Observable<image_tags_aggregate>
    })
  /** An array relationship */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> })
  /** An aggregated array relationship */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregateObservableChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
  }) &
    (images_aggregateObservableChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
    })
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** aggregated selection of "image_tags" */
export interface image_tags_aggregatePromiseChain {
  aggregate: image_tags_aggregate_fieldsPromiseChain & {
    execute: (
      request: image_tags_aggregate_fieldsRequest,
      defaultValue?: image_tags_aggregate_fields | null,
    ) => Promise<image_tags_aggregate_fields | null>
  }
  nodes: { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> }
}

/** aggregated selection of "image_tags" */
export interface image_tags_aggregateObservableChain {
  aggregate: image_tags_aggregate_fieldsObservableChain & {
    execute: (
      request: image_tags_aggregate_fieldsRequest,
      defaultValue?: image_tags_aggregate_fields | null,
    ) => Observable<image_tags_aggregate_fields | null>
  }
  nodes: { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> }
}

/** aggregate fields of "image_tags" */
export interface image_tags_aggregate_fieldsPromiseChain {
  avg: image_tags_avg_fieldsPromiseChain & {
    execute: (
      request: image_tags_avg_fieldsRequest,
      defaultValue?: image_tags_avg_fields | null,
    ) => Promise<image_tags_avg_fields | null>
  }
  count: ((args?: {
    columns?: image_tags_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: image_tags_max_fieldsPromiseChain & {
    execute: (
      request: image_tags_max_fieldsRequest,
      defaultValue?: image_tags_max_fields | null,
    ) => Promise<image_tags_max_fields | null>
  }
  min: image_tags_min_fieldsPromiseChain & {
    execute: (
      request: image_tags_min_fieldsRequest,
      defaultValue?: image_tags_min_fields | null,
    ) => Promise<image_tags_min_fields | null>
  }
  stddev: image_tags_stddev_fieldsPromiseChain & {
    execute: (
      request: image_tags_stddev_fieldsRequest,
      defaultValue?: image_tags_stddev_fields | null,
    ) => Promise<image_tags_stddev_fields | null>
  }
  stddev_pop: image_tags_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: image_tags_stddev_pop_fieldsRequest,
      defaultValue?: image_tags_stddev_pop_fields | null,
    ) => Promise<image_tags_stddev_pop_fields | null>
  }
  stddev_samp: image_tags_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: image_tags_stddev_samp_fieldsRequest,
      defaultValue?: image_tags_stddev_samp_fields | null,
    ) => Promise<image_tags_stddev_samp_fields | null>
  }
  sum: image_tags_sum_fieldsPromiseChain & {
    execute: (
      request: image_tags_sum_fieldsRequest,
      defaultValue?: image_tags_sum_fields | null,
    ) => Promise<image_tags_sum_fields | null>
  }
  var_pop: image_tags_var_pop_fieldsPromiseChain & {
    execute: (
      request: image_tags_var_pop_fieldsRequest,
      defaultValue?: image_tags_var_pop_fields | null,
    ) => Promise<image_tags_var_pop_fields | null>
  }
  var_samp: image_tags_var_samp_fieldsPromiseChain & {
    execute: (
      request: image_tags_var_samp_fieldsRequest,
      defaultValue?: image_tags_var_samp_fields | null,
    ) => Promise<image_tags_var_samp_fields | null>
  }
  variance: image_tags_variance_fieldsPromiseChain & {
    execute: (
      request: image_tags_variance_fieldsRequest,
      defaultValue?: image_tags_variance_fields | null,
    ) => Promise<image_tags_variance_fields | null>
  }
}

/** aggregate fields of "image_tags" */
export interface image_tags_aggregate_fieldsObservableChain {
  avg: image_tags_avg_fieldsObservableChain & {
    execute: (
      request: image_tags_avg_fieldsRequest,
      defaultValue?: image_tags_avg_fields | null,
    ) => Observable<image_tags_avg_fields | null>
  }
  count: ((args?: {
    columns?: image_tags_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: image_tags_max_fieldsObservableChain & {
    execute: (
      request: image_tags_max_fieldsRequest,
      defaultValue?: image_tags_max_fields | null,
    ) => Observable<image_tags_max_fields | null>
  }
  min: image_tags_min_fieldsObservableChain & {
    execute: (
      request: image_tags_min_fieldsRequest,
      defaultValue?: image_tags_min_fields | null,
    ) => Observable<image_tags_min_fields | null>
  }
  stddev: image_tags_stddev_fieldsObservableChain & {
    execute: (
      request: image_tags_stddev_fieldsRequest,
      defaultValue?: image_tags_stddev_fields | null,
    ) => Observable<image_tags_stddev_fields | null>
  }
  stddev_pop: image_tags_stddev_pop_fieldsObservableChain & {
    execute: (
      request: image_tags_stddev_pop_fieldsRequest,
      defaultValue?: image_tags_stddev_pop_fields | null,
    ) => Observable<image_tags_stddev_pop_fields | null>
  }
  stddev_samp: image_tags_stddev_samp_fieldsObservableChain & {
    execute: (
      request: image_tags_stddev_samp_fieldsRequest,
      defaultValue?: image_tags_stddev_samp_fields | null,
    ) => Observable<image_tags_stddev_samp_fields | null>
  }
  sum: image_tags_sum_fieldsObservableChain & {
    execute: (
      request: image_tags_sum_fieldsRequest,
      defaultValue?: image_tags_sum_fields | null,
    ) => Observable<image_tags_sum_fields | null>
  }
  var_pop: image_tags_var_pop_fieldsObservableChain & {
    execute: (
      request: image_tags_var_pop_fieldsRequest,
      defaultValue?: image_tags_var_pop_fields | null,
    ) => Observable<image_tags_var_pop_fields | null>
  }
  var_samp: image_tags_var_samp_fieldsObservableChain & {
    execute: (
      request: image_tags_var_samp_fieldsRequest,
      defaultValue?: image_tags_var_samp_fields | null,
    ) => Observable<image_tags_var_samp_fields | null>
  }
  variance: image_tags_variance_fieldsObservableChain & {
    execute: (
      request: image_tags_variance_fieldsRequest,
      defaultValue?: image_tags_variance_fields | null,
    ) => Observable<image_tags_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface image_tags_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface image_tags_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface image_tags_max_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  tagger_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface image_tags_max_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  tagger_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface image_tags_min_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  tagger_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface image_tags_min_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  tagger_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface image_tags_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface image_tags_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface image_tags_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface image_tags_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface image_tags_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface image_tags_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface image_tags_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface image_tags_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface image_tags_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface image_tags_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface image_tags_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface image_tags_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface image_tags_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface image_tags_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  image_id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregated selection of "images" */
export interface images_aggregatePromiseChain {
  aggregate: images_aggregate_fieldsPromiseChain & {
    execute: (
      request: images_aggregate_fieldsRequest,
      defaultValue?: images_aggregate_fields | null,
    ) => Promise<images_aggregate_fields | null>
  }
  nodes: { execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> }
}

/** aggregated selection of "images" */
export interface images_aggregateObservableChain {
  aggregate: images_aggregate_fieldsObservableChain & {
    execute: (
      request: images_aggregate_fieldsRequest,
      defaultValue?: images_aggregate_fields | null,
    ) => Observable<images_aggregate_fields | null>
  }
  nodes: { execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> }
}

/** aggregate fields of "images" */
export interface images_aggregate_fieldsPromiseChain {
  avg: images_avg_fieldsPromiseChain & {
    execute: (
      request: images_avg_fieldsRequest,
      defaultValue?: images_avg_fields | null,
    ) => Promise<images_avg_fields | null>
  }
  count: ((args?: {
    columns?: images_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: images_max_fieldsPromiseChain & {
    execute: (
      request: images_max_fieldsRequest,
      defaultValue?: images_max_fields | null,
    ) => Promise<images_max_fields | null>
  }
  min: images_min_fieldsPromiseChain & {
    execute: (
      request: images_min_fieldsRequest,
      defaultValue?: images_min_fields | null,
    ) => Promise<images_min_fields | null>
  }
  stddev: images_stddev_fieldsPromiseChain & {
    execute: (
      request: images_stddev_fieldsRequest,
      defaultValue?: images_stddev_fields | null,
    ) => Promise<images_stddev_fields | null>
  }
  stddev_pop: images_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: images_stddev_pop_fieldsRequest,
      defaultValue?: images_stddev_pop_fields | null,
    ) => Promise<images_stddev_pop_fields | null>
  }
  stddev_samp: images_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: images_stddev_samp_fieldsRequest,
      defaultValue?: images_stddev_samp_fields | null,
    ) => Promise<images_stddev_samp_fields | null>
  }
  sum: images_sum_fieldsPromiseChain & {
    execute: (
      request: images_sum_fieldsRequest,
      defaultValue?: images_sum_fields | null,
    ) => Promise<images_sum_fields | null>
  }
  var_pop: images_var_pop_fieldsPromiseChain & {
    execute: (
      request: images_var_pop_fieldsRequest,
      defaultValue?: images_var_pop_fields | null,
    ) => Promise<images_var_pop_fields | null>
  }
  var_samp: images_var_samp_fieldsPromiseChain & {
    execute: (
      request: images_var_samp_fieldsRequest,
      defaultValue?: images_var_samp_fields | null,
    ) => Promise<images_var_samp_fields | null>
  }
  variance: images_variance_fieldsPromiseChain & {
    execute: (
      request: images_variance_fieldsRequest,
      defaultValue?: images_variance_fields | null,
    ) => Promise<images_variance_fields | null>
  }
}

/** aggregate fields of "images" */
export interface images_aggregate_fieldsObservableChain {
  avg: images_avg_fieldsObservableChain & {
    execute: (
      request: images_avg_fieldsRequest,
      defaultValue?: images_avg_fields | null,
    ) => Observable<images_avg_fields | null>
  }
  count: ((args?: {
    columns?: images_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: images_max_fieldsObservableChain & {
    execute: (
      request: images_max_fieldsRequest,
      defaultValue?: images_max_fields | null,
    ) => Observable<images_max_fields | null>
  }
  min: images_min_fieldsObservableChain & {
    execute: (
      request: images_min_fieldsRequest,
      defaultValue?: images_min_fields | null,
    ) => Observable<images_min_fields | null>
  }
  stddev: images_stddev_fieldsObservableChain & {
    execute: (
      request: images_stddev_fieldsRequest,
      defaultValue?: images_stddev_fields | null,
    ) => Observable<images_stddev_fields | null>
  }
  stddev_pop: images_stddev_pop_fieldsObservableChain & {
    execute: (
      request: images_stddev_pop_fieldsRequest,
      defaultValue?: images_stddev_pop_fields | null,
    ) => Observable<images_stddev_pop_fields | null>
  }
  stddev_samp: images_stddev_samp_fieldsObservableChain & {
    execute: (
      request: images_stddev_samp_fieldsRequest,
      defaultValue?: images_stddev_samp_fields | null,
    ) => Observable<images_stddev_samp_fields | null>
  }
  sum: images_sum_fieldsObservableChain & {
    execute: (
      request: images_sum_fieldsRequest,
      defaultValue?: images_sum_fields | null,
    ) => Observable<images_sum_fields | null>
  }
  var_pop: images_var_pop_fieldsObservableChain & {
    execute: (
      request: images_var_pop_fieldsRequest,
      defaultValue?: images_var_pop_fields | null,
    ) => Observable<images_var_pop_fields | null>
  }
  var_samp: images_var_samp_fieldsObservableChain & {
    execute: (
      request: images_var_samp_fieldsRequest,
      defaultValue?: images_var_samp_fields | null,
    ) => Observable<images_var_samp_fields | null>
  }
  variance: images_variance_fieldsObservableChain & {
    execute: (
      request: images_variance_fieldsRequest,
      defaultValue?: images_variance_fields | null,
    ) => Observable<images_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface images_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface images_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface images_max_fieldsPromiseChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  file_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  message_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface images_max_fieldsObservableChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  file_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  message_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface images_min_fieldsPromiseChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  file_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  message_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface images_min_fieldsObservableChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  file_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  message_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface images_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface images_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface images_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface images_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface images_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface images_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface images_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface images_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface images_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface images_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface images_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface images_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface images_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface images_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregated selection of "guilds" */
export interface guilds_aggregatePromiseChain {
  aggregate: guilds_aggregate_fieldsPromiseChain & {
    execute: (
      request: guilds_aggregate_fieldsRequest,
      defaultValue?: guilds_aggregate_fields | null,
    ) => Promise<guilds_aggregate_fields | null>
  }
  nodes: { execute: (request: guildsRequest, defaultValue?: guilds[]) => Promise<guilds[]> }
}

/** aggregated selection of "guilds" */
export interface guilds_aggregateObservableChain {
  aggregate: guilds_aggregate_fieldsObservableChain & {
    execute: (
      request: guilds_aggregate_fieldsRequest,
      defaultValue?: guilds_aggregate_fields | null,
    ) => Observable<guilds_aggregate_fields | null>
  }
  nodes: { execute: (request: guildsRequest, defaultValue?: guilds[]) => Observable<guilds[]> }
}

/** aggregate fields of "guilds" */
export interface guilds_aggregate_fieldsPromiseChain {
  count: ((args?: {
    columns?: guilds_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: guilds_max_fieldsPromiseChain & {
    execute: (
      request: guilds_max_fieldsRequest,
      defaultValue?: guilds_max_fields | null,
    ) => Promise<guilds_max_fields | null>
  }
  min: guilds_min_fieldsPromiseChain & {
    execute: (
      request: guilds_min_fieldsRequest,
      defaultValue?: guilds_min_fields | null,
    ) => Promise<guilds_min_fields | null>
  }
}

/** aggregate fields of "guilds" */
export interface guilds_aggregate_fieldsObservableChain {
  count: ((args?: {
    columns?: guilds_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: guilds_max_fieldsObservableChain & {
    execute: (
      request: guilds_max_fieldsRequest,
      defaultValue?: guilds_max_fields | null,
    ) => Observable<guilds_max_fields | null>
  }
  min: guilds_min_fieldsObservableChain & {
    execute: (
      request: guilds_min_fieldsRequest,
      defaultValue?: guilds_min_fields | null,
    ) => Observable<guilds_min_fields | null>
  }
}

/** aggregate max on columns */
export interface guilds_max_fieldsPromiseChain {
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  welcome_channel: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface guilds_max_fieldsObservableChain {
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  welcome_channel: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface guilds_min_fieldsPromiseChain {
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  welcome_channel: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface guilds_min_fieldsObservableChain {
  guild_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  welcome_channel: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** columns and relationships of "tag_counts" */
export interface tag_countsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint) => Promise<bigint> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** columns and relationships of "tag_counts" */
export interface tag_countsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint) => Observable<bigint> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** aggregated selection of "tag_counts" */
export interface tag_counts_aggregatePromiseChain {
  aggregate: tag_counts_aggregate_fieldsPromiseChain & {
    execute: (
      request: tag_counts_aggregate_fieldsRequest,
      defaultValue?: tag_counts_aggregate_fields | null,
    ) => Promise<tag_counts_aggregate_fields | null>
  }
  nodes: { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> }
}

/** aggregated selection of "tag_counts" */
export interface tag_counts_aggregateObservableChain {
  aggregate: tag_counts_aggregate_fieldsObservableChain & {
    execute: (
      request: tag_counts_aggregate_fieldsRequest,
      defaultValue?: tag_counts_aggregate_fields | null,
    ) => Observable<tag_counts_aggregate_fields | null>
  }
  nodes: { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> }
}

/** aggregate fields of "tag_counts" */
export interface tag_counts_aggregate_fieldsPromiseChain {
  avg: tag_counts_avg_fieldsPromiseChain & {
    execute: (
      request: tag_counts_avg_fieldsRequest,
      defaultValue?: tag_counts_avg_fields | null,
    ) => Promise<tag_counts_avg_fields | null>
  }
  count: ((args?: {
    columns?: tag_counts_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: tag_counts_max_fieldsPromiseChain & {
    execute: (
      request: tag_counts_max_fieldsRequest,
      defaultValue?: tag_counts_max_fields | null,
    ) => Promise<tag_counts_max_fields | null>
  }
  min: tag_counts_min_fieldsPromiseChain & {
    execute: (
      request: tag_counts_min_fieldsRequest,
      defaultValue?: tag_counts_min_fields | null,
    ) => Promise<tag_counts_min_fields | null>
  }
  stddev: tag_counts_stddev_fieldsPromiseChain & {
    execute: (
      request: tag_counts_stddev_fieldsRequest,
      defaultValue?: tag_counts_stddev_fields | null,
    ) => Promise<tag_counts_stddev_fields | null>
  }
  stddev_pop: tag_counts_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: tag_counts_stddev_pop_fieldsRequest,
      defaultValue?: tag_counts_stddev_pop_fields | null,
    ) => Promise<tag_counts_stddev_pop_fields | null>
  }
  stddev_samp: tag_counts_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: tag_counts_stddev_samp_fieldsRequest,
      defaultValue?: tag_counts_stddev_samp_fields | null,
    ) => Promise<tag_counts_stddev_samp_fields | null>
  }
  sum: tag_counts_sum_fieldsPromiseChain & {
    execute: (
      request: tag_counts_sum_fieldsRequest,
      defaultValue?: tag_counts_sum_fields | null,
    ) => Promise<tag_counts_sum_fields | null>
  }
  var_pop: tag_counts_var_pop_fieldsPromiseChain & {
    execute: (
      request: tag_counts_var_pop_fieldsRequest,
      defaultValue?: tag_counts_var_pop_fields | null,
    ) => Promise<tag_counts_var_pop_fields | null>
  }
  var_samp: tag_counts_var_samp_fieldsPromiseChain & {
    execute: (
      request: tag_counts_var_samp_fieldsRequest,
      defaultValue?: tag_counts_var_samp_fields | null,
    ) => Promise<tag_counts_var_samp_fields | null>
  }
  variance: tag_counts_variance_fieldsPromiseChain & {
    execute: (
      request: tag_counts_variance_fieldsRequest,
      defaultValue?: tag_counts_variance_fields | null,
    ) => Promise<tag_counts_variance_fields | null>
  }
}

/** aggregate fields of "tag_counts" */
export interface tag_counts_aggregate_fieldsObservableChain {
  avg: tag_counts_avg_fieldsObservableChain & {
    execute: (
      request: tag_counts_avg_fieldsRequest,
      defaultValue?: tag_counts_avg_fields | null,
    ) => Observable<tag_counts_avg_fields | null>
  }
  count: ((args?: {
    columns?: tag_counts_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: tag_counts_max_fieldsObservableChain & {
    execute: (
      request: tag_counts_max_fieldsRequest,
      defaultValue?: tag_counts_max_fields | null,
    ) => Observable<tag_counts_max_fields | null>
  }
  min: tag_counts_min_fieldsObservableChain & {
    execute: (
      request: tag_counts_min_fieldsRequest,
      defaultValue?: tag_counts_min_fields | null,
    ) => Observable<tag_counts_min_fields | null>
  }
  stddev: tag_counts_stddev_fieldsObservableChain & {
    execute: (
      request: tag_counts_stddev_fieldsRequest,
      defaultValue?: tag_counts_stddev_fields | null,
    ) => Observable<tag_counts_stddev_fields | null>
  }
  stddev_pop: tag_counts_stddev_pop_fieldsObservableChain & {
    execute: (
      request: tag_counts_stddev_pop_fieldsRequest,
      defaultValue?: tag_counts_stddev_pop_fields | null,
    ) => Observable<tag_counts_stddev_pop_fields | null>
  }
  stddev_samp: tag_counts_stddev_samp_fieldsObservableChain & {
    execute: (
      request: tag_counts_stddev_samp_fieldsRequest,
      defaultValue?: tag_counts_stddev_samp_fields | null,
    ) => Observable<tag_counts_stddev_samp_fields | null>
  }
  sum: tag_counts_sum_fieldsObservableChain & {
    execute: (
      request: tag_counts_sum_fieldsRequest,
      defaultValue?: tag_counts_sum_fields | null,
    ) => Observable<tag_counts_sum_fields | null>
  }
  var_pop: tag_counts_var_pop_fieldsObservableChain & {
    execute: (
      request: tag_counts_var_pop_fieldsRequest,
      defaultValue?: tag_counts_var_pop_fields | null,
    ) => Observable<tag_counts_var_pop_fields | null>
  }
  var_samp: tag_counts_var_samp_fieldsObservableChain & {
    execute: (
      request: tag_counts_var_samp_fieldsRequest,
      defaultValue?: tag_counts_var_samp_fields | null,
    ) => Observable<tag_counts_var_samp_fields | null>
  }
  variance: tag_counts_variance_fieldsObservableChain & {
    execute: (
      request: tag_counts_variance_fieldsRequest,
      defaultValue?: tag_counts_variance_fields | null,
    ) => Observable<tag_counts_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface tag_counts_avg_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface tag_counts_avg_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface tag_counts_max_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint | null) => Promise<bigint | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface tag_counts_max_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint | null) => Observable<bigint | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface tag_counts_min_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint | null) => Promise<bigint | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface tag_counts_min_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint | null) => Observable<bigint | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface tag_counts_stddev_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface tag_counts_stddev_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface tag_counts_stddev_pop_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface tag_counts_stddev_pop_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface tag_counts_stddev_samp_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface tag_counts_stddev_samp_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface tag_counts_sum_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint | null) => Promise<bigint | null> }
}

/** aggregate sum on columns */
export interface tag_counts_sum_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: bigint | null) => Observable<bigint | null> }
}

/** aggregate var_pop on columns */
export interface tag_counts_var_pop_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface tag_counts_var_pop_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface tag_counts_var_samp_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface tag_counts_var_samp_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface tag_counts_variance_fieldsPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface tag_counts_variance_fieldsObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregated selection of "users" */
export interface users_aggregatePromiseChain {
  aggregate: users_aggregate_fieldsPromiseChain & {
    execute: (
      request: users_aggregate_fieldsRequest,
      defaultValue?: users_aggregate_fields | null,
    ) => Promise<users_aggregate_fields | null>
  }
  nodes: { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }
}

/** aggregated selection of "users" */
export interface users_aggregateObservableChain {
  aggregate: users_aggregate_fieldsObservableChain & {
    execute: (
      request: users_aggregate_fieldsRequest,
      defaultValue?: users_aggregate_fields | null,
    ) => Observable<users_aggregate_fields | null>
  }
  nodes: { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsPromiseChain {
  count: ((args?: {
    columns?: users_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> })
  max: users_max_fieldsPromiseChain & {
    execute: (request: users_max_fieldsRequest, defaultValue?: users_max_fields | null) => Promise<users_max_fields | null>
  }
  min: users_min_fieldsPromiseChain & {
    execute: (request: users_min_fieldsRequest, defaultValue?: users_min_fields | null) => Promise<users_min_fields | null>
  }
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsObservableChain {
  count: ((args?: {
    columns?: users_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) &
    ({ execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> })
  max: users_max_fieldsObservableChain & {
    execute: (
      request: users_max_fieldsRequest,
      defaultValue?: users_max_fields | null,
    ) => Observable<users_max_fields | null>
  }
  min: users_min_fieldsObservableChain & {
    execute: (
      request: users_min_fieldsRequest,
      defaultValue?: users_min_fields | null,
    ) => Observable<users_min_fields | null>
  }
}

/** aggregate max on columns */
export interface users_max_fieldsPromiseChain {
  avatar: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface users_max_fieldsObservableChain {
  avatar: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface users_min_fieldsPromiseChain {
  avatar: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface users_min_fieldsObservableChain {
  avatar: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** mutation root */
export interface mutation_rootPromiseChain {
  /** delete data from the table: "auto_tags" */
  delete_auto_tags: (args: {
    /** filter the rows which have to be deleted */
    where: auto_tags_bool_exp
  }) => auto_tags_mutation_responsePromiseChain & {
    execute: (
      request: auto_tags_mutation_responseRequest,
      defaultValue?: auto_tags_mutation_response | null,
    ) => Promise<auto_tags_mutation_response | null>
  }
  /** delete data from the table: "guilds" */
  delete_guilds: (args: {
    /** filter the rows which have to be deleted */
    where: guilds_bool_exp
  }) => guilds_mutation_responsePromiseChain & {
    execute: (
      request: guilds_mutation_responseRequest,
      defaultValue?: guilds_mutation_response | null,
    ) => Promise<guilds_mutation_response | null>
  }
  /** delete data from the table: "image_channels" */
  delete_image_channels: (args: {
    /** filter the rows which have to be deleted */
    where: image_channels_bool_exp
  }) => image_channels_mutation_responsePromiseChain & {
    execute: (
      request: image_channels_mutation_responseRequest,
      defaultValue?: image_channels_mutation_response | null,
    ) => Promise<image_channels_mutation_response | null>
  }
  /** delete data from the table: "image_tags" */
  delete_image_tags: (args: {
    /** filter the rows which have to be deleted */
    where: image_tags_bool_exp
  }) => image_tags_mutation_responsePromiseChain & {
    execute: (
      request: image_tags_mutation_responseRequest,
      defaultValue?: image_tags_mutation_response | null,
    ) => Promise<image_tags_mutation_response | null>
  }
  /** delete data from the table: "images" */
  delete_images: (args: {
    /** filter the rows which have to be deleted */
    where: images_bool_exp
  }) => images_mutation_responsePromiseChain & {
    execute: (
      request: images_mutation_responseRequest,
      defaultValue?: images_mutation_response | null,
    ) => Promise<images_mutation_response | null>
  }
  /** delete data from the table: "tag_counts" */
  delete_tag_counts: (args: {
    /** filter the rows which have to be deleted */
    where: tag_counts_bool_exp
  }) => tag_counts_mutation_responsePromiseChain & {
    execute: (
      request: tag_counts_mutation_responseRequest,
      defaultValue?: tag_counts_mutation_response | null,
    ) => Promise<tag_counts_mutation_response | null>
  }
  /** delete data from the table: "users" */
  delete_users: (args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** insert data into the table: "auto_tags" */
  insert_auto_tags: (args: {
    /** the rows to be inserted */
    objects: auto_tags_insert_input[]
    /** on conflict condition */
    on_conflict?: auto_tags_on_conflict | null
  }) => auto_tags_mutation_responsePromiseChain & {
    execute: (
      request: auto_tags_mutation_responseRequest,
      defaultValue?: auto_tags_mutation_response | null,
    ) => Promise<auto_tags_mutation_response | null>
  }
  /** insert data into the table: "guilds" */
  insert_guilds: (args: {
    /** the rows to be inserted */
    objects: guilds_insert_input[]
    /** on conflict condition */
    on_conflict?: guilds_on_conflict | null
  }) => guilds_mutation_responsePromiseChain & {
    execute: (
      request: guilds_mutation_responseRequest,
      defaultValue?: guilds_mutation_response | null,
    ) => Promise<guilds_mutation_response | null>
  }
  /** insert data into the table: "image_channels" */
  insert_image_channels: (args: {
    /** the rows to be inserted */
    objects: image_channels_insert_input[]
    /** on conflict condition */
    on_conflict?: image_channels_on_conflict | null
  }) => image_channels_mutation_responsePromiseChain & {
    execute: (
      request: image_channels_mutation_responseRequest,
      defaultValue?: image_channels_mutation_response | null,
    ) => Promise<image_channels_mutation_response | null>
  }
  /** insert data into the table: "image_tags" */
  insert_image_tags: (args: {
    /** the rows to be inserted */
    objects: image_tags_insert_input[]
    /** on conflict condition */
    on_conflict?: image_tags_on_conflict | null
  }) => image_tags_mutation_responsePromiseChain & {
    execute: (
      request: image_tags_mutation_responseRequest,
      defaultValue?: image_tags_mutation_response | null,
    ) => Promise<image_tags_mutation_response | null>
  }
  /** insert data into the table: "images" */
  insert_images: (args: {
    /** the rows to be inserted */
    objects: images_insert_input[]
    /** on conflict condition */
    on_conflict?: images_on_conflict | null
  }) => images_mutation_responsePromiseChain & {
    execute: (
      request: images_mutation_responseRequest,
      defaultValue?: images_mutation_response | null,
    ) => Promise<images_mutation_response | null>
  }
  /** insert data into the table: "tag_counts" */
  insert_tag_counts: (args: {
    /** the rows to be inserted */
    objects: tag_counts_insert_input[]
    /** on conflict condition */
    on_conflict?: tag_counts_on_conflict | null
  }) => tag_counts_mutation_responsePromiseChain & {
    execute: (
      request: tag_counts_mutation_responseRequest,
      defaultValue?: tag_counts_mutation_response | null,
    ) => Promise<tag_counts_mutation_response | null>
  }
  /** insert data into the table: "users" */
  insert_users: (args: {
    /** the rows to be inserted */
    objects: users_insert_input[]
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** update data of the table: "auto_tags" */
  update_auto_tags: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: auto_tags_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: auto_tags_set_input | null
    /** filter the rows which have to be updated */
    where: auto_tags_bool_exp
  }) => auto_tags_mutation_responsePromiseChain & {
    execute: (
      request: auto_tags_mutation_responseRequest,
      defaultValue?: auto_tags_mutation_response | null,
    ) => Promise<auto_tags_mutation_response | null>
  }
  /** update data of the table: "guilds" */
  update_guilds: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: guilds_set_input | null
    /** filter the rows which have to be updated */
    where: guilds_bool_exp
  }) => guilds_mutation_responsePromiseChain & {
    execute: (
      request: guilds_mutation_responseRequest,
      defaultValue?: guilds_mutation_response | null,
    ) => Promise<guilds_mutation_response | null>
  }
  /** update data of the table: "image_channels" */
  update_image_channels: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: image_channels_set_input | null
    /** filter the rows which have to be updated */
    where: image_channels_bool_exp
  }) => image_channels_mutation_responsePromiseChain & {
    execute: (
      request: image_channels_mutation_responseRequest,
      defaultValue?: image_channels_mutation_response | null,
    ) => Promise<image_channels_mutation_response | null>
  }
  /** update data of the table: "image_tags" */
  update_image_tags: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: image_tags_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: image_tags_set_input | null
    /** filter the rows which have to be updated */
    where: image_tags_bool_exp
  }) => image_tags_mutation_responsePromiseChain & {
    execute: (
      request: image_tags_mutation_responseRequest,
      defaultValue?: image_tags_mutation_response | null,
    ) => Promise<image_tags_mutation_response | null>
  }
  /** update data of the table: "images" */
  update_images: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: images_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: images_set_input | null
    /** filter the rows which have to be updated */
    where: images_bool_exp
  }) => images_mutation_responsePromiseChain & {
    execute: (
      request: images_mutation_responseRequest,
      defaultValue?: images_mutation_response | null,
    ) => Promise<images_mutation_response | null>
  }
  /** update data of the table: "tag_counts" */
  update_tag_counts: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: tag_counts_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: tag_counts_set_input | null
    /** filter the rows which have to be updated */
    where: tag_counts_bool_exp
  }) => tag_counts_mutation_responsePromiseChain & {
    execute: (
      request: tag_counts_mutation_responseRequest,
      defaultValue?: tag_counts_mutation_response | null,
    ) => Promise<tag_counts_mutation_response | null>
  }
  /** update data of the table: "users" */
  update_users: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    /** filter the rows which have to be updated */
    where: users_bool_exp
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
}

/** mutation root */
export interface mutation_rootObservableChain {
  /** delete data from the table: "auto_tags" */
  delete_auto_tags: (args: {
    /** filter the rows which have to be deleted */
    where: auto_tags_bool_exp
  }) => auto_tags_mutation_responseObservableChain & {
    execute: (
      request: auto_tags_mutation_responseRequest,
      defaultValue?: auto_tags_mutation_response | null,
    ) => Observable<auto_tags_mutation_response | null>
  }
  /** delete data from the table: "guilds" */
  delete_guilds: (args: {
    /** filter the rows which have to be deleted */
    where: guilds_bool_exp
  }) => guilds_mutation_responseObservableChain & {
    execute: (
      request: guilds_mutation_responseRequest,
      defaultValue?: guilds_mutation_response | null,
    ) => Observable<guilds_mutation_response | null>
  }
  /** delete data from the table: "image_channels" */
  delete_image_channels: (args: {
    /** filter the rows which have to be deleted */
    where: image_channels_bool_exp
  }) => image_channels_mutation_responseObservableChain & {
    execute: (
      request: image_channels_mutation_responseRequest,
      defaultValue?: image_channels_mutation_response | null,
    ) => Observable<image_channels_mutation_response | null>
  }
  /** delete data from the table: "image_tags" */
  delete_image_tags: (args: {
    /** filter the rows which have to be deleted */
    where: image_tags_bool_exp
  }) => image_tags_mutation_responseObservableChain & {
    execute: (
      request: image_tags_mutation_responseRequest,
      defaultValue?: image_tags_mutation_response | null,
    ) => Observable<image_tags_mutation_response | null>
  }
  /** delete data from the table: "images" */
  delete_images: (args: {
    /** filter the rows which have to be deleted */
    where: images_bool_exp
  }) => images_mutation_responseObservableChain & {
    execute: (
      request: images_mutation_responseRequest,
      defaultValue?: images_mutation_response | null,
    ) => Observable<images_mutation_response | null>
  }
  /** delete data from the table: "tag_counts" */
  delete_tag_counts: (args: {
    /** filter the rows which have to be deleted */
    where: tag_counts_bool_exp
  }) => tag_counts_mutation_responseObservableChain & {
    execute: (
      request: tag_counts_mutation_responseRequest,
      defaultValue?: tag_counts_mutation_response | null,
    ) => Observable<tag_counts_mutation_response | null>
  }
  /** delete data from the table: "users" */
  delete_users: (args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** insert data into the table: "auto_tags" */
  insert_auto_tags: (args: {
    /** the rows to be inserted */
    objects: auto_tags_insert_input[]
    /** on conflict condition */
    on_conflict?: auto_tags_on_conflict | null
  }) => auto_tags_mutation_responseObservableChain & {
    execute: (
      request: auto_tags_mutation_responseRequest,
      defaultValue?: auto_tags_mutation_response | null,
    ) => Observable<auto_tags_mutation_response | null>
  }
  /** insert data into the table: "guilds" */
  insert_guilds: (args: {
    /** the rows to be inserted */
    objects: guilds_insert_input[]
    /** on conflict condition */
    on_conflict?: guilds_on_conflict | null
  }) => guilds_mutation_responseObservableChain & {
    execute: (
      request: guilds_mutation_responseRequest,
      defaultValue?: guilds_mutation_response | null,
    ) => Observable<guilds_mutation_response | null>
  }
  /** insert data into the table: "image_channels" */
  insert_image_channels: (args: {
    /** the rows to be inserted */
    objects: image_channels_insert_input[]
    /** on conflict condition */
    on_conflict?: image_channels_on_conflict | null
  }) => image_channels_mutation_responseObservableChain & {
    execute: (
      request: image_channels_mutation_responseRequest,
      defaultValue?: image_channels_mutation_response | null,
    ) => Observable<image_channels_mutation_response | null>
  }
  /** insert data into the table: "image_tags" */
  insert_image_tags: (args: {
    /** the rows to be inserted */
    objects: image_tags_insert_input[]
    /** on conflict condition */
    on_conflict?: image_tags_on_conflict | null
  }) => image_tags_mutation_responseObservableChain & {
    execute: (
      request: image_tags_mutation_responseRequest,
      defaultValue?: image_tags_mutation_response | null,
    ) => Observable<image_tags_mutation_response | null>
  }
  /** insert data into the table: "images" */
  insert_images: (args: {
    /** the rows to be inserted */
    objects: images_insert_input[]
    /** on conflict condition */
    on_conflict?: images_on_conflict | null
  }) => images_mutation_responseObservableChain & {
    execute: (
      request: images_mutation_responseRequest,
      defaultValue?: images_mutation_response | null,
    ) => Observable<images_mutation_response | null>
  }
  /** insert data into the table: "tag_counts" */
  insert_tag_counts: (args: {
    /** the rows to be inserted */
    objects: tag_counts_insert_input[]
    /** on conflict condition */
    on_conflict?: tag_counts_on_conflict | null
  }) => tag_counts_mutation_responseObservableChain & {
    execute: (
      request: tag_counts_mutation_responseRequest,
      defaultValue?: tag_counts_mutation_response | null,
    ) => Observable<tag_counts_mutation_response | null>
  }
  /** insert data into the table: "users" */
  insert_users: (args: {
    /** the rows to be inserted */
    objects: users_insert_input[]
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** update data of the table: "auto_tags" */
  update_auto_tags: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: auto_tags_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: auto_tags_set_input | null
    /** filter the rows which have to be updated */
    where: auto_tags_bool_exp
  }) => auto_tags_mutation_responseObservableChain & {
    execute: (
      request: auto_tags_mutation_responseRequest,
      defaultValue?: auto_tags_mutation_response | null,
    ) => Observable<auto_tags_mutation_response | null>
  }
  /** update data of the table: "guilds" */
  update_guilds: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: guilds_set_input | null
    /** filter the rows which have to be updated */
    where: guilds_bool_exp
  }) => guilds_mutation_responseObservableChain & {
    execute: (
      request: guilds_mutation_responseRequest,
      defaultValue?: guilds_mutation_response | null,
    ) => Observable<guilds_mutation_response | null>
  }
  /** update data of the table: "image_channels" */
  update_image_channels: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: image_channels_set_input | null
    /** filter the rows which have to be updated */
    where: image_channels_bool_exp
  }) => image_channels_mutation_responseObservableChain & {
    execute: (
      request: image_channels_mutation_responseRequest,
      defaultValue?: image_channels_mutation_response | null,
    ) => Observable<image_channels_mutation_response | null>
  }
  /** update data of the table: "image_tags" */
  update_image_tags: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: image_tags_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: image_tags_set_input | null
    /** filter the rows which have to be updated */
    where: image_tags_bool_exp
  }) => image_tags_mutation_responseObservableChain & {
    execute: (
      request: image_tags_mutation_responseRequest,
      defaultValue?: image_tags_mutation_response | null,
    ) => Observable<image_tags_mutation_response | null>
  }
  /** update data of the table: "images" */
  update_images: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: images_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: images_set_input | null
    /** filter the rows which have to be updated */
    where: images_bool_exp
  }) => images_mutation_responseObservableChain & {
    execute: (
      request: images_mutation_responseRequest,
      defaultValue?: images_mutation_response | null,
    ) => Observable<images_mutation_response | null>
  }
  /** update data of the table: "tag_counts" */
  update_tag_counts: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: tag_counts_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: tag_counts_set_input | null
    /** filter the rows which have to be updated */
    where: tag_counts_bool_exp
  }) => tag_counts_mutation_responseObservableChain & {
    execute: (
      request: tag_counts_mutation_responseRequest,
      defaultValue?: tag_counts_mutation_response | null,
    ) => Observable<tag_counts_mutation_response | null>
  }
  /** update data of the table: "users" */
  update_users: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    /** filter the rows which have to be updated */
    where: users_bool_exp
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
}

/** response of any mutation on the table "auto_tags" */
export interface auto_tags_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> }
}

/** response of any mutation on the table "auto_tags" */
export interface auto_tags_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> }
}

/** response of any mutation on the table "guilds" */
export interface guilds_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: guildsRequest, defaultValue?: guilds[]) => Promise<guilds[]> }
}

/** response of any mutation on the table "guilds" */
export interface guilds_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: guildsRequest, defaultValue?: guilds[]) => Observable<guilds[]> }
}

/** response of any mutation on the table "image_channels" */
export interface image_channels_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> }
}

/** response of any mutation on the table "image_channels" */
export interface image_channels_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> }
}

/** response of any mutation on the table "image_tags" */
export interface image_tags_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> }
}

/** response of any mutation on the table "image_tags" */
export interface image_tags_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> }
}

/** response of any mutation on the table "images" */
export interface images_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> }
}

/** response of any mutation on the table "images" */
export interface images_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> }
}

/** response of any mutation on the table "tag_counts" */
export interface tag_counts_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> }
}

/** response of any mutation on the table "tag_counts" */
export interface tag_counts_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> }
}

/** response of any mutation on the table "users" */
export interface users_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }
}

/** response of any mutation on the table "users" */
export interface users_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }
}

/** subscription root */
export interface subscription_rootPromiseChain {
  /** fetch data from the table: "auto_tags" */
  auto_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> }) &
    ({ execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Promise<auto_tags[]> })
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => auto_tags_aggregatePromiseChain & {
    execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Promise<auto_tags_aggregate>
  }) &
    (auto_tags_aggregatePromiseChain & {
      execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Promise<auto_tags_aggregate>
    })
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk: (args: {
    id: Int
  }) => auto_tagsPromiseChain & {
    execute: (request: auto_tagsRequest, defaultValue?: auto_tags | null) => Promise<auto_tags | null>
  }
  /** fetch data from the table: "guilds" */
  guilds: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => { execute: (request: guildsRequest, defaultValue?: guilds[]) => Promise<guilds[]> }) &
    ({ execute: (request: guildsRequest, defaultValue?: guilds[]) => Promise<guilds[]> })
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => guilds_aggregatePromiseChain & {
    execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Promise<guilds_aggregate>
  }) &
    (guilds_aggregatePromiseChain & {
      execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Promise<guilds_aggregate>
    })
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk: (args: {
    guild_id: String
  }) => guildsPromiseChain & { execute: (request: guildsRequest, defaultValue?: guilds | null) => Promise<guilds | null> }
  /** fetch data from the table: "image_channels" */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Promise<image_channels[]> })
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregatePromiseChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Promise<image_channels_aggregate>
  }) &
    (image_channels_aggregatePromiseChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Promise<image_channels_aggregate>
    })
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk: (args: {
    channel_id: String
  }) => image_channelsPromiseChain & {
    execute: (request: image_channelsRequest, defaultValue?: image_channels | null) => Promise<image_channels | null>
  }
  /** fetch data from the table: "image_tags" */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Promise<image_tags[]> })
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregatePromiseChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
  }) &
    (image_tags_aggregatePromiseChain & {
      execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Promise<image_tags_aggregate>
    })
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk: (args: {
    id: Int
  }) => image_tagsPromiseChain & {
    execute: (request: image_tagsRequest, defaultValue?: image_tags | null) => Promise<image_tags | null>
  }
  /** fetch data from the table: "images" */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Promise<images[]> })
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregatePromiseChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
  }) &
    (images_aggregatePromiseChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Promise<images_aggregate>
    })
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk: (args: {
    id: Int
  }) => imagesPromiseChain & { execute: (request: imagesRequest, defaultValue?: images | null) => Promise<images | null> }
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> })
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregatePromiseChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
  }) &
    (tag_counts_aggregatePromiseChain & {
      execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" */
  tag_counts: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Promise<tag_counts[]> })
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregatePromiseChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
  }) &
    (tag_counts_aggregatePromiseChain & {
      execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Promise<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk: (args: {
    name: String
  }) => tag_countsPromiseChain & {
    execute: (request: tag_countsRequest, defaultValue?: tag_counts | null) => Promise<tag_counts | null>
  }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }) &
    ({ execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> })
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregatePromiseChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
  }) &
    (users_aggregatePromiseChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    user_id: String
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** subscription root */
export interface subscription_rootObservableChain {
  /** fetch data from the table: "auto_tags" */
  auto_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => { execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> }) &
    ({ execute: (request: auto_tagsRequest, defaultValue?: auto_tags[]) => Observable<auto_tags[]> })
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: auto_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: auto_tags_order_by[] | null
    /** filter the rows returned */
    where?: auto_tags_bool_exp | null
  }) => auto_tags_aggregateObservableChain & {
    execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Observable<auto_tags_aggregate>
  }) &
    (auto_tags_aggregateObservableChain & {
      execute: (request: auto_tags_aggregateRequest, defaultValue?: auto_tags_aggregate) => Observable<auto_tags_aggregate>
    })
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk: (args: {
    id: Int
  }) => auto_tagsObservableChain & {
    execute: (request: auto_tagsRequest, defaultValue?: auto_tags | null) => Observable<auto_tags | null>
  }
  /** fetch data from the table: "guilds" */
  guilds: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => { execute: (request: guildsRequest, defaultValue?: guilds[]) => Observable<guilds[]> }) &
    ({ execute: (request: guildsRequest, defaultValue?: guilds[]) => Observable<guilds[]> })
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: guilds_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: guilds_order_by[] | null
    /** filter the rows returned */
    where?: guilds_bool_exp | null
  }) => guilds_aggregateObservableChain & {
    execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Observable<guilds_aggregate>
  }) &
    (guilds_aggregateObservableChain & {
      execute: (request: guilds_aggregateRequest, defaultValue?: guilds_aggregate) => Observable<guilds_aggregate>
    })
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk: (args: {
    guild_id: String
  }) => guildsObservableChain & {
    execute: (request: guildsRequest, defaultValue?: guilds | null) => Observable<guilds | null>
  }
  /** fetch data from the table: "image_channels" */
  image_channels: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => { execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> }) &
    ({ execute: (request: image_channelsRequest, defaultValue?: image_channels[]) => Observable<image_channels[]> })
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_channels_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_channels_order_by[] | null
    /** filter the rows returned */
    where?: image_channels_bool_exp | null
  }) => image_channels_aggregateObservableChain & {
    execute: (
      request: image_channels_aggregateRequest,
      defaultValue?: image_channels_aggregate,
    ) => Observable<image_channels_aggregate>
  }) &
    (image_channels_aggregateObservableChain & {
      execute: (
        request: image_channels_aggregateRequest,
        defaultValue?: image_channels_aggregate,
      ) => Observable<image_channels_aggregate>
    })
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk: (args: {
    channel_id: String
  }) => image_channelsObservableChain & {
    execute: (request: image_channelsRequest, defaultValue?: image_channels | null) => Observable<image_channels | null>
  }
  /** fetch data from the table: "image_tags" */
  image_tags: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => { execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> }) &
    ({ execute: (request: image_tagsRequest, defaultValue?: image_tags[]) => Observable<image_tags[]> })
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: image_tags_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: image_tags_order_by[] | null
    /** filter the rows returned */
    where?: image_tags_bool_exp | null
  }) => image_tags_aggregateObservableChain & {
    execute: (request: image_tags_aggregateRequest, defaultValue?: image_tags_aggregate) => Observable<image_tags_aggregate>
  }) &
    (image_tags_aggregateObservableChain & {
      execute: (
        request: image_tags_aggregateRequest,
        defaultValue?: image_tags_aggregate,
      ) => Observable<image_tags_aggregate>
    })
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk: (args: {
    id: Int
  }) => image_tagsObservableChain & {
    execute: (request: image_tagsRequest, defaultValue?: image_tags | null) => Observable<image_tags | null>
  }
  /** fetch data from the table: "images" */
  images: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => { execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> }) &
    ({ execute: (request: imagesRequest, defaultValue?: images[]) => Observable<images[]> })
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: images_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: images_order_by[] | null
    /** filter the rows returned */
    where?: images_bool_exp | null
  }) => images_aggregateObservableChain & {
    execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
  }) &
    (images_aggregateObservableChain & {
      execute: (request: images_aggregateRequest, defaultValue?: images_aggregate) => Observable<images_aggregate>
    })
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk: (args: {
    id: Int
  }) => imagesObservableChain & {
    execute: (request: imagesRequest, defaultValue?: images | null) => Observable<images | null>
  }
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> })
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregateObservableChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Observable<tag_counts_aggregate>
  }) &
    (tag_counts_aggregateObservableChain & {
      execute: (
        request: tag_counts_aggregateRequest,
        defaultValue?: tag_counts_aggregate,
      ) => Observable<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" */
  tag_counts: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => { execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> }) &
    ({ execute: (request: tag_countsRequest, defaultValue?: tag_counts[]) => Observable<tag_counts[]> })
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: tag_counts_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: tag_counts_order_by[] | null
    /** filter the rows returned */
    where?: tag_counts_bool_exp | null
  }) => tag_counts_aggregateObservableChain & {
    execute: (request: tag_counts_aggregateRequest, defaultValue?: tag_counts_aggregate) => Observable<tag_counts_aggregate>
  }) &
    (tag_counts_aggregateObservableChain & {
      execute: (
        request: tag_counts_aggregateRequest,
        defaultValue?: tag_counts_aggregate,
      ) => Observable<tag_counts_aggregate>
    })
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk: (args: {
    name: String
  }) => tag_countsObservableChain & {
    execute: (request: tag_countsRequest, defaultValue?: tag_counts | null) => Observable<tag_counts | null>
  }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }) &
    ({ execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> })
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregateObservableChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
  }) &
    (users_aggregateObservableChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    user_id: String
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}
