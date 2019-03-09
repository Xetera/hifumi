import { Document, Model, model, Schema } from "mongoose";

interface Guilds extends Document {
  id: string;
  enabled: boolean;
  starboard_channel?: string;
  min_star_requirement: number;
  suspended_members?: string[];
}

export const GuildSchema = new Schema({
  id: String,
  enabled: Boolean,
  starboard_channel: String,
  min_star_requirement: Number,
  suspended_members: Array
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

export const Guild: Model<Guilds> = model<Guilds>("Guild", GuildSchema);
