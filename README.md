# Catálogo de Libros API

API REST desarrollada con Node.js, Express y MongoDB para gestionar un catálogo de libros.

---

# Características

- CRUD completo de libros
- Registro de usuarios
- Inicio de sesión con JWT
- Contraseñas encriptadas con bcrypt
- Autenticación mediante Bearer Token
- MongoDB Atlas
- Seeder de datos iniciales
- Tests con Mocha, Chai y Supertest

---

# 🛠 Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- Mocha
- Chai
- Supertest

---

# Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Ingresar al proyecto:

```bash
cd backend-catalogo-libros-aps
```

Instalar dependencias:

```bash
npm install
```

---

# Variables de entorno

Crear un archivo `.env` utilizando como referencia `.env.example`.

## .env.example

```env
PORT=
MONGODB_URI=
JWT_SECRET=
```

## Ejemplo

```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/booksdb
JWT_SECRET=mi-clave-secreta
```

---

# Ejecutar en desarrollo

```bash
npm run dev
```

---

# Ejecutar en producción

```bash
npm start
```

---

# Ejecutar tests

```bash
npm test
```

---

# Cargar datos iniciales

```bash
npm run seed
```

---

# Endpoints

---

## Home

### GET /

Devuelve un mensaje de bienvenida.

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "message": "Bienvenidos a la API de libros"
}
```

---

# Autenticación

## Registro

### POST /api/auth/register

Registra un nuevo usuario.

### Body

```json
{
  "name": "Ana García",
  "email": "ana@example.com",
  "password": "123456"
}
```

### Respuesta Exitosa

#### Status: 201 Created

```json
{
  "message": "Usuario creado correctamente"
}
```

### Posibles Errores

#### Status: 400 Bad Request

```json
{
  "message": "El correo ya está registrado"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al registrar el usuario"
}
```

---

## Login

### POST /api/auth/login

Inicia sesión y devuelve un token JWT.

### Body

```json
{
  "email": "ana@example.com",
  "password": "123456"
}
```

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "token": "jwt-token"
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "Credenciales incorrectas"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al iniciar sesión"
}
```

---

# Libros

## Obtener todos los libros

### GET /api/books

Devuelve todos los libros.

### Respuesta Exitosa

#### Status: 200 OK

```json
[
  {
    "_id": "...",
    "title": "El Quijote",
    "author": "Miguel de Cervantes",
    "genre": "Novela",
    "year": 1605,
    "pages": 863,
    "description": "...",
    "image": "https://..."
  }
]
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al obtener los libros"
}
```

---

## Obtener libro por ID

### GET /api/books/:id

Devuelve un libro por su ID.

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "_id": "...",
  "title": "El Quijote",
  "author": "Miguel de Cervantes",
  "genre": "Novela",
  "year": 1605,
  "pages": 863,
  "description": "...",
  "image": "https://..."
}
```

### Posibles Errores

#### Status: 404 Not Found

```json
{
  "message": "Libro no encontrado"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al obtener el libro"
}
```

---

## Crear libro

### POST /api/books

Requiere autenticación.

### Headers

```txt
Authorization: Bearer TOKEN
```

### Body

```json
{
  "title": "El Quijote",
  "author": "Miguel de Cervantes",
  "genre": "Novela",
  "year": 1605,
  "pages": 863,
  "description": "...",
  "image": "https://..."
}
```

### Respuesta Exitosa

#### Status: 201 Created

```json
{
  "_id": "...",
  "title": "El Quijote",
  "author": "Miguel de Cervantes",
  "genre": "Novela",
  "year": 1605,
  "pages": 863,
  "description": "...",
  "image": "https://..."
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "No autorizado"
}
```

#### Status: 422 Unprocessable Entity

```json
{
  "message": "El título es obligatorio"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al crear el libro"
}
```

---

## Actualizar libro

### PUT /api/books/:id

Requiere autenticación.

### Headers

```txt
Authorization: Bearer TOKEN
```

### Body

```json
{
  "title": "El Quijote (Edición revisada)",
  "author": "Miguel de Cervantes",
  "genre": "Novela",
  "year": 1605,
  "pages": 900,
  "description": "...",
  "image": "https://..."
}
```

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "_id": "...",
  "title": "El Quijote (Edición revisada)",
  "author": "Miguel de Cervantes",
  "genre": "Novela",
  "year": 1605,
  "pages": 900,
  "description": "...",
  "image": "https://..."
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "No autorizado"
}
```

#### Status: 404 Not Found

```json
{
  "message": "Libro no encontrado"
}
```

#### Status: 422 Unprocessable Entity

```json
{
  "message": "El título es obligatorio"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al actualizar el libro"
}
```

---

## Eliminar libro

### DELETE /api/books/:id

Requiere autenticación.

### Headers

```txt
Authorization: Bearer TOKEN
```

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "message": "Libro eliminado"
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "No autorizado"
}
```

#### Status: 404 Not Found

```json
{
  "message": "Libro no encontrado"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error al borrar el libro"
}
```

---

# Estructura del proyecto

```txt
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── seeders/
│
└── app.js

index.js
```

---

# Autor

Proyecto desarrollado como práctica del curso Full Stack de Neoland.

Autor: Alina Pantau Silvasan
