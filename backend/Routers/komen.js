import express from "express";
import mongoose from "mongoose";
import User from "../Model/User.js";
import { configDotenv } from "dotenv";

const router = express.Router();

router.post("/komen", async (req, res, next) => {
  const username = req.query.username;
  const idpesan = req.query.idpesan;
  const komen = req.query.komen;

  console.log(username);
  console.log(idpesan);
  console.log(komen);

  const hasil = await User.updateOne(
    { username: username, "pesan.idpesan": idpesan },
    {
      $push: {
        "pesan.$.komentar": {
          komen: komen,
        },
      },
    }
  );

  if (hasil.modifiedCount < 1) {
    res.status(404).json({ message: "Terjadi kesalahan" });
  } else {
    res.json({ message: "Berhasil mengirim komentar" });
  }
});

export default router;
