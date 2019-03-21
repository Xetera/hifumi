import { Document, Model, model, Schema } from "mongoose";

export interface Emojis extends Document {
  id: string;
  guild_id?: string;
  url: string;
  name: string;
  tags: string[];
}

export const EmojiSchema = new Schema({
  id: String,
  guild_id: String,
  url: String,
  name: String,
  tags: {
    required: false,
    type: Array
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

export const Emoji: Model<Emojis> = model<Emojis>("Emojis", EmojiSchema);
