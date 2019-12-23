const Wislists = require("../models/WishLists");

class WishListsController {
  constructor() {}

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description creates a wishlists
   */
  static createWishlists(req, res, next) {
    const Name = req.body.Name;
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Url = req.body.Url;
    const ItemName = req.body.ItemName;
    const Price = req.body.Price;
    const UserId = req.body.User;
    console.log();
    Wislists.create({
      forWhom: Name,
      Title: Title,
      Description: Description,
      Url: Url,
      ItemName: ItemName,
      Price: Price,
      UserId: UserId
    })
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description fetches all wishlists
   */
  static getAllWishlists(req, res, next) {
    Wislists.findAll()
      .then(wishlists => {
        res.status(200).json(wishlists);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description get total number of wishlists
   */
  static getNumberOfWislists(req, res, next) {
    Wislists.findAndCountAll().then(result => {
      res.status(200).json({
        count: result.count
      });
    });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description deletes a wishlist by id
   */
  static deleteWishlists(req, res, next) {
    Wislists.findByPk(req.params.id)
      .then(wishlists => wishlists.destroy())
      .then(result => res.status(200).json("wishlists successfully deleted"))
      .catch(error => {
        res.status(400).json(error);
      });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description updates a wislists by id
   */
  static updateWishlists(req, res, next) {
    const id = req.params.id;
    const Name = req.body.Name;
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Url = req.body.Url;
    const ItemName = req.body.ItemName;
    const Price = req.body.Price;
    Wislists.update(
      {
        forWhom: Name,
        Title: Title,
        Description: Description,
        Url: Url,
        ItemName: ItemName,
        Price: Price
      },
      { where: { id: id } }
    )
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description gets a wishlists by id
   */
  static findAWish(req, res, next) {
    Wislists.findByPk(req.params.id)
      .then(wishlists => res.status(200).json(wishlists))

      .catch(error => {
        res.status(400).json(error);
      });
  }
}

module.exports = WishListsController;
