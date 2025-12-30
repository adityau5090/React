"use server"

export const runtime = "nodejs";

import { db } from "@/lib/db"

export const seedDB = async () => {
    await db.post.createMany({
        data: [
            {title: "Hello Prisma"},
            {title: "Prisma + Next.js is easy"},
            {title: "watching arafta for the plot"} 
        ]
    })

    console.log("[seed] Data seeded successfully!");
}