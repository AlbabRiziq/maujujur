import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/ngl");

router.post("/daftar", async (req, res, next) => {
  const username = req.query.username;
  // console.log(username);

  const newUser = new User({
    username: username,
    pesan: [],
  });

  const user = await User.findOne({ username: username });

  if (user == null) {
    newUser.save();
    res.send("Berhasil mendaftar");
  } else {
    res.status(400).send("Username sudah terdaftar");
  }
});

export default router;
