import mongoose from "mongoose";
import { dbName } from "../constant.js";
export const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URI}${dbName}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed :  ", error);
  }
}