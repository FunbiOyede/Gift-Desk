const express = require("express");

const Router = express.Router();

const IdeasController = require("../../services/Ideas");

// ideas/create => POST CREATE AN IDEA
Router.post("/ideas/create", IdeasController.createIdeas);

// ideas ==> GET ALL  IDEAS
Router.get("/ideas", IdeasController.getAllIdeas);

//ideas ==> DELETE BY ID
Router.delete("/ideas/delete/:id", IdeasController.DeleteIdeas);

//ideas ==> UPDATE BY ID
Router.put("/ideas/update/:id", IdeasController.UpdateIdeas);

//ideas ==> GET BY Id
Router.get("/ideas/idea/:id", IdeasController.getIdea);

//ideas ==> GET COUNT ALL IDEAS
Router.get("/ideas/count", IdeasController.getNumberOfIdeas);
module.exports = Router;
