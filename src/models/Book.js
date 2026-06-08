import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "El autor es obligatorio"],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, "El género es obligatorio"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "El año es obligatorio"],
    },
    pages: {
      type: Number,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    image: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;