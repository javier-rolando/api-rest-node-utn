const app = require("./app");
const mongoose = require("mongoose");

// Conectando con la DB
mongoose.connect(
  `mongodb://localhost:27017/${process.env.DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Conectado a la base de datos!");
      app.listen(3000, () => console.log("Server corriendo correctamente"));
    }
  }
);
