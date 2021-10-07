import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
  userid: String,
  password: String,
  email: String,
});

export default Mongoose.model("users", userSchema);
