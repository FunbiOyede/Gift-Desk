const Sequelize = require("sequelize");

const sequelize = require("../loaders/sequelize");

const Ideas = sequelize.define("Ideas", {
  ItemName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },

  Price: {
    type: Sequelize.DECIMAL(8, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Ideas;
