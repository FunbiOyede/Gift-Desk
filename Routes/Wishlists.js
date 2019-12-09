const express = require("express");

const Router = express.Router();

const WishlistsController = require("../Controllers/WislistsController");

// Wishlists/create => POST
Router.post("/wishlists/create", WishlistsController.createWishlists);

// Wishlists => GET
Router.get("/wishlists", WishlistsController.getAllWishlists);

Router.get("/wishlists/count", WishlistsController.getNumberOfWislists);

module.exports = Router;
