import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los libros" });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el libro" });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(422).json({ message: error.message });
    }
    res.status(500).json({ message: "Error al crear el libro" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(book);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(422).json({ message: error.message });
    }
    res.status(500).json({ message: "Error al actualizar el libro" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json({ message: "Libro eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al borrar el libro" });
  }
};