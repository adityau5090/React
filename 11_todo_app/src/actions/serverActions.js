"use server"
import { connectDB } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Todo } from "@/models/todo.model";
import { createTodoSchema } from "@/validations/todo.validation";
import { success } from "zod";


export async function createTodo(data){
    try {
        const validatedData = createTodoSchema.parse(data);

        await connectDB();

        const todo = await Todo.create(validatedData)

        revalidatePath("/");

        return {
            success: true,
            data: JSON.parse(JSON.stringify(todo))
        }
    } catch (error) {
        console.error("Error creating todo : ", error)
        return {
            success: false,
            error: error ? error.message : "Failed to create todo",
        }
    }
}

export async function getTodos() {
    try {
        await connectDB();

        const todos = await Todo.find({}).sort({createdAt: -1}).lean()

        if(!todos){
            throw new Error("Error while fetching todos");
        }
        return{
            success: true,
            message: "Todos fethed successfully",
            data: JSON.parse(JSON.stringify(todos))
        }
    } catch (error) {
        console.error("Error while fetching todos : ", error);
        return {
            success: false,
            message: "Error while fetching todos",
        }
    }
}

export async function toggleTodos(id){
    try {
        await connectDB();

        const todo = await Todo.findById(id)

        if(!todo){
            return {
                success: false,
                message: "Todo not found with this id",
            }
        }

        todo.completed = !todo.completed

        await todo.save();

        revalidatePath("/")

        return {
            success: true,
            massage: "Todo updated successfully",
            data: JSON.parse(JSON.stringify(todo))
        }
    } catch (error) {
        console.error("Error updating todos : ", error)
        return {
            success: false,
            message: error? error.message : "Error updating todo",
        }
    }
}

export async function deleteTodo(id){
    try {
        await connectDB();

        const deletedTodo = await Todo.findByIdAndDelete(id)

        if(!deletedTodo){
            return {
                success: false,
                message: "Can't find todo"
            }
        }

        revalidatePath("/");

        return {
            success: true,
            message: "Todo deleted successfully",
            data: JSON.parse(JSON.stringify(deletedTodo))
        }
    } catch (error) {
        console.error("Error deleting todos : ", error)
        return {
            success: false,
            message: error? error.message : "Error deleting todo",
        }
    }
}