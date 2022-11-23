const { User } = require("../models");

const create = (user) => {
  return User.create(user);
};

var userDao = {
  create: create,
};

module.exports = userDao;
