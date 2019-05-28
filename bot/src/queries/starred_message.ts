import { Document, Model, model, Schema } from "mongoose";

export interface StarredMessages extends Document {
  id: string;
  author_id: string;
  content: string;
  attachments: string[];
  stars: number;
  embed_id: string;
}

export const starredMessageSchema = new Schema({
  id: String,
  author_id: String,
  content: String,
  attachments: Array,
  stars: Number,
  embed_id: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

export const StarredMessage: Model<StarredMessages> = model<StarredMessages>("StarredMessage", starredMessageSchema);
