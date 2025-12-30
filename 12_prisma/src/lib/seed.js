import { db } from "./db"

async function main() {
    await db.post.createMany({
        data:[
            {title: "Hello Prisma"},
            {title: "Prisma + Next.js is easy"},
            {title: "watching arafta for the plot"}
        ]
    })

    console.log("data seeded successfully!")
    
}

export default main