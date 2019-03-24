import { Document, Model, model, Schema } from "mongoose";

export interface ArchivedImage extends Document {
  message_id?: string;
  url: string;
  name: string;
  tags: string[];
}

export const ArchivedImageSchema = new Schema({
  message_id: String,
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
