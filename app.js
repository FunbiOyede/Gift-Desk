const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status("200").json({ response: "hellow" });
});

const server = http.createServer(app);
server.listen(5000, () => {
  console.log("sever started");
});
