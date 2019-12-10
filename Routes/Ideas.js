const express = require("express");

const Router = express.Router();

const IdeasController = require("../Controllers/IdeasController");

// ideas/create => POST
Router.post("/ideas/create", IdeasController.createIdeas);

Router.get("/ideas", IdeasController.getAllIdeas);

Router.delete("/ideas/delete/:id", IdeasController.DeleteIdeas);

module.exports = Router;
