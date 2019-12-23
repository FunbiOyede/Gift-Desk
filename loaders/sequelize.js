const Sequelize = require("sequelize");
const config = require("../config/index");

const sequelize = new Sequelize(
  config.databaseName,
  config.user,
  config.password,
  {
    dialect: config.dialect,
    host: config.host
  }
);

module.exports = sequelize;
