import express from "express";
const adminRouter = express.Router();

import {
  createadmin,
  showadmin,
  deleteadmin,
  loginAdmin,
} from "../controller/adminController.js";

adminRouter.post("/", createadmin);
adminRouter.get("/admin", showadmin);
adminRouter.post("/login", loginAdmin);

adminRouter.post("/delete/:id", deleteadmin);

export default adminRouter;
