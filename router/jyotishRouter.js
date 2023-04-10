import express from "express";
const jyotishRouter = express.Router();
import {
  showJyotishFrom,
  createJyotish,
  showJyotish,
  editJyotish,
  updateJyotish,
  deleteJyotish,
  showJyotishFromAPI
} from "../controller/jyotishController.js";

jyotishRouter.get("/add", showJyotishFrom);
jyotishRouter.post("/add", createJyotish);
jyotishRouter.get("/show", showJyotish);
jyotishRouter.get("/edit/:id", editJyotish);
jyotishRouter.post("/update/:id", updateJyotish);
jyotishRouter.post("/delete/:id", deleteJyotish);
jyotishRouter.get("/api/all", showJyotishFromAPI);

export default jyotishRouter;
