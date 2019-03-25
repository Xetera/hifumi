type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = "ignore",
  /** update the row with the given values */
  Update = "update"
}

/** columns and relationships of "guilds" */
export type Guilds = {
  enabled: Scalars["Boolean"];
  guild_id: Scalars["String"];
  id: Scalars["Int"];
  /** An array relationship */
  image_channels_by_guild_id: Array<Image_Channels>;
  /** An aggregated array relationship */
  image_channels_by_guild_id_aggregate: Image_Channels_Aggregate;
  /** An array relationship */
  images_by_guild_id: Array<Images>;
  /** An aggregated array relationship */
  images_by_guild_id_aggregate: Images_Aggregate;
  name: Scalars["String"];
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "guilds" */
export type GuildsImage_Channels_By_Guild_IdArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** columns and relationships of "guilds" */
export type GuildsImage_Channels_By_Guild_Id_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** columns and relationships of "guilds" */
export type GuildsImages_By_Guild_IdArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** columns and relationships of "guilds" */
export type GuildsImages_By_Guild_Id_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** aggregated selection of "guilds" */
export type Guilds_Aggregate = {
  aggregate?: Maybe<Guilds_Aggregate_Fields>;
  nodes: Array<Guilds>;
};

/** aggregate fields of "guilds" */
export type Guilds_Aggregate_Fields = {
  avg?: Maybe<Guilds_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Guilds_Max_Fields>;
  min?: Maybe<Guilds_Min_Fields>;
  stddev?: Maybe<Guilds_Stddev_Fields>;
  stddev_pop?: Maybe<Guilds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Guilds_Stddev_Samp_Fields>;
  sum?: Maybe<Guilds_Sum_Fields>;
  var_pop?: Maybe<Guilds_Var_Pop_Fields>;
  var_samp?: Maybe<Guilds_Var_Samp_Fields>;
  variance?: Maybe<Guilds_Variance_Fields>;
};

/** aggregate fields of "guilds" */
export type Guilds_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guilds_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "guilds" */
export type Guilds_Aggregate_Order_By = {
  avg?: Maybe<Guilds_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Guilds_Max_Order_By>;
  min?: Maybe<Guilds_Min_Order_By>;
  stddev?: Maybe<Guilds_Stddev_Order_By>;
  stddev_pop?: Maybe<Guilds_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Guilds_Stddev_Samp_Order_By>;
  sum?: Maybe<Guilds_Sum_Order_By>;
  var_pop?: Maybe<Guilds_Var_Pop_Order_By>;
  var_samp?: Maybe<Guilds_Var_Samp_Order_By>;
  variance?: Maybe<Guilds_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "guilds" */
export type Guilds_Arr_Rel_Insert_Input = {
  data: Array<Guilds_Insert_Input>;
  on_conflict?: Maybe<Guilds_On_Conflict>;
};

/** aggregate avg on columns */
export type Guilds_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "guilds" */
export type Guilds_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "guilds". All fields are combined with a logical 'AND'. */
export type Guilds_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Guilds_Bool_Exp>>>;
  _not?: Maybe<Guilds_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Guilds_Bool_Exp>>>;
  enabled?: Maybe<Boolean_Comparison_Exp>;
  guild_id?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  image_channels_by_guild_id?: Maybe<Image_Channels_Bool_Exp>;
  images_by_guild_id?: Maybe<Images_Bool_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  welcome_channel?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "guilds" */
export enum Guilds_Constraint {
  /** unique or primary key constraint */
  Guilds_Guild_Id_Key = "guilds_guild_id_key",
  /** unique or primary key constraint */
  Guilds_Id_Key = "guilds_id_key",
  /** unique or primary key constraint */
  Guilds_Pkey = "guilds_pkey"
}

/** input type for incrementing integer columne in table "guilds" */
export type Guilds_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "guilds" */
export type Guilds_Insert_Input = {
  enabled?: Maybe<Scalars["Boolean"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  image_channels_by_guild_id?: Maybe<Image_Channels_Arr_Rel_Insert_Input>;
  images_by_guild_id?: Maybe<Images_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Guilds_Max_Fields = {
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "guilds" */
export type Guilds_Max_Order_By = {
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  welcome_channel?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guilds_Min_Fields = {
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "guilds" */
export type Guilds_Min_Order_By = {
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  welcome_channel?: Maybe<Order_By>;
};

/** response of any mutation on the table "guilds" */
export type Guilds_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Guilds>;
};

/** input type for inserting object relation for remote table "guilds" */
export type Guilds_Obj_Rel_Insert_Input = {
  data: Guilds_Insert_Input;
  on_conflict?: Maybe<Guilds_On_Conflict>;
};

/** on conflict condition type for table "guilds" */
export type Guilds_On_Conflict = {
  constraint: Guilds_Constraint;
  update_columns: Array<Guilds_Update_Column>;
};

/** ordering options when selecting data from "guilds" */
export type Guilds_Order_By = {
  enabled?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_channels_by_guild_id_aggregate?: Maybe<
    Image_Channels_Aggregate_Order_By
  >;
  images_by_guild_id_aggregate?: Maybe<Images_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  welcome_channel?: Maybe<Order_By>;
};

/** select columns of table "guilds" */
export enum Guilds_Select_Column {
  /** column name */
  Enabled = "enabled",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Welcome_Channel = "welcome_channel"
}

/** input type for updating data in table "guilds" */
export type Guilds_Set_Input = {
  enabled?: Maybe<Scalars["Boolean"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Guilds_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "guilds" */
export type Guilds_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Guilds_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "guilds" */
export type Guilds_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Guilds_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "guilds" */
export type Guilds_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Guilds_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "guilds" */
export type Guilds_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "guilds" */
export enum Guilds_Update_Column {
  /** column name */
  Enabled = "enabled",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Welcome_Channel = "welcome_channel"
}

/** aggregate var_pop on columns */
export type Guilds_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "guilds" */
export type Guilds_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Guilds_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "guilds" */
export type Guilds_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Guilds_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "guilds" */
export type Guilds_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "image_channels" */
export type Image_Channels = {
  channel_id: Scalars["String"];
  guild_id: Scalars["String"];
  /** An object relationship */
  guilds_by_guild_id: Guilds;
  id: Scalars["Int"];
  user_id: Scalars["String"];
  /** An object relationship */
  users_by_user_id: Users;
};

/** aggregated selection of "image_channels" */
export type Image_Channels_Aggregate = {
  aggregate?: Maybe<Image_Channels_Aggregate_Fields>;
  nodes: Array<Image_Channels>;
};

/** aggregate fields of "image_channels" */
export type Image_Channels_Aggregate_Fields = {
  avg?: Maybe<Image_Channels_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Image_Channels_Max_Fields>;
  min?: Maybe<Image_Channels_Min_Fields>;
  stddev?: Maybe<Image_Channels_Stddev_Fields>;
  stddev_pop?: Maybe<Image_Channels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Image_Channels_Stddev_Samp_Fields>;
  sum?: Maybe<Image_Channels_Sum_Fields>;
  var_pop?: Maybe<Image_Channels_Var_Pop_Fields>;
  var_samp?: Maybe<Image_Channels_Var_Samp_Fields>;
  variance?: Maybe<Image_Channels_Variance_Fields>;
};

/** aggregate fields of "image_channels" */
export type Image_Channels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Image_Channels_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "image_channels" */
export type Image_Channels_Aggregate_Order_By = {
  avg?: Maybe<Image_Channels_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Image_Channels_Max_Order_By>;
  min?: Maybe<Image_Channels_Min_Order_By>;
  stddev?: Maybe<Image_Channels_Stddev_Order_By>;
  stddev_pop?: Maybe<Image_Channels_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Image_Channels_Stddev_Samp_Order_By>;
  sum?: Maybe<Image_Channels_Sum_Order_By>;
  var_pop?: Maybe<Image_Channels_Var_Pop_Order_By>;
  var_samp?: Maybe<Image_Channels_Var_Samp_Order_By>;
  variance?: Maybe<Image_Channels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "image_channels" */
export type Image_Channels_Arr_Rel_Insert_Input = {
  data: Array<Image_Channels_Insert_Input>;
  on_conflict?: Maybe<Image_Channels_On_Conflict>;
};

/** aggregate avg on columns */
export type Image_Channels_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "image_channels" */
export type Image_Channels_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "image_channels". All fields are combined with a logical 'AND'. */
export type Image_Channels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Image_Channels_Bool_Exp>>>;
  _not?: Maybe<Image_Channels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Image_Channels_Bool_Exp>>>;
  channel_id?: Maybe<Text_Comparison_Exp>;
  guild_id?: Maybe<Text_Comparison_Exp>;
  guilds_by_guild_id?: Maybe<Guilds_Bool_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  user_id?: Maybe<Text_Comparison_Exp>;
  users_by_user_id?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "image_channels" */
export enum Image_Channels_Constraint {
  /** unique or primary key constraint */
  Image_Channels_Guild_Id_Key = "image_channels_guild_id_key",
  /** unique or primary key constraint */
  Image_Channels_Pkey = "image_channels_pkey"
}

/** input type for incrementing integer columne in table "image_channels" */
export type Image_Channels_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "image_channels" */
export type Image_Channels_Insert_Input = {
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  guilds_by_guild_id?: Maybe<Guilds_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
  users_by_user_id?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Image_Channels_Max_Fields = {
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "image_channels" */
export type Image_Channels_Max_Order_By = {
  channel_id?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Image_Channels_Min_Fields = {
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "image_channels" */
export type Image_Channels_Min_Order_By = {
  channel_id?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "image_channels" */
export type Image_Channels_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Image_Channels>;
};

/** input type for inserting object relation for remote table "image_channels" */
export type Image_Channels_Obj_Rel_Insert_Input = {
  data: Image_Channels_Insert_Input;
  on_conflict?: Maybe<Image_Channels_On_Conflict>;
};

/** on conflict condition type for table "image_channels" */
export type Image_Channels_On_Conflict = {
  constraint: Image_Channels_Constraint;
  update_columns: Array<Image_Channels_Update_Column>;
};

/** ordering options when selecting data from "image_channels" */
export type Image_Channels_Order_By = {
  channel_id?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  guilds_by_guild_id?: Maybe<Guilds_Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  users_by_user_id?: Maybe<Users_Order_By>;
};

/** select columns of table "image_channels" */
export enum Image_Channels_Select_Column {
  /** column name */
  Channel_Id = "channel_id",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  User_Id = "user_id"
}

/** input type for updating data in table "image_channels" */
export type Image_Channels_Set_Input = {
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Image_Channels_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "image_channels" */
export type Image_Channels_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Image_Channels_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "image_channels" */
export type Image_Channels_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Image_Channels_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "image_channels" */
export type Image_Channels_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Image_Channels_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "image_channels" */
export type Image_Channels_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "image_channels" */
export enum Image_Channels_Update_Column {
  /** column name */
  Channel_Id = "channel_id",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  User_Id = "user_id"
}

/** aggregate var_pop on columns */
export type Image_Channels_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "image_channels" */
export type Image_Channels_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Image_Channels_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "image_channels" */
export type Image_Channels_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Image_Channels_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "image_channels" */
export type Image_Channels_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "image_tags" */
export type Image_Tags = {
  id: Scalars["Int"];
  image_id?: Maybe<Scalars["Int"]>;
  /** An object relationship */
  images_by_image_id?: Maybe<Images>;
  name: Scalars["String"];
  user_id: Scalars["String"];
  /** An object relationship */
  users_by_user_id: Users;
};

/** aggregated selection of "image_tags" */
export type Image_Tags_Aggregate = {
  aggregate?: Maybe<Image_Tags_Aggregate_Fields>;
  nodes: Array<Image_Tags>;
};

/** aggregate fields of "image_tags" */
export type Image_Tags_Aggregate_Fields = {
  avg?: Maybe<Image_Tags_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Image_Tags_Max_Fields>;
  min?: Maybe<Image_Tags_Min_Fields>;
  stddev?: Maybe<Image_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Image_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Image_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Image_Tags_Sum_Fields>;
  var_pop?: Maybe<Image_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Image_Tags_Var_Samp_Fields>;
  variance?: Maybe<Image_Tags_Variance_Fields>;
};

/** aggregate fields of "image_tags" */
export type Image_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Image_Tags_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "image_tags" */
export type Image_Tags_Aggregate_Order_By = {
  avg?: Maybe<Image_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Image_Tags_Max_Order_By>;
  min?: Maybe<Image_Tags_Min_Order_By>;
  stddev?: Maybe<Image_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Image_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Image_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Image_Tags_Sum_Order_By>;
  var_pop?: Maybe<Image_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Image_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Image_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "image_tags" */
export type Image_Tags_Arr_Rel_Insert_Input = {
  data: Array<Image_Tags_Insert_Input>;
  on_conflict?: Maybe<Image_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Image_Tags_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "image_tags" */
export type Image_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "image_tags". All fields are combined with a logical 'AND'. */
export type Image_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Image_Tags_Bool_Exp>>>;
  _not?: Maybe<Image_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Image_Tags_Bool_Exp>>>;
  id?: Maybe<Integer_Comparison_Exp>;
  image_id?: Maybe<Integer_Comparison_Exp>;
  images_by_image_id?: Maybe<Images_Bool_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  user_id?: Maybe<Text_Comparison_Exp>;
  users_by_user_id?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "image_tags" */
export enum Image_Tags_Constraint {
  /** unique or primary key constraint */
  Image_Tags_Pkey = "image_tags_pkey"
}

/** input type for incrementing integer columne in table "image_tags" */
export type Image_Tags_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "image_tags" */
export type Image_Tags_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  images_by_image_id?: Maybe<Images_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
  users_by_user_id?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Image_Tags_Max_Fields = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "image_tags" */
export type Image_Tags_Max_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Image_Tags_Min_Fields = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "image_tags" */
export type Image_Tags_Min_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "image_tags" */
export type Image_Tags_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Image_Tags>;
};

/** input type for inserting object relation for remote table "image_tags" */
export type Image_Tags_Obj_Rel_Insert_Input = {
  data: Image_Tags_Insert_Input;
  on_conflict?: Maybe<Image_Tags_On_Conflict>;
};

/** on conflict condition type for table "image_tags" */
export type Image_Tags_On_Conflict = {
  constraint: Image_Tags_Constraint;
  update_columns: Array<Image_Tags_Update_Column>;
};

/** ordering options when selecting data from "image_tags" */
export type Image_Tags_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  images_by_image_id?: Maybe<Images_Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  users_by_user_id?: Maybe<Users_Order_By>;
};

/** select columns of table "image_tags" */
export enum Image_Tags_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Image_Id = "image_id",
  /** column name */
  Name = "name",
  /** column name */
  User_Id = "user_id"
}

/** input type for updating data in table "image_tags" */
export type Image_Tags_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Image_Tags_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "image_tags" */
export type Image_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Image_Tags_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "image_tags" */
export type Image_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Image_Tags_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "image_tags" */
export type Image_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Image_Tags_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "image_tags" */
export type Image_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** update columns of table "image_tags" */
export enum Image_Tags_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Image_Id = "image_id",
  /** column name */
  Name = "name",
  /** column name */
  User_Id = "user_id"
}

/** aggregate var_pop on columns */
export type Image_Tags_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "image_tags" */
export type Image_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Image_Tags_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "image_tags" */
export type Image_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Image_Tags_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "image_tags" */
export type Image_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** columns and relationships of "images" */
export type Images = {
  file_name?: Maybe<Scalars["String"]>;
  guild_id: Scalars["String"];
  /** An object relationship */
  guilds_by_guild_id: Guilds;
  id: Scalars["Int"];
  message_id?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  avg?: Maybe<Images_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
  stddev?: Maybe<Images_Stddev_Fields>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Fields>;
  sum?: Maybe<Images_Sum_Fields>;
  var_pop?: Maybe<Images_Var_Pop_Fields>;
  var_samp?: Maybe<Images_Var_Samp_Fields>;
  variance?: Maybe<Images_Variance_Fields>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Images_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "images" */
export type Images_Aggregate_Order_By = {
  avg?: Maybe<Images_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Images_Max_Order_By>;
  min?: Maybe<Images_Min_Order_By>;
  stddev?: Maybe<Images_Stddev_Order_By>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Order_By>;
  sum?: Maybe<Images_Sum_Order_By>;
  var_pop?: Maybe<Images_Var_Pop_Order_By>;
  var_samp?: Maybe<Images_Var_Samp_Order_By>;
  variance?: Maybe<Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "images" */
export type Images_Arr_Rel_Insert_Input = {
  data: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** aggregate avg on columns */
export type Images_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "images" */
export type Images_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Images_Bool_Exp>>>;
  _not?: Maybe<Images_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Images_Bool_Exp>>>;
  file_name?: Maybe<Text_Comparison_Exp>;
  guild_id?: Maybe<Text_Comparison_Exp>;
  guilds_by_guild_id?: Maybe<Guilds_Bool_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  message_id?: Maybe<Text_Comparison_Exp>;
  url?: Maybe<Text_Comparison_Exp>;
  user_id?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint */
  Images_Message_Id_Key = "images_message_id_key",
  /** unique or primary key constraint */
  Images_Pkey = "images_pkey"
}

/** input type for incrementing integer columne in table "images" */
export type Images_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  guilds_by_guild_id?: Maybe<Guilds_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "images" */
export type Images_Max_Order_By = {
  file_name?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "images" */
export type Images_Min_Order_By = {
  file_name?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** on conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns: Array<Images_Update_Column>;
};

/** ordering options when selecting data from "images" */
export type Images_Order_By = {
  file_name?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  guilds_by_guild_id?: Maybe<Guilds_Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  File_Name = "file_name",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  Message_Id = "message_id",
  /** column name */
  Url = "url",
  /** column name */
  User_Id = "user_id"
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Images_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "images" */
export type Images_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Images_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "images" */
export type Images_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Images_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "images" */
export type Images_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Images_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "images" */
export type Images_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  File_Name = "file_name",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  Message_Id = "message_id",
  /** column name */
  Url = "url",
  /** column name */
  User_Id = "user_id"
}

/** aggregate var_pop on columns */
export type Images_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "images" */
export type Images_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Images_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "images" */
export type Images_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Images_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "images" */
export type Images_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "guilds" */
  delete_guilds?: Maybe<Guilds_Mutation_Response>;
  /** delete data from the table: "image_channels" */
  delete_image_channels?: Maybe<Image_Channels_Mutation_Response>;
  /** delete data from the table: "image_tags" */
  delete_image_tags?: Maybe<Image_Tags_Mutation_Response>;
  /** delete data from the table: "images" */
  delete_images?: Maybe<Images_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "guilds" */
  insert_guilds?: Maybe<Guilds_Mutation_Response>;
  /** insert data into the table: "image_channels" */
  insert_image_channels?: Maybe<Image_Channels_Mutation_Response>;
  /** insert data into the table: "image_tags" */
  insert_image_tags?: Maybe<Image_Tags_Mutation_Response>;
  /** insert data into the table: "images" */
  insert_images?: Maybe<Images_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "guilds" */
  update_guilds?: Maybe<Guilds_Mutation_Response>;
  /** update data of the table: "image_channels" */
  update_image_channels?: Maybe<Image_Channels_Mutation_Response>;
  /** update data of the table: "image_tags" */
  update_image_tags?: Maybe<Image_Tags_Mutation_Response>;
  /** update data of the table: "images" */
  update_images?: Maybe<Images_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_GuildsArgs = {
  where: Guilds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Image_ChannelsArgs = {
  where: Image_Channels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Image_TagsArgs = {
  where: Image_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ImagesArgs = {
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_GuildsArgs = {
  objects: Array<Guilds_Insert_Input>;
  on_conflict?: Maybe<Guilds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Image_ChannelsArgs = {
  objects: Array<Image_Channels_Insert_Input>;
  on_conflict?: Maybe<Image_Channels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Image_TagsArgs = {
  objects: Array<Image_Tags_Insert_Input>;
  on_conflict?: Maybe<Image_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_GuildsArgs = {
  _inc?: Maybe<Guilds_Inc_Input>;
  _set?: Maybe<Guilds_Set_Input>;
  where: Guilds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Image_ChannelsArgs = {
  _inc?: Maybe<Image_Channels_Inc_Input>;
  _set?: Maybe<Image_Channels_Set_Input>;
  where: Image_Channels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Image_TagsArgs = {
  _inc?: Maybe<Image_Tags_Inc_Input>;
  _set?: Maybe<Image_Tags_Set_Input>;
  where: Image_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ImagesArgs = {
  _inc?: Maybe<Images_Inc_Input>;
  _set?: Maybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  Asc_Nulls_First = "asc_nulls_first",
  /** in the ascending order, nulls last */
  Asc_Nulls_Last = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  Desc_Nulls_First = "desc_nulls_first",
  /** in the descending order, nulls last */
  Desc_Nulls_Last = "desc_nulls_last"
}

/** query root */
export type Query_Root = {
  /** fetch data from the table: "guilds" */
  guilds: Array<Guilds>;
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: Guilds_Aggregate;
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk?: Maybe<Guilds>;
  /** fetch data from the table: "image_channels" */
  image_channels: Array<Image_Channels>;
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: Image_Channels_Aggregate;
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk?: Maybe<Image_Channels>;
  /** fetch data from the table: "image_tags" */
  image_tags: Array<Image_Tags>;
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: Image_Tags_Aggregate;
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk?: Maybe<Image_Tags>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootGuildsArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** query root */
export type Query_RootGuilds_AggregateArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** query root */
export type Query_RootGuilds_By_PkArgs = {
  guild_id: Scalars["String"];
  id: Scalars["Int"];
};

/** query root */
export type Query_RootImage_ChannelsArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Channels_By_PkArgs = {
  channel_id: Scalars["String"];
  id: Scalars["Int"];
};

/** query root */
export type Query_RootImage_TagsArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Tags_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** query root */
export type Query_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** query root */
export type Query_RootImages_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars["Int"];
  user_id: Scalars["String"];
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "guilds" */
  guilds: Array<Guilds>;
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: Guilds_Aggregate;
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk?: Maybe<Guilds>;
  /** fetch data from the table: "image_channels" */
  image_channels: Array<Image_Channels>;
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: Image_Channels_Aggregate;
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk?: Maybe<Image_Channels>;
  /** fetch data from the table: "image_tags" */
  image_tags: Array<Image_Tags>;
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: Image_Tags_Aggregate;
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk?: Maybe<Image_Tags>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootGuildsArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGuilds_AggregateArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGuilds_By_PkArgs = {
  guild_id: Scalars["String"];
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootImage_ChannelsArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Channels_By_PkArgs = {
  channel_id: Scalars["String"];
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootImage_TagsArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Tags_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImages_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["Int"];
  user_id: Scalars["String"];
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type Users = {
  avatar?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name: Scalars["String"];
  user_id: Scalars["String"];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  avatar?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  user_id?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  Users_Id_Key = "users_id_key",
  /** unique or primary key constraint */
  Users_Pkey = "users_pkey",
  /** unique or primary key constraint */
  Users_User_Id_Key = "users_user_id_key"
}

/** input type for incrementing integer columne in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  User_Id = "user_id"
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  User_Id = "user_id"
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

import { GraphQLResolveInfo } from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type GuildsResolvers<Context = any, ParentType = Guilds> = {
  enabled?: Resolver<Scalars["Boolean"], ParentType, Context>;
  guild_id?: Resolver<Scalars["String"], ParentType, Context>;
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  image_channels_by_guild_id?: Resolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    GuildsImage_Channels_By_Guild_IdArgs
  >;
  image_channels_by_guild_id_aggregate?: Resolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    GuildsImage_Channels_By_Guild_Id_AggregateArgs
  >;
  images_by_guild_id?: Resolver<
    Array<Images>,
    ParentType,
    Context,
    GuildsImages_By_Guild_IdArgs
  >;
  images_by_guild_id_aggregate?: Resolver<
    Images_Aggregate,
    ParentType,
    Context,
    GuildsImages_By_Guild_Id_AggregateArgs
  >;
  name?: Resolver<Scalars["String"], ParentType, Context>;
  welcome_channel?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Guilds_AggregateResolvers<
  Context = any,
  ParentType = Guilds_Aggregate
> = {
  aggregate?: Resolver<Maybe<Guilds_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Guilds>, ParentType, Context>;
};

export type Guilds_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Guilds_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Guilds_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Guilds_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Guilds_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Guilds_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<Maybe<Guilds_Stddev_Pop_Fields>, ParentType, Context>;
  stddev_samp?: Resolver<Maybe<Guilds_Stddev_Samp_Fields>, ParentType, Context>;
  sum?: Resolver<Maybe<Guilds_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Guilds_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Guilds_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Guilds_Variance_Fields>, ParentType, Context>;
};

export type Guilds_Avg_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Guilds_Max_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Max_Fields
> = {
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  welcome_channel?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Guilds_Min_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Min_Fields
> = {
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  welcome_channel?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Guilds_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Guilds_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Guilds>, ParentType, Context>;
};

export type Guilds_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Guilds_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Guilds_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Guilds_Sum_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Guilds_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Guilds_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Guilds_Variance_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_ChannelsResolvers<
  Context = any,
  ParentType = Image_Channels
> = {
  channel_id?: Resolver<Scalars["String"], ParentType, Context>;
  guild_id?: Resolver<Scalars["String"], ParentType, Context>;
  guilds_by_guild_id?: Resolver<Guilds, ParentType, Context>;
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  user_id?: Resolver<Scalars["String"], ParentType, Context>;
  users_by_user_id?: Resolver<Users, ParentType, Context>;
};

export type Image_Channels_AggregateResolvers<
  Context = any,
  ParentType = Image_Channels_Aggregate
> = {
  aggregate?: Resolver<
    Maybe<Image_Channels_Aggregate_Fields>,
    ParentType,
    Context
  >;
  nodes?: Resolver<Array<Image_Channels>, ParentType, Context>;
};

export type Image_Channels_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Image_Channels_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Image_Channels_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Image_Channels_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Image_Channels_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Image_Channels_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<
    Maybe<Image_Channels_Stddev_Pop_Fields>,
    ParentType,
    Context
  >;
  stddev_samp?: Resolver<
    Maybe<Image_Channels_Stddev_Samp_Fields>,
    ParentType,
    Context
  >;
  sum?: Resolver<Maybe<Image_Channels_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Image_Channels_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<
    Maybe<Image_Channels_Var_Samp_Fields>,
    ParentType,
    Context
  >;
  variance?: Resolver<
    Maybe<Image_Channels_Variance_Fields>,
    ParentType,
    Context
  >;
};

export type Image_Channels_Avg_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Channels_Max_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Max_Fields
> = {
  channel_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Channels_Min_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Min_Fields
> = {
  channel_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Channels_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Image_Channels_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Image_Channels>, ParentType, Context>;
};

export type Image_Channels_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Channels_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Channels_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Channels_Sum_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Image_Channels_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Channels_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Channels_Variance_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_TagsResolvers<Context = any, ParentType = Image_Tags> = {
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  images_by_image_id?: Resolver<Maybe<Images>, ParentType, Context>;
  name?: Resolver<Scalars["String"], ParentType, Context>;
  user_id?: Resolver<Scalars["String"], ParentType, Context>;
  users_by_user_id?: Resolver<Users, ParentType, Context>;
};

export type Image_Tags_AggregateResolvers<
  Context = any,
  ParentType = Image_Tags_Aggregate
> = {
  aggregate?: Resolver<Maybe<Image_Tags_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Image_Tags>, ParentType, Context>;
};

export type Image_Tags_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Image_Tags_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Image_Tags_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Image_Tags_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Image_Tags_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Image_Tags_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<
    Maybe<Image_Tags_Stddev_Pop_Fields>,
    ParentType,
    Context
  >;
  stddev_samp?: Resolver<
    Maybe<Image_Tags_Stddev_Samp_Fields>,
    ParentType,
    Context
  >;
  sum?: Resolver<Maybe<Image_Tags_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Image_Tags_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Image_Tags_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Image_Tags_Variance_Fields>, ParentType, Context>;
};

export type Image_Tags_Avg_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Max_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Max_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Tags_Min_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Min_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Tags_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Image_Tags_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Image_Tags>, ParentType, Context>;
};

export type Image_Tags_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Sum_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Image_Tags_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Variance_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type ImagesResolvers<Context = any, ParentType = Images> = {
  file_name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Scalars["String"], ParentType, Context>;
  guilds_by_guild_id?: Resolver<Guilds, ParentType, Context>;
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  message_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url?: Resolver<Scalars["String"], ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Images_AggregateResolvers<
  Context = any,
  ParentType = Images_Aggregate
> = {
  aggregate?: Resolver<Maybe<Images_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Images>, ParentType, Context>;
};

export type Images_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Images_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Images_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Images_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Images_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Images_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Images_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<Maybe<Images_Stddev_Pop_Fields>, ParentType, Context>;
  stddev_samp?: Resolver<Maybe<Images_Stddev_Samp_Fields>, ParentType, Context>;
  sum?: Resolver<Maybe<Images_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Images_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Images_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Images_Variance_Fields>, ParentType, Context>;
};

export type Images_Avg_FieldsResolvers<
  Context = any,
  ParentType = Images_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Max_FieldsResolvers<
  Context = any,
  ParentType = Images_Max_Fields
> = {
  file_name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  message_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Images_Min_FieldsResolvers<
  Context = any,
  ParentType = Images_Min_Fields
> = {
  file_name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  message_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Images_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Images_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Images>, ParentType, Context>;
};

export type Images_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Images_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Images_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Images_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Sum_FieldsResolvers<
  Context = any,
  ParentType = Images_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Images_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Images_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Images_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Variance_FieldsResolvers<
  Context = any,
  ParentType = Images_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Mutation_RootResolvers<
  Context = any,
  ParentType = Mutation_Root
> = {
  delete_guilds?: Resolver<
    Maybe<Guilds_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_GuildsArgs
  >;
  delete_image_channels?: Resolver<
    Maybe<Image_Channels_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_Image_ChannelsArgs
  >;
  delete_image_tags?: Resolver<
    Maybe<Image_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_Image_TagsArgs
  >;
  delete_images?: Resolver<
    Maybe<Images_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_ImagesArgs
  >;
  delete_users?: Resolver<
    Maybe<Users_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_UsersArgs
  >;
  insert_guilds?: Resolver<
    Maybe<Guilds_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_GuildsArgs
  >;
  insert_image_channels?: Resolver<
    Maybe<Image_Channels_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_Image_ChannelsArgs
  >;
  insert_image_tags?: Resolver<
    Maybe<Image_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_Image_TagsArgs
  >;
  insert_images?: Resolver<
    Maybe<Images_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_ImagesArgs
  >;
  insert_users?: Resolver<
    Maybe<Users_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_UsersArgs
  >;
  update_guilds?: Resolver<
    Maybe<Guilds_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_GuildsArgs
  >;
  update_image_channels?: Resolver<
    Maybe<Image_Channels_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_Image_ChannelsArgs
  >;
  update_image_tags?: Resolver<
    Maybe<Image_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_Image_TagsArgs
  >;
  update_images?: Resolver<
    Maybe<Images_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_ImagesArgs
  >;
  update_users?: Resolver<
    Maybe<Users_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_UsersArgs
  >;
};

export type Query_RootResolvers<Context = any, ParentType = Query_Root> = {
  guilds?: Resolver<Array<Guilds>, ParentType, Context, Query_RootGuildsArgs>;
  guilds_aggregate?: Resolver<
    Guilds_Aggregate,
    ParentType,
    Context,
    Query_RootGuilds_AggregateArgs
  >;
  guilds_by_pk?: Resolver<
    Maybe<Guilds>,
    ParentType,
    Context,
    Query_RootGuilds_By_PkArgs
  >;
  image_channels?: Resolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    Query_RootImage_ChannelsArgs
  >;
  image_channels_aggregate?: Resolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    Query_RootImage_Channels_AggregateArgs
  >;
  image_channels_by_pk?: Resolver<
    Maybe<Image_Channels>,
    ParentType,
    Context,
    Query_RootImage_Channels_By_PkArgs
  >;
  image_tags?: Resolver<
    Array<Image_Tags>,
    ParentType,
    Context,
    Query_RootImage_TagsArgs
  >;
  image_tags_aggregate?: Resolver<
    Image_Tags_Aggregate,
    ParentType,
    Context,
    Query_RootImage_Tags_AggregateArgs
  >;
  image_tags_by_pk?: Resolver<
    Maybe<Image_Tags>,
    ParentType,
    Context,
    Query_RootImage_Tags_By_PkArgs
  >;
  images?: Resolver<Array<Images>, ParentType, Context, Query_RootImagesArgs>;
  images_aggregate?: Resolver<
    Images_Aggregate,
    ParentType,
    Context,
    Query_RootImages_AggregateArgs
  >;
  images_by_pk?: Resolver<
    Maybe<Images>,
    ParentType,
    Context,
    Query_RootImages_By_PkArgs
  >;
  users?: Resolver<Array<Users>, ParentType, Context, Query_RootUsersArgs>;
  users_aggregate?: Resolver<
    Users_Aggregate,
    ParentType,
    Context,
    Query_RootUsers_AggregateArgs
  >;
  users_by_pk?: Resolver<
    Maybe<Users>,
    ParentType,
    Context,
    Query_RootUsers_By_PkArgs
  >;
};

export type Subscription_RootResolvers<
  Context = any,
  ParentType = Subscription_Root
> = {
  guilds?: SubscriptionResolver<
    Array<Guilds>,
    ParentType,
    Context,
    Subscription_RootGuildsArgs
  >;
  guilds_aggregate?: SubscriptionResolver<
    Guilds_Aggregate,
    ParentType,
    Context,
    Subscription_RootGuilds_AggregateArgs
  >;
  guilds_by_pk?: SubscriptionResolver<
    Maybe<Guilds>,
    ParentType,
    Context,
    Subscription_RootGuilds_By_PkArgs
  >;
  image_channels?: SubscriptionResolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    Subscription_RootImage_ChannelsArgs
  >;
  image_channels_aggregate?: SubscriptionResolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    Subscription_RootImage_Channels_AggregateArgs
  >;
  image_channels_by_pk?: SubscriptionResolver<
    Maybe<Image_Channels>,
    ParentType,
    Context,
    Subscription_RootImage_Channels_By_PkArgs
  >;
  image_tags?: SubscriptionResolver<
    Array<Image_Tags>,
    ParentType,
    Context,
    Subscription_RootImage_TagsArgs
  >;
  image_tags_aggregate?: SubscriptionResolver<
    Image_Tags_Aggregate,
    ParentType,
    Context,
    Subscription_RootImage_Tags_AggregateArgs
  >;
  image_tags_by_pk?: SubscriptionResolver<
    Maybe<Image_Tags>,
    ParentType,
    Context,
    Subscription_RootImage_Tags_By_PkArgs
  >;
  images?: SubscriptionResolver<
    Array<Images>,
    ParentType,
    Context,
    Subscription_RootImagesArgs
  >;
  images_aggregate?: SubscriptionResolver<
    Images_Aggregate,
    ParentType,
    Context,
    Subscription_RootImages_AggregateArgs
  >;
  images_by_pk?: SubscriptionResolver<
    Maybe<Images>,
    ParentType,
    Context,
    Subscription_RootImages_By_PkArgs
  >;
  users?: SubscriptionResolver<
    Array<Users>,
    ParentType,
    Context,
    Subscription_RootUsersArgs
  >;
  users_aggregate?: SubscriptionResolver<
    Users_Aggregate,
    ParentType,
    Context,
    Subscription_RootUsers_AggregateArgs
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<Users>,
    ParentType,
    Context,
    Subscription_RootUsers_By_PkArgs
  >;
};

export type UsersResolvers<Context = any, ParentType = Users> = {
  avatar?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  name?: Resolver<Scalars["String"], ParentType, Context>;
  user_id?: Resolver<Scalars["String"], ParentType, Context>;
};

export type Users_AggregateResolvers<
  Context = any,
  ParentType = Users_Aggregate
> = {
  aggregate?: Resolver<Maybe<Users_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Users>, ParentType, Context>;
};

export type Users_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Users_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Users_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Users_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Users_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Users_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Users_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<Maybe<Users_Stddev_Pop_Fields>, ParentType, Context>;
  stddev_samp?: Resolver<Maybe<Users_Stddev_Samp_Fields>, ParentType, Context>;
  sum?: Resolver<Maybe<Users_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Users_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Users_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Users_Variance_Fields>, ParentType, Context>;
};

export type Users_Avg_FieldsResolvers<
  Context = any,
  ParentType = Users_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Users_Max_FieldsResolvers<
  Context = any,
  ParentType = Users_Max_Fields
> = {
  avatar?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Users_Min_FieldsResolvers<
  Context = any,
  ParentType = Users_Min_Fields
> = {
  avatar?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Users_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Users_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Users>, ParentType, Context>;
};

export type Users_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Users_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Users_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Users_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Users_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Users_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Users_Sum_FieldsResolvers<
  Context = any,
  ParentType = Users_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Users_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Users_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Users_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Users_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Users_Variance_FieldsResolvers<
  Context = any,
  ParentType = Users_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Resolvers<Context = any> = {
  guilds?: GuildsResolvers<Context>;
  guilds_aggregate?: Guilds_AggregateResolvers<Context>;
  guilds_aggregate_fields?: Guilds_Aggregate_FieldsResolvers<Context>;
  guilds_avg_fields?: Guilds_Avg_FieldsResolvers<Context>;
  guilds_max_fields?: Guilds_Max_FieldsResolvers<Context>;
  guilds_min_fields?: Guilds_Min_FieldsResolvers<Context>;
  guilds_mutation_response?: Guilds_Mutation_ResponseResolvers<Context>;
  guilds_stddev_fields?: Guilds_Stddev_FieldsResolvers<Context>;
  guilds_stddev_pop_fields?: Guilds_Stddev_Pop_FieldsResolvers<Context>;
  guilds_stddev_samp_fields?: Guilds_Stddev_Samp_FieldsResolvers<Context>;
  guilds_sum_fields?: Guilds_Sum_FieldsResolvers<Context>;
  guilds_var_pop_fields?: Guilds_Var_Pop_FieldsResolvers<Context>;
  guilds_var_samp_fields?: Guilds_Var_Samp_FieldsResolvers<Context>;
  guilds_variance_fields?: Guilds_Variance_FieldsResolvers<Context>;
  image_channels?: Image_ChannelsResolvers<Context>;
  image_channels_aggregate?: Image_Channels_AggregateResolvers<Context>;
  image_channels_aggregate_fields?: Image_Channels_Aggregate_FieldsResolvers<
    Context
  >;
  image_channels_avg_fields?: Image_Channels_Avg_FieldsResolvers<Context>;
  image_channels_max_fields?: Image_Channels_Max_FieldsResolvers<Context>;
  image_channels_min_fields?: Image_Channels_Min_FieldsResolvers<Context>;
  image_channels_mutation_response?: Image_Channels_Mutation_ResponseResolvers<
    Context
  >;
  image_channels_stddev_fields?: Image_Channels_Stddev_FieldsResolvers<Context>;
  image_channels_stddev_pop_fields?: Image_Channels_Stddev_Pop_FieldsResolvers<
    Context
  >;
  image_channels_stddev_samp_fields?: Image_Channels_Stddev_Samp_FieldsResolvers<
    Context
  >;
  image_channels_sum_fields?: Image_Channels_Sum_FieldsResolvers<Context>;
  image_channels_var_pop_fields?: Image_Channels_Var_Pop_FieldsResolvers<
    Context
  >;
  image_channels_var_samp_fields?: Image_Channels_Var_Samp_FieldsResolvers<
    Context
  >;
  image_channels_variance_fields?: Image_Channels_Variance_FieldsResolvers<
    Context
  >;
  image_tags?: Image_TagsResolvers<Context>;
  image_tags_aggregate?: Image_Tags_AggregateResolvers<Context>;
  image_tags_aggregate_fields?: Image_Tags_Aggregate_FieldsResolvers<Context>;
  image_tags_avg_fields?: Image_Tags_Avg_FieldsResolvers<Context>;
  image_tags_max_fields?: Image_Tags_Max_FieldsResolvers<Context>;
  image_tags_min_fields?: Image_Tags_Min_FieldsResolvers<Context>;
  image_tags_mutation_response?: Image_Tags_Mutation_ResponseResolvers<Context>;
  image_tags_stddev_fields?: Image_Tags_Stddev_FieldsResolvers<Context>;
  image_tags_stddev_pop_fields?: Image_Tags_Stddev_Pop_FieldsResolvers<Context>;
  image_tags_stddev_samp_fields?: Image_Tags_Stddev_Samp_FieldsResolvers<
    Context
  >;
  image_tags_sum_fields?: Image_Tags_Sum_FieldsResolvers<Context>;
  image_tags_var_pop_fields?: Image_Tags_Var_Pop_FieldsResolvers<Context>;
  image_tags_var_samp_fields?: Image_Tags_Var_Samp_FieldsResolvers<Context>;
  image_tags_variance_fields?: Image_Tags_Variance_FieldsResolvers<Context>;
  images?: ImagesResolvers<Context>;
  images_aggregate?: Images_AggregateResolvers<Context>;
  images_aggregate_fields?: Images_Aggregate_FieldsResolvers<Context>;
  images_avg_fields?: Images_Avg_FieldsResolvers<Context>;
  images_max_fields?: Images_Max_FieldsResolvers<Context>;
  images_min_fields?: Images_Min_FieldsResolvers<Context>;
  images_mutation_response?: Images_Mutation_ResponseResolvers<Context>;
  images_stddev_fields?: Images_Stddev_FieldsResolvers<Context>;
  images_stddev_pop_fields?: Images_Stddev_Pop_FieldsResolvers<Context>;
  images_stddev_samp_fields?: Images_Stddev_Samp_FieldsResolvers<Context>;
  images_sum_fields?: Images_Sum_FieldsResolvers<Context>;
  images_var_pop_fields?: Images_Var_Pop_FieldsResolvers<Context>;
  images_var_samp_fields?: Images_Var_Samp_FieldsResolvers<Context>;
  images_variance_fields?: Images_Variance_FieldsResolvers<Context>;
  mutation_root?: Mutation_RootResolvers<Context>;
  query_root?: Query_RootResolvers<Context>;
  subscription_root?: Subscription_RootResolvers<Context>;
  users?: UsersResolvers<Context>;
  users_aggregate?: Users_AggregateResolvers<Context>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<Context>;
  users_avg_fields?: Users_Avg_FieldsResolvers<Context>;
  users_max_fields?: Users_Max_FieldsResolvers<Context>;
  users_min_fields?: Users_Min_FieldsResolvers<Context>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<Context>;
  users_stddev_fields?: Users_Stddev_FieldsResolvers<Context>;
  users_stddev_pop_fields?: Users_Stddev_Pop_FieldsResolvers<Context>;
  users_stddev_samp_fields?: Users_Stddev_Samp_FieldsResolvers<Context>;
  users_sum_fields?: Users_Sum_FieldsResolvers<Context>;
  users_var_pop_fields?: Users_Var_Pop_FieldsResolvers<Context>;
  users_var_samp_fields?: Users_Var_Samp_FieldsResolvers<Context>;
  users_variance_fields?: Users_Variance_FieldsResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>;
