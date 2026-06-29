import { config } from "dotenv";
config({ path: ".env.test" });

import connectDB from "../src/config/db.js";
connectDB();