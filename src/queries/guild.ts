import { Document, Model, model, Schema } from "mongoose";
import gql from "graphql-tag";

export const upsertGuildQ = gql`
  mutation($data: [guilds_insert_input!]! $on_conflict: guilds_on_conflict) {
    insert_guilds(
      objects: $data
      on_conflict: $on_conflict
    ) {
      returning {
        id
      }
    }
  }
`;

export interface Guilds extends Document {
  id: string;
  enabled: boolean;
  starboard_channel?: string;
  image_archives: string[];
  min_stars: number;
  suspended_members?: string[];
  welcome_channel?: string;
}

export const GuildSchema = new Schema({
  id: String,
  enabled: {
    type: Boolean,
    default: false
  },
  image_archives: {
    type: Array,
    default: []
  },
  welcome_channel: {
    type: String,
  },
  starboard_channel: String,
  min_stars: {
    type: Number,
    default: 3
  },
  suspended_members: Array
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

export const Guild: Model<Guilds> = model<Guilds>("Guild", GuildSchema);
