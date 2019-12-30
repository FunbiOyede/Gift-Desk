const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const sequelize = require("./loaders/sequelize");
const Users = require("./models/Users");
const Ideas = require("./models/Ideas");
const Wislists = require("./models/WishLists");
const UserRoutes = require("./api/routes/User");
const WishListsRoutes = require("./api/routes/Wishlists");
const IdeasRoutes = require("./api/routes/Ideas");
const notFound = require("./api/middlewares/index");
const app = express();

// some middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/vivid", UserRoutes);
app.use("/vivid", WishListsRoutes);
app.use("/vivid", IdeasRoutes);

// no endpoint handler
app.use(notFound);

// model associations
Users.hasMany(Ideas, {
  foreignKey: "UserId"
});

Ideas.belongsTo(Users, {
  foreignKey: "UserId"
});
Users.hasMany(Wislists, {
  foreignKey: "UserId"
});

Wislists.belongsTo(Users, {
  foreignKey: "UserId"
});

const server = http.createServer(app);
sequelize
  .sync({ force: false })
  .then(result => {
    server.listen(7000, () => {
      console.log("sever started");
    });
  })
  .catch(err => {
    console.log(err);
  });
