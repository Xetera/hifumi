import { Document, Model, model, Schema } from "mongoose";

interface StarredMessages extends Document {
  id: string;
  author_id: string;
  content: string;
  attachments: string[];
  stars: number;
}

export const starredMessageSchema = new Schema({
  id: String,
  author_id: String,
  content: String,
  attachments: Array,
  stars: Number
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

export const StarredMessage: Model<StarredMessages> = model<StarredMessages>("Role", starredMessageSchema);
