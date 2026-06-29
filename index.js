import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
connectDB();

import app from "./app.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

