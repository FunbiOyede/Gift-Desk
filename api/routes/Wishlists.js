const express = require("express");

const Router = express.Router();

const WishListService = require("../../services/Wishlists");

// Wishlists/create ==> POST CREATE A WISHLIST
Router.post("/wishlists/create", async (req, res, next) => {
  const { Name, Title, Description, Url, ItemName, Price, User } = req.body;

  try {
    const response = await WishListService.createWishlists(
      Name,
      Title,
      Description,
      Url,
      ItemName,
      Price,
      User
    );
    res.status("🔥 wishlist created").json(response);
  } catch (error) {
    res.status(400).json("🔥 error: %o", error);
  }
});

// Wishlists ==> GET ALL WISHLISTS
Router.get("/wishlists", async (req, res, next) => {
  try {
    const { wishlist } = await WishListService.getAllWishlists();
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json("🔥 error: %o", error);
  }
});

// Wishlists ==> COUNT ALL WISHLISTS
Router.get("/wishlists/count", WishListService.getNumberOfWislists);

//Wishlists ==> DELETE BY ID

Router.delete("/wishlists/delete/:id", WishListService.deleteWishlists);

//Wishlists ==> UPDATE BY ID
Router.put("/wishlists/update/:id", WishListService.updateWishlists);

//Wishlists ==> GET BY ID
Router.get("/wishlists/wish/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const { wishlist } = await WishListService.findAWish(id);
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json("🔥 error: %o", error);
  }
});
module.exports = Router;
