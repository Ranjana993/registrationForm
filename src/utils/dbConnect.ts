import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) return;
  try {
    await mongoose.connect(process.env.MONGO_URL!)
    console.log("Successfully connected to database ");

  } catch (error: any) {
    throw new Error("failed to connect to database ", error)
  }
}

export default connectDb

