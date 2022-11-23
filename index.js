const express = require("express");
const app = express();
const logger = require("morgan");

const port = 3000;

var bodyParser = require("body-parser");

const db = require("./connection");

const userController = require("./controllers/user.controller");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.get("/users/:id", userController.getUserById);
app.patch("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);
app.post("/users/batch-delete", userController.batchDeleteUser);

const PORT = process.env.PORT || port;

db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));

module.exports = app;
