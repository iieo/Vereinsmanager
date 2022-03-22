import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
