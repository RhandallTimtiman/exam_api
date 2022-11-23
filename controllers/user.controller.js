const userDao = require("../dao/user.dao");

const addUser = (req, res) => {
  let user = req.body;

  userDao
    .create(user)
    .then((result) => {
      res.status(200).json({
        message: "User Inserted Succesfully!",
        data: {
          ...result.dataValues,
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

const getUserById = (req, res) => {
  let userId = req.params.id;

  userDao
    .getUserById(userId)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "User Fetched Succesfully!",
          data: {
            ...result.dataValues,
          },
          isSuccess: true,
          errors: [],
        });
      } else {
        res.status(500).json({
          message: "User Not Found!",
          data: null,
          isSuccess: true,
          errors: [],
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        data: null,
        isSuccess: false,
      });
    });
};

const getAllUsers = (req, res) => {
  userDao
    .getAllUser()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Users Fetched Succesfully!",
          data: [
            ...result.map((user, index) => {
              return {
                ...user.dataValues,
              };
            }),
          ],
          isSuccess: true,
          errors: [],
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        data: null,
        isSuccess: false,
      });
    });
};

const deleteUser = (req, res) => {
  userDao
    .deleteById([req.params.id])
    .then((result) => {
      if (result[0]) {
        res.status(200).json({
          message: "User Deleted Succesfully!",
          data: {},
          isSuccess: true,
          errors: [],
        });
      } else {
        throw new Error("User Not Found");
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    });
};

const updateUser = (req, res) => {
  userDao
    .updateById(req.params.id, req.body)
    .then((result) => {
      if (result[0]) {
        res.status(200).json({
          message: "User Updated Succesfully!",
          data: {},
          isSuccess: true,
          errors: [],
        });
      } else {
        throw new Error("User Not Found");
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    });
};

const batchDeleteUser = (req, res) => {
  userDao
    .deleteById(req.body.ids)
    .then((result) => {
      if (result[0]) {
        res.status(200).json({
          message: "User Deleted Succesfully!",
          data: {},
          isSuccess: true,
          errors: [],
        });
      } else {
        throw new Error("User Not Found");
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    });
};

var userController = {
  addUser,
  getUserById,
  getAllUsers,
  deleteUser,
  updateUser,
  batchDeleteUser,
};

module.exports = userController;
