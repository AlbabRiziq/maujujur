import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";
import { configDotenv } from "dotenv";
configDotenv();

const router = express.Router();

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
          komentar: [],
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
router.get("/viewpesan", async (req, res, next) => {
  const username = req.query.username;
  const idpesan = req.query.idpesan;

  try {
    const result = await User.find({
      username: username,
      "pesan.idpesan": idpesan,
    });
    res.send(result[0].pesan.find((pesan) => pesan.idpesan == idpesan));
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Terjadi kesalahan" });
  }
});

export default router;
