import { expect } from "chai";
import { test } from "mocha";
import request from "supertest";
import app from "../app.js";

import bcrypt from "bcryptjs";
import User from "../src/models/User.js";
import Book from "../src/models/Book.js";

describe("CRUD Books", function () {
  this.timeout(5000);

  before(async () => {
    await User.deleteMany();

    const hash = await bcrypt.hash("abc.123-", 10);

    const user = {
      name: "Admin",
      email: "admin@test.com",
      password: hash,
      role: "admin",
    };

    await User.create(user);
  });

  test("Debería traer un array de libros", async () => {
    const response = await request(app).get("/api/books");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  test("El Admin debería poder crear un libro", async () => {
    await Book.deleteMany();

    const responseLogin = await request(app).post("/api/auth/login").send({
      email: "admin@test.com",
      password: "abc.123-",
    });

    const token = responseLogin.body.token;

    const book = {
      title: "Un libro de prueba",
      author: "Autor Test",
      genre: "Ficción",
      year: 2024,
      image: "https://picsum.photos/200",
    };

    const response = await request(app)
      .post("/api/books")
      .send(book)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("title");
    expect(response.body.title).to.equal("Un libro de prueba");
  });
});