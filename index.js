import express from "express";
import rootRoute from "./src/Routes/rootRoutes.js";

const app = express();
const port = "5000";
app.use(express.json());
app.use(rootRoute);
app.listen(port, () => {
  console.log(`BE starting ${port}`);
});
