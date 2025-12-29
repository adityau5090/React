import mongoose from "mongoose";

const MONGODB_URI =process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("Plese define the MongoDB URI");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn:null, promise:null}
}

const connectDB = async () => {
    if(cached.conn){
        return cached.conn
    }
                                    
    if(!cached.conn){
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose)=> {
            console.log("Database connected")
            return mongoose
        })
    }
    try {
        cached.conn = await cached.promise

    } catch (error) {
        cached.promise = null
        console.error("Database connection failed! : ", error)
        process.exit(1)
    }

    return cached.conn
}

export { connectDB }