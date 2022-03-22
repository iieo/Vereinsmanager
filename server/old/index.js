const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const createTables = require("./Database");
const Redis = require("ioredis");
const bcrypt = require("bcrypt");
const { RateLimiterRedis } = require("rate-limiter-flexible");

const LocalStrategy = require("passport-local").Strategy;
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");

const db = require("better-sqlite3")("verein.db", {});

createTables(db);

const redisClient = new Redis({ enableOfflineQueue: false });
const rateLimiterRedis = new RateLimiterRedis({
  storeClient: redisClient,
  points: 3, // Number of points
  duration: 1, // Per second
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiterRedis
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch((_) => {
      res.status(429).send("Too Many Requests");
    });
};

const app = express();
app.disable("x-powered-by");
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(hpp());
app.use(rateLimiterMiddleware);
app.use(expressSession);

passport.use(
  new LocalStrategy(function (username, password, done) {
    return done(null, false, { message: "User not found." });
  })
);

app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/)");
});

app.get("/", (req, res) => {
  res.send("Hello world...");
});

app.get("/secret", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send("Hello world...");
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    res.send(hashedPassword);
    res.status(201).send();
  } catch (err) {
    res.status(500).send();
  }
});
