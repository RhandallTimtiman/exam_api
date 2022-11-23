var Sequelize = require("sequelize");
const db = new Sequelize("user_db", "root", "Test*123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
