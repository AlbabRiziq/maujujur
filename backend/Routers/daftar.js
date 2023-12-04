import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/ngl");

router.post("/daftar", async (req, res) => {
  const username = req.params.username;

  console.log(username);

  if (!username) {
    res.status(400).send("Username tidak boleh kosong");
  }

  const newUser = new User({
    username: username,
    pesan: [],
  });

  const user = await User.findOne({ username: username });

  if (user) {
    res.status(400).send("Username sudah terdaftar");
  } else {
    await newUser.save();
    res.send("Berhasil mendaftar");
  }
});

export default router;
