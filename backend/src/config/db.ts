import mongoose from "mongoose";

export default async function connectDB() {
  const url = process.env.DATABASE_URL!;
 
  try{
    await mongoose.connect(url);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
}