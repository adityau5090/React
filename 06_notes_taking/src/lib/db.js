import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;

let isConnected = false;

const connectDB = async () => {
    try {

        if (isConnected) {
            console.log("Already connected to database!");
            return;
        }

        const db = await mongoose.connect(MONGODB_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("Database Connected : ", db.connection.host);
    } catch (error) {
        console.error("Database connection failed : ", error);
        process.exit(1);
    }
}

export default connectDB;