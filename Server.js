import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/ConfigDB.js";

import authroutes from "./routes/Auth.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth/", authroutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  ConnectDB();
  console.log(`App is listining on PORT: ${PORT}`);
});
