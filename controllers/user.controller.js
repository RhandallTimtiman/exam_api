const userDao = require("../dao/user.dao");

const addUser = (req, res) => {
  let user = req.body;

  userDao
    .create(user)
    .then((res) => {
      res.status(200).json({
        message: "User Inserted Succesfully!",
        data: {
          ...res,
        },
        isSuccess: true,
        errors: [],
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Error",
        data: null,
        isSuccess: false,
        errors: error.errors.map(({ message, type, path }) => {
          return {
            message,
            type,
            path,
          };
        }),
      });
    });
};

var userController = {
  addUser: addUser,
};

module.exports = userController;
