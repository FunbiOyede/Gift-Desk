const express = require("express");

const Router = express.Router();

const WishlistsController = require("../Controllers/WislistsController");

// Wishlists/create ==> POST
Router.post("/wishlists/create", WishlistsController.createWishlists);

// Wishlists ==> GET
Router.get("/wishlists", WishlistsController.getAllWishlists);

Router.get("/wishlists/count", WishlistsController.getNumberOfWislists);

//Wishlists ==> DELETE

Router.delete("/wishlists/delete/:id", WishlistsController.deleteWishlists);

//Wishlists ==> UPDATE
Router.put("/wishlists/update/:id", WishlistsController.updateWishlists);
module.exports = Router;
