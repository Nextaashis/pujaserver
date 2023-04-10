import mongoose from "mongoose";

const jyotisShema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: Number, required: true, trim: true },
  aboutguru: { type: String, required: true, trim: true },
  image: String
});

const jyotishModel = mongoose.model("jyotish", jyotisShema);

export default jyotishModel;
