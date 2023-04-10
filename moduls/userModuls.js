import mongoose from "mongoose";

const adminUser = new mongoose.Schema({
  name: { type: String, requred: true, trim: true },
  email: { type: String, requred: true, trim: true },
  password: { type: String, requred: true, trim: true },
  confirmPassword: { type: String, requred: true, trim: true },
  tc: { type: Boolean, required: true },
});

const adminUserModel = mongoose.model("adminuser", adminUser);

export default adminUserModel;
