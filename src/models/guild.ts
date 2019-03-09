import { Document, Model, model, Schema } from "mongoose";

export interface Guilds extends Document {
  id: string;
  enabled: boolean;
  starboard_channel?: string;
  min_stars: number;
  suspended_members?: string[];
}

export const GuildSchema = new Schema({
  id: String,
  enabled: {
    type: Boolean,
    default: false
  },
  starboard_channel: String,
  min_stars: {
    type: Number,
    default: 3
  },
  suspended_members: Array
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

export const Guild: Model<Guilds> = model<Guilds>("Guild", GuildSchema);
