import mongoose from "mongoose";
import { logger } from "./utils";

logger.debug(`Connecting to mongodb @ ${process.env.DATABASE_URL}`);
mongoose.connect(process.env.DATABASE_URL!, { useNewUrlParser: true, connectTimeoutMS: 5000 }).then((e) => {
  logger.debug(`Connected to database @ ${process.env.DATABASE_URL}`);
}).catch((err) => {
  logger.error(`Problem connecting to the database, shutting down...`);
  logger.error(err);
  process.exit(1);
});
