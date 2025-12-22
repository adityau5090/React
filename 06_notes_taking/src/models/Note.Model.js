import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100,
    },
    content: {
        type: String,
        required: true,
        maxLength: 200,
    },
}, {timestamps: true})


// export default mongoose.models.Note || mongoose.model("Note", NotesSchema);
const Note =  mongoose.models.Note || mongoose.model("Note", notesSchema);

export { Note }