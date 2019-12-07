const express = require("express");

const Router = express.Router();

const UserController = require("../Controllers/UserController");

// /user/create => POST
Router.post("/user/create", UserController.createUser);

module.exports = Router;
