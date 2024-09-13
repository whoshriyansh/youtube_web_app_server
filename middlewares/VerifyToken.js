import jwt from "jsonwebtoken";
import { createError } from "./Error.middleware.js";

export const verifyToken = (req, res, next) => {
  console.log("Cookies: ", req.cookies);
  const token = req.cookies.access_token_youtube;

  if (!token) return next(createError(401, "your are not Authorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is Not valid"));
    req.user = user;
    next();
  });
};
