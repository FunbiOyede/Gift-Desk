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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/vivid", UserRoutes);
app.use("/vivid", WishListsRoutes);
app.use("/vivid", IdeasRoutes);

app.use((req, res) => {
  res.json({ response: "endpoint not found" });
});
Users.hasMany(Ideas);
Users.hasMany(Wislists);
Ideas.belongsTo(Users);
Wislists.belongsTo(Users);
const server = http.createServer(app);
sequelize
  .sync({ force: false })
  .then(result => {
    server.listen(5000, () => {
      console.log("sever started");
    });
  })
  .catch(err => {
    console.log(err);
  });
