import { Mongoose } from "mongoose";
import express from "express";
import { configDotenv } from "dotenv";

import daftar from "./Routers/daftar.js";
configDotenv();

const PORT = 8080 || process.env.PORT;

const app = express();
const router = express.Router();

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/daftar", daftar);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
