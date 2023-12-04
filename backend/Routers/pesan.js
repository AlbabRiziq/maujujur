import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/ngl");

router.post("/pesan", async (req, res, next) => {
  console.log("tes");
  const username = req.query.username;
  const pesan = req.query.pesan;
  const idpesan = req.query.idpesan;

  const hasil = await User.updateOne(
    { username: username },
    {
      $push: {
        pesan: {
          idpesan: idpesan,
          pesan: pesan,
        },
      },
    }
  );

  if (hasil.modifiedCount < 1) {
    res.status(404).json({ message: "Terjadi kesalahan" });
  } else {
    res.json({ message: "Berhasil mengirim pesan" });
  }
});

router.get("/pesan", async (req, res, next) => {
  const username = req.query.username;

  const result = User.find({ username: username });

  res.send(await result);
});

export default router;
