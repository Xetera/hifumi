import { Document, Model, model, Schema } from "mongoose";

interface Roles extends Document {
  id: string;
}

export const RoleSchema = new Schema({
  id: String,
  guild_id: String,
  name: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

export const Role: Model<Roles> = model<Roles>("Role", RoleSchema);
