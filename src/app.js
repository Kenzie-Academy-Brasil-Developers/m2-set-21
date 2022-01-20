const express = require("express");
const router = require("./routes/movies");

const app = express();
app.use(express.json())
app.use("/movies", router)

module.exports = app;