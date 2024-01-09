import express from "express";
import userRoutes from "./userRoutes.js";
import restaurantRoutes from "./restaurantRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/user", userRoutes);
rootRoute.use("/restaurant", restaurantRoutes);
export default rootRoute;
