import mongoose from "mongoose";

const dbconection = async (DATABASE_URL) => {
  try {
    const data = await mongoose.connect(DATABASE_URL);
    console.log("Database connention .");
  } catch (error) {
    console.log("Database connention error.");
  }
};

export default dbconection;
