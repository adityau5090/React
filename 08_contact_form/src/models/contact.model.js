import mongoose,{ Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [100, "Name cannot be exceed 25 character"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter  a valid email"],
    },
    subject: {
        type: String,
        trim: true,
        required: [true, "Subject is required"],
        maxlength: [150, "Subject can't exceed 150 characters"],
    },
    message: {
        type: String,
        trim: true,
        required: [true, "Message is required"],
        maxlength: [500, "Message can't exceed 500 characters"],
    },
    status: {
        type: String,
        enum: ["new","read","replied"],
        default: "new",
    },
},{timestamps: true})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export { Contact }