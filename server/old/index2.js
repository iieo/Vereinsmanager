const express = require("express"),
  app = express(),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  bodyParser = require("body-parser"),
  session = require("express-session"),
  User = require("./Data");

passport.use(
  "local-login",
  new LocalStrategy(function (username, password, done) {
    console.log(username, password);
    const passwordMatching = true;
    if (passwordMatching) {
      return done(null, "logged in sucessfully");
    } else {
      return done(null, false, { message: "User not found." });
    }
  })
);
app.get("/login", function (req, res) {
  res.send(
    "<p>Please login!</p><form method='post' action='/login'><input type='text' name='username'/><input type='password' name='password'/><button type='submit' value='submit'>Submit</buttom></form>"
  );
});
passport.serializeUser(function (user, done) {
  done(null, Math.random());
});
passport.deserializeUser(function (id, done) {
  done(null, Math.random());
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.sendStatus(401);
}

app.post(
  "/login",
  passport.authenticate("local-login", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/secret");
  }
);

app.get("/secret", isLoggedIn, function (req, res) {
  res.send("Congratulations! you've successfully logged in.");
});

// launch the app
app.listen(3000);
console.log("App running at http://localhost:3000");
