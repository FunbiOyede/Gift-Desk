const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  databaseName: process.env.DB_DATABASE_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALET,
  host: process.env.DB_HOST
};
