import express from 'express';
const adminRouter = express.Router();


import {
  adminfrom,
  createadmin,
  showadmin,
  
  deleteadmin
} from "../controller/adminController.js";

adminRouter.get("/", adminfrom);
adminRouter.post("/", createadmin);
adminRouter.get("/admin", showadmin);
// adminRouter.get("/edit/:id", editadmin);
// adminRouter.post("/update/:id", updateadmin);
adminRouter.post("/delete/:id", deleteadmin);


export default adminRouter;