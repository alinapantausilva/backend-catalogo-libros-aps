import express from "express";
import cors from "cors";
import bookRouter from "./src/routes/book.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API de libros" });
});

app.use("/api/books", bookRouter);
app.use("/api/auth", authRouter);

export default app;