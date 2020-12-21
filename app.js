const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

// Rutas
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");

// Middlewares
app.use(express.json());

// Middlewares de rutas
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);

module.exports = app;
