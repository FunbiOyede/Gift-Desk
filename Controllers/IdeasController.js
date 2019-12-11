const Ideas = require("../Models/Ideas");

class IdeasController {
  constructor() {}

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description creates new idea
   */
  static createIdeas(req, res, next) {
    const ProductName = req.body.ItemName;
    const Description = req.body.Description;
    const Url = req.body.Url;
    const Price = req.body.Price;

    Ideas.create({
      ItemName: ProductName,
      Description: Description,
      Url: Url,
      Price: Price
    })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json({ error: error });
      });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description fetches all ideas
   */
  static getAllIdeas(req, res, next) {
    Ideas.findAll()
      .then(ideas => {
        res.status(200).json(ideas);
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
   * @description delete an idea by id
   */
  static DeleteIdeas(req, res, next) {
    Ideas.findByPk(req.params.id)
      .then(idea => idea.destroy())
      .then(result => res.status(200).json("idea successfully deleted"))
      .catch(error => {
        res.status(400).json(error);
      });
  }

  /**
   *
   * @param {*} res
   * @param {*} req
   * @param {*} next
   * @description updates idea by id
   */
  static UpdateIdeas(req, res, next) {
    const id = req.params.id;
    const ProductName = req.body.ItemName;
    const Description = req.body.Description;
    const Url = req.body.Url;
    const Price = req.body.Price;
    Ideas.update(
      {
        ItemName: ProductName,
        Description: Description,
        Url: Url,
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
   * @description get an idea by id
   */
  static getIdea(req, res, next) {
    Ideas.findByPk(req.params.id)
      .then(idea => res.status(200).json(idea))
      .catch(error => res.status(400).json(error));
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @description get total number of ideas
   */
  static getNumberOfIdeas(req, res, next) {
    Ideas.findAndCountAll()
      .then(result => {
        res.status(200).json(result.count);
      })
      .catch(error => res.status(400).json(error));
  }
}

module.exports = IdeasController;
