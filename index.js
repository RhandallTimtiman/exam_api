const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require("body-parser");

const db = require("./connection");

const userController = require("./controllers/user.controller");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.post("/user", userController.addUser);

const PORT = process.env.PORT || 5000;

db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
