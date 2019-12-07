const Sequelize = require("sequelize");

const sequelize = require("../Utils/Database");

const Users = sequelize.define("Users", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        message: "Please Enter your name"
      }
    }
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
    min: 8
  }
});

module.exports = Users;
