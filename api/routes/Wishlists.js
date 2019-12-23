const express = require("express");

const Router = express.Router();

const WishlistsController = require("../../services/Wislists");

// Wishlists/create ==> POST CREATE A WISHLIST
Router.post("/wishlists/create", WishlistsController.createWishlists);

// Wishlists ==> GET ALL WISHLISTS
Router.get("/wishlists", WishlistsController.getAllWishlists);

// Wishlists ==> COUNT ALL WISHLISTS
Router.get("/wishlists/count", WishlistsController.getNumberOfWislists);

//Wishlists ==> DELETE BY ID

Router.delete("/wishlists/delete/:id", WishlistsController.deleteWishlists);

//Wishlists ==> UPDATE BY ID
Router.put("/wishlists/update/:id", WishlistsController.updateWishlists);

//Wishlists ==> GET BY ID
Router.get("/wishlists/wish/:id", WishlistsController.findAWish);
module.exports = Router;
