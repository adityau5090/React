import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;

let isConected = false;

const connectDB = async () => {
    try {
        if(isConected){
            console.log("Already connected to database");
            return;
        }
        const db = await mongoose.connect(MONGODB_URI);
        isConected = db.connections[0].readyState === 1;
        console.log("DB connected :", db.connection.host);
    } catch (error) {
        console.error("MongoDB connection failed : ", error);
        process.exit(1);
    }
}

export  { connectDB }