import express from "express";
import {
  listLikeRes,
  listRateRes,
} from "../controllers/restaurantControllers.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get("/listLikeRes/:res_id", listLikeRes);
restaurantRoutes.get("/listRateRes/:res_id", listRateRes);

export default restaurantRoutes;
