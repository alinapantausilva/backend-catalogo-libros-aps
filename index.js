import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
connectDB();

import express from "express";
import cors from "cors";
import bookRouter from "./src/routes/book.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API de libros" });
});

app.use("/api/books", bookRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));