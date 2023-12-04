import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";

import daftar from "./Routers/daftar.js";
import pesan from "./Routers/pesan.js";
configDotenv();

const PORT = 8080 || process.env.PORT;

const app = express();
app.use(cors());
const router = express.Router();

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/daftar", daftar);
router.post("/pesan", pesan);
router.get("/pesan", pesan);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
