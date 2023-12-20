import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";
import { configDotenv } from "dotenv";
configDotenv();

const router = express.Router();

mongoose.connect(process.env.MONGO_URI);

router.post("/daftar", async (req, res, next) => {
  const username = req.query.username;
  console.log(username);

  const newUser = new User({
    username: username,
    pesan: [],
  });

  const users = await User.findOne({
    username: username,
  });

  if (users == null) {
    newUser.save();
    res.json({ message: "Berhasil mendaftar" });
  } else {
    res.status(400).json({ message: "Username sudah terdaftar" });
  }
  // console.log(users);
  // res.send(hasil);
});

export default router;
