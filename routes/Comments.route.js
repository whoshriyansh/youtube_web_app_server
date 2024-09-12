import { Router } from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/Comment.controller.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
const router = Router();

router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", getComments);

export default router;
