const Sequelize = require("sequelize");

const sequelize = require("../loaders/sequelize");

const Wislists = sequelize.define("Wishlists", {
  forWhom: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "A loved One",
    validate: {
      notEmpty: true
    }
  },
  Title: {
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
  ItemName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Price: {
    type: Sequelize.DECIMAL(20, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Wislists;
