import mongoose from "mongoose";

const connectDB = async () => {
   try {  
     const mongoURI = `${process.env.MONGODB_URI}/ai-image`;
     await mongoose.connect(mongoURI);
     console.log("Database Connected");
    } 
    catch (error) {
         console.log(error);
    }
}

export default connectDB;