const db = require("../database/index");
const MovieModel = require("../models/movie");
const {readFileSync} = require("fs")


class MovieController {
  static getAll() {
    const read = readFileSync("./src/database/db.json");
    const data = JSON.parse(read)
    return data;
  }

  static create(data) {
    const newMovie = new MovieModel(data);
    newMovie.save();
    return newMovie;
  }
}

module.exports = MovieController;
