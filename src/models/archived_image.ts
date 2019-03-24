import { Document, Model, model, Schema } from "mongoose";
import { Guilds } from "./guild";

export interface ArchivedImage extends Document {
  message_id?: string;
  url: string;
  name: string;
  tags: string[];
  guild: Model<Guilds>;
}

export const ArchivedImageSchema = new Schema({
  message_id: String,
  guild: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Guild"
  },
  url: String,
  hosted_url: {
    required: false,
    type: String
  },
  file_name: String,
  tags: {
    required: false,
    default: [],
    type: Array
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

export const ArchivedImage: Model<ArchivedImage> = model<ArchivedImage>("ArchivedImage", ArchivedImageSchema);
