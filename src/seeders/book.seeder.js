import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import Book from "../models/Book.js";

const books = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "Realismo mágico",
    year: 1967,
    pages: 417,
    description: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
    image: "https://picsum.photos/seed/cien/300/400",
  },
  {
    title: "El nombre de la rosa",
    author: "Umberto Eco",
    genre: "Misterio histórico",
    year: 1980,
    pages: 502,
    description: "Un monje franciscano investiga una serie de muertes misteriosas en una abadía medieval.",
    image: "https://picsum.photos/seed/rosa/300/400",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Distopía",
    year: 1949,
    pages: 328,
    description: "Una sociedad totalitaria dominada por el Gran Hermano.",
    image: "https://picsum.photos/seed/1984/300/400",
  },
  {
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    genre: "Fábula",
    year: 1943,
    pages: 96,
    description: "Un pequeño príncipe viaja por el universo aprendiendo lecciones sobre la vida y el amor.",
    image: "https://picsum.photos/seed/principito/300/400",
  },
  {
    title: "Ficciones",
    author: "Jorge Luis Borges",
    genre: "Cuentos",
    year: 1944,
    pages: 224,
    description: "Cuentos que exploran laberintos, bibliotecas infinitas y realidades paralelas.",
    image: "https://picsum.photos/seed/ficciones/300/400",
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    genre: "Novela de caballerías",
    year: 1605,
    pages: 863,
    description: "Las aventuras de Alonso Quijano, quien decide convertirse en caballero andante.",
    image: "https://picsum.photos/seed/quijote/300/400",
  },
];

const seedBooks = async () => {
  try {
    await connectDB();
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("Libros cargados correctamente");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedBooks();