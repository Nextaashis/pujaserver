import express from "express";
const router = express.Router();
import {
  adminUserCreate,
  adminLogin,
  changePassword,
  adminProfile,
  adminResetPassword,
  adminResetPasswordEmail,
} from "../controller/usertController.js"; 
import checkAuthUser from "../middlerware/adminMiddlerware.js";

// Route level middleware

router.post("/changepassword", checkAuthUser);
router.post("/adminprofile", checkAuthUser);

// Public Router

router.post("/register", adminUserCreate);
router.post("/login", adminLogin);

// Login protected Router

router.post("/changepassword", changePassword);
router.get("/adminprofile", adminProfile);
router.post("/reset", adminResetPassword);
router.post("/reset/:id/:token", adminResetPasswordEmail);

export default router;
