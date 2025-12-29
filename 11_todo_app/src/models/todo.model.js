import mongoose, { Schema } from "mongoose";
import { boolean, maxLength, trim } from "zod";



const todoSchema = new Schema({
    title: {
        type: String,
        required: [true,"Title is required"],
        trim: true,
        maxLength: [50, "Title can't exceed 50 characters"]
    },
    description: {
        type: String,
        // required: [true, "Description is required"],
        trim: true,
        maxLength: [100, "Description can't exceed 100 characters"],
    },
    completed: {
        type: boolean,
        default: false,
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
    }
},{timestamps: true})

export const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);