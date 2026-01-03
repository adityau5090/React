import { serial, text, timestamp, boolean, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    email:text("email").notNull().unique(),
    isActive:boolean("isActive").default(true),
    createdAt:timestamp("createdAt").defaultNow(),
    updatedAt:timestamp("updatedAt").defaultNow(),
})