const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const sequelize = require("./Utils/Database");
const Users = require("./Models/Users");
const Ideas = require("./Models/Ideas");
const Wislists = require("./Models/WishLists");
const UserRoutes = require("./Routes/User");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.status("200").json({ response: "hellow" });
// });

app.use("/vivid", UserRoutes);
app.use((req, res) => {
  res.json({ response: "endpoint not found" });
});
Users.hasMany(Ideas);
Users.hasMany(Wislists);

const server = http.createServer(app);
server.listen(5000, () => {
  console.log("sever started");
  sequelize
    .sync({ force: true })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
