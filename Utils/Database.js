const Sequelize = require("sequelize");

const sequelize = new Sequelize("Vivid_Gift", "root", "isaac24290", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
