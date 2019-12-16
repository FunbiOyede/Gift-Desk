const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const sequelize = require("./Utils/Database");
const Users = require("./Models/Users");
const Ideas = require("./Models/Ideas");
const Wislists = require("./Models/WishLists");
const UserRoutes = require("./Routes/User");
const WishListsRoutes = require("./Routes/Wishlists");
const IdeasRoutes = require("./Routes/Ideas");
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
app.use((req, res) => {
  res.json({ response: "endpoint not found" });
});

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
  .sync({ force: true })
  .then(result => {
    server.listen(5000, () => {
      console.log("sever started");
    });
  })
  .catch(err => {
    console.log(err);
  });
