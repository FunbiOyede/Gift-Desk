const express = require("express");

const Router = express.Router();

const UserController = require("../../services/User");

// /user/create => POST
Router.post("/user/create", UserController.createUser);

module.exports = Router;
