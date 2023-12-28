import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import daftar from "./Routers/daftar.js";
import pesan from "./Routers/pesan.js";
import komen from "./Routers/komen.js";

configDotenv();

const PORT = 8080 || process.env.PORT;

const app = express();
app.use(cors());
const router = express.Router();

mongoose.connect(process.env.MONGO_URI);

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/daftar", daftar);
router.post("/pesan", pesan);
router.get("/pesan", pesan);
router.get("/viewpesan", pesan);
router.post("/komen", komen);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
