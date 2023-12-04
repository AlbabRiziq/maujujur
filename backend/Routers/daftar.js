import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";
import { configDotenv } from "dotenv";
configDotenv();

const router = express.Router();

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017");

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
