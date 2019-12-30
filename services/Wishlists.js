const Wishlists = require("../models/WishLists");

class WishListService {
  constructor() {}

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description creates a wishlists
   */
  static async createWishlists(
    name,
    title,
    description,
    url,
    ItemName,
    price,
    userID
  ) {
    const response = await Wishlists.create({
      forWhom: name,
      Title: title,
      Description: description,
      Url: url,
      ItemName: ItemName,
      Price: price,
      UserId: userID
    });
    return { response: response };
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description fetches all wishlists
   */
  static async getAllWishlists() {
    const wishlists = await Wishlists.findAll();
    return {
      wishlist: wishlists
    };
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description get total number of wishlists
   */
  static getNumberOfWislists(req, res, next) {
    Wishlists.findAndCountAll().then(result => {
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
  static deleteWishlists(id) {
    //continue here
     const wishlist = await Wishlists.findByPk(id);
    Wishlists.findByPk(req.params.id)
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
    const Name = rwisheq.body.Name;
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Url = req.body.Url;
    const ItemName = req.body.ItemName;
    const Price = req.body.Price;
    Wishlists.update(
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
  static async findAWish(id) {
    const wish = await Wishlists.findByPk(id);
    return { wishlist: wish };
  }
}

module.exports = WishListService;
