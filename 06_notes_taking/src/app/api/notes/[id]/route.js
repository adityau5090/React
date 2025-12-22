import connectDB from "@/lib/db";
import { Note } from "@/models/Note.Model";
import { updateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        // console.log("id : ", id)
        await connectDB();
        const del = await Note.findByIdAndDelete(id);

        if (!del) {
            return NextResponse.json({ success: false, error: "Note not found" }, { status: 404 })
        }
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 })
    }
}
export async function PUT(request, { params }) {
    try{
        const { id } = await params;
        await connectDB();

        const body = await request.json();
        const updateNote = await Note.findByIdAndUpdate(
            id,
            {...body},
            {new: true, runValidators: true}
        )
        if (!updateNote) {
            return NextResponse.json({ success: false, error: "Note not found" }, { status: 404 })
        }
        return NextResponse.json({ success: true }, { status: 200 })

    }catch (error){
        return NextResponse.json({success : true, data : updateNote},{ status: 400 })
    }
}