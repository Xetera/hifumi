import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL!, { useNewUrlParser: true });
