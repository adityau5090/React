import { NextResponse } from "next/server"

let users = [
    { id: 1, name: 'John Doe', email: "john@gmail.com"},
    { id: 2, name: 'Ates', email: "ates@gmail.com"},
    { id: 3, name: 'Tamanna', email: "tamanna@gmail.com"},
]

export async function GET(){    
    await new Promise(resolve => setTimeout(resolve, 800));
    return NextResponse.json({ data : users})
}

export async function POST(request) {
    const body = await request.json();
    // console.log(body);
    const newUser = {
        id: Date.now(),
        name: body.name,
        email: body.email,
    }

    users.push(newUser);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return NextResponse.json(newUser);
}