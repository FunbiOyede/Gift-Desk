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
   * @description deletes a wishlist by id
   */
  static async deleteWishlists(id) {
    const wishlist = await Wishlists.destroy({ where: { id: id } });
    return wishlist;
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description updates a wislists by id
   */
  static async updateWishlists(
    id,
    name,
    title,
    description,
    url,
    ItemName,
    price
  ) {
    const response = await Wishlists.update(
      {
        forWhom: name,
        Title: title,
        Description: description,
        Url: url,
        ItemName: ItemName,
        Price: price
      },
      { where: { id: id } }
    );
    return { response: response };
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description gets a wishlists by id
   */
  static async getAWish(id) {
    const wish = await Wishlists.findByPk(id);
    return { wishlist: wish };
  }
}

module.exports = WishListService;
