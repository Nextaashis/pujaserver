import mongoose, { mongo } from 'mongoose';


const adminModulSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  comfrimpassword: { type: String, required: true, trim: true },
});

const adminModel = mongoose.model("admin", adminModulSchema);

export default adminModel;
