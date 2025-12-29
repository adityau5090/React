import {z} from "zod";

export const createTodoSchema = z.object({
    title: z.string().min(1,"Title is required").max("50","Title must be less than 50 characters").trim(),
    description: z.string().min(5, "Description is required").max("100","Description can be less than 100 characters").optional(),
    priority: z.enum(["low", "medium","high"]).default("medium")
})