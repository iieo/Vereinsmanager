const express = require("express"),
  app = express(),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  { User } = require("./Data");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/users", function (req, res) {
  res.send(User.getUsers());
});
app.post("/addUser", function (req, res) {
  let user = new User(req.body);
  console.log(user);
  user.addToDatabase();
  res.send("Added User");
});

app.listen(3000);
console.log("App running at http://localhost:3000");
