const Wislists = require("../Models/WishLists");

class WishListsController {
  constructor() {}

  static createWishlists(req, res, next) {
    const Name = req.body.Name;
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Url = req.body.Url;
    const ItemName = req.body.ItemName;
    const Price = req.body.Price;

    Wislists.create({
      forWhom: Name,
      Title: Title,
      Description: Description,
      Url: Url,
      ItemName: ItemName,
      Price: Price
    })
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }

  static getAllWishlists(req, res, next) {
    Wislists.findAll()
      .then(wishlists => {
        res.status(200).json(wishlists);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }

  static getNumberOfWislists(req, res, next) {
    Wislists.findAndCountAll().then(result => {
      res.status(200).json({
        count: result.count
      });
    });
  }
}

module.exports = WishListsController;
