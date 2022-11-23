const { User } = require("../models");

const create = (user) => {
  return User.create(user);
};

const getAllUser = () => {
  return User.findAll({
    where: {
      isDeleted: false,
    },
  });
};

const getUserById = (id) => {
  return User.findByPk(id);
};

const deleteById = (id) => {
  return User.update(
    {
      isDeleted: true,
      deletedOn: new Date(),
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const updateById = (id, user) => {
  return User.update(user, {
    where: {
      id: id,
    },
  });
};

var userDao = {
  create,
  getAllUser,
  getUserById,
  deleteById,
  updateById,
};

module.exports = userDao;
