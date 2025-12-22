import connectDB from "@/lib/db";
import { Note } from "@/models/Note.Model";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const notes = await Note.find({}).sort({createdAt:-1});

         return NextResponse.json({success: true, data: notes},{status: 201})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message},{status: 400})
    }
}
export async function POST(request) {
    try {
        await connectDB();
        const {title,content} = await request.json();
        const note = await Note.create({title,content});

        return NextResponse.json({success: true, data: note},{status: 201})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message},{status: 400})
    }
}
