const User = require("../Models/Users");
class UserController {
  constructor() {}

  static createUser(req, res, next) {
    const FullName = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    User.create({
      Name: FullName,
      Email: Email,
      Password: Password
    })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.log(error);
        res.status(400).json({ error: error });
      });
  }
}

module.exports = UserController;
