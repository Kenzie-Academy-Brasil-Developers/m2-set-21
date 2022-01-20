const { writeFileSync } = require("fs");

class Helpers {
  static writeData(data) {
    writeFileSync(
      "./src/database/db.json",
      JSON.stringify({ ...data }, null, 2),
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  }
}

module.exports = Helpers
