import express from "express";
import dotenv from "dotenv";
import postsRouter from './routes/posts.js'; 
import { connectDB } from "./db/connection.js";
import cors from "cors";

dotenv.config();
//express app
const app = express();

// middleware
app.use(cors()); 
app.use(express.json()); 
app.use("/api/v1/posts", postsRouter);

const start = async () => {
    const port = process.env.PORT || 8888;
  try {
    connectDB(process.env.MONGOURL);
    app.listen(port, () => {
      console.log("Server listening to port....", port);
    });
  } catch (error) {
    console.log("Error starting in server...");
  }
};
start();