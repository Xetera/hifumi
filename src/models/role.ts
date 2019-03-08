import { Document, Schema, Model, model } from "mongoose";

interface Role extends Document {
  id: string;
}

export const RoleSchema = new Schema({
  id: String,
  guild_id: String,
  name: String
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

export const Roles: Model<Role> = model<Role>("Role", RoleSchema);
