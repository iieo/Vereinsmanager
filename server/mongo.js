import { config } from "dotenv";
import { executeStudentCrudOperations } from "./studentsCrud.js";
import mongoose from "mongoose";
import express from "express";
import User from "../components/user.js";
config();

const app = express();

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.err(err);
  }
  app.listen(3000);
}
connectToDB();

app.get("/addUser", async (req, res) => {
  const user = new User({
    name: "test",
    firstName: "yee",
  });
  try {
    const dbRes = await user.save();
    res.send(dbRes);
  } catch (err) {
    res.send(err);
  }
});
app.get("/getUsers", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
