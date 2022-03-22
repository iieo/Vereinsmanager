import React, { useEffect, Component } from "react";
import mongoose from "mongoose";
import User from "../components/user.js";

export default class DatabaseProvider extends Component {
  render() {
    return <>{this.props.children}</>;
  }
}

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
}

connectToDB();
