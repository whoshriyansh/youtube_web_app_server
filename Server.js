import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/ConfigDB.js";
import cookieParser from "cookie-parser";

import authroutes from "./routes/Auth.route.js";
import userroutes from "./routes/User.route.js";
import videoroutes from "./routes/Video.route.js";
import commentroutes from "./routes/Comments.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/users", userroutes);
app.use("/api/videos", videoroutes);
app.use("/api/comments", commentroutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  ConnectDB();
  console.log(`App is listining on PORT: ${PORT}`);
});
