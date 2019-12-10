const Ideas = require("../Models/Ideas");

class IdeasController {
  constructor() {}

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

  static getAllIdeas(req, res, next) {
    Ideas.findAll()
      .then(ideas => {
        res.status(200).json(ideas);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }

  static DeleteIdeas(req, res, next) {
    Ideas.findByPk(req.params.id)
      .then(idea => idea.destroy())
      .then(result => res.status(200).json("idea successfully deleted"))
      .catch(error => {
        res.status(400).json(error);
      });
  }
}

module.exports = IdeasController;
