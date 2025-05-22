import mongoose from "mongoose";

export default async function connectDB() {
  const url = "mongodb://127.0.0.1/example";
 
  try{
    await mongoose.connect(url);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  const dbConnection = mongoose.connection;
  dbConnection.db?.dropDatabase();
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
}