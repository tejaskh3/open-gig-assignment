import mongoose from "mongoose";

export const connectDB = async (url) =>{
    try {
        await mongoose.connect(url);
        console.log("Server connected to DB successfully.")
    } catch (error) {
        console.log("Error connecting with database", error.message);
    }
}

