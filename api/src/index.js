const express = require("express");
require("./db/mongoose");
var cors = require("cors");

const userRoutes = require("./router/user");
const PostRoutes = require("./router/post");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use(userRoutes);
app.use(PostRoutes);

app.get("/", function (req, res) {
  console.log(req);
  res.send("hello world!");
});

app.listen(port, () => {
  console.log("server is up on " + port);
});
