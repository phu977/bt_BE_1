import express from "express";
import {
  createOder,
  createRate,
  listUserLike,
  listUserRate,
  userLike,
  userUnlike,
} from "../controllers/userControllers.js";
const userRoutes = express.Router();
userRoutes.post("/like", userLike);
userRoutes.delete("/unlike/:like_id", userUnlike);
userRoutes.get("/listUserLike/:id", listUserLike);
userRoutes.get("/listUserRate/:user_id", listUserRate);
userRoutes.post("/create-rate", createRate);
userRoutes.post("/orderfood", createOder);
export default userRoutes;
