const express = require("express");
const router = require("./routes/movies");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json())
app.use("/movies", router)

module.exports = app;