const db = require("../database/index");
const Helpers = require("../helpers/index");
const {readFileSync} = require("fs")

class Movie {
  constructor({ title, duration = null, synopsis = "", imdb = null }) {
    this.title = title;
    this.duration = duration;
    this.synopsis = synopsis;
    this.imdb = imdb;
  }

  body() {
    return { ...this };
  }

  save() {
    db.push(this);

    const read = readFileSync("./src/database/db.json");
    const data = JSON.parse(read)

    data.movies.push(this)

    Helpers.writeData(data)
  }
}

module.exports = Movie;
