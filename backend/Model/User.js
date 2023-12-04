import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  pesan: Array,
});

const User = mongoose.model("User", UserSchema);

export default User;
