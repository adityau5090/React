"use server"
import { db } from "@/lib/db";
import { users } from "../schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { desc } from "drizzle-orm";

const createUser = async (formData) => {

    try {
        const name = formData.get("name")
        const email = formData.get("email")
        const user = await db.insert(users).values({ name, email });

        revalidatePath("/");

        return {
            success: true,
            message: "User created successfully",
        }
    } catch (error) {
        console.log("Error : ", error);
        return {
            success : false,
            error: error.message
        }
    }
}

const getAllUsers = async () => {
    try {
        const allUsers = await db.select().from(users).orderBy(desc(users.createdAt));

        if(!allUsers){
            console.log("Failed to fetch users");
            return {
            success : false,
            error: "Failed to fetch users"
            }
        }

        return {
            success : true,
            message: "Users fetched successfully",
            data: allUsers,
        }
    } catch (error) {
        console.log("Failed to fetch users : ", error);
        return {
            success : false,
            error: error.message
        }
    }
}

const getUserById = async (id) => {
    try {
        const user = await db.select().from(users).where(eq(users.id, id));

        if(!user){
            console.log("Can't find user");
            return {
                success : false,
                error: "Can't find user"
            }
        }
        return {
            success: true,
            message: "User fetched successfully",
            data: user,
        }
    } catch (error) {
        console.log("Faile to fetch user : ", error);
        return {
            success : false,
            error: error.message
        }
    }
}

const updateUser = async (id, formData) => {
    try {
        const name = formData.get("name")
        const email = formData.get("email")  
        const isActive = formData.get("isActive") === "on";
        
        const user = await db.update(users).set({ name, email, isActive, updatedAt: new Date()}).where(eq(users.id, id));

        

        if(!user){
            console.log("Can't update user");
            return {
                success: false,
                error: "Can't update user"
            }
        }

        revalidatePath("/");

        return {
            success: true,
            message: "User updated successfully",
            // data: user,
        }
    } catch (error) {
        console.log("Error in updating user : ", error);
        return {
            success: false,
            error: error.message,
        }
    }
}

const deleteUser = async (id) => {
    try {
        const user = await db.delete(users).where(eq(users.id, id));
        
        if(!user){
            console.log("Can't delete user");
            return {
                success: false,
                error: "Can't delete user"
            }
        }

        revalidatePath("/")

        return {
            success: true,
            message: "User deleted successfully",
        }
    } catch (error) {
        console.log("Error while deleting user : ", error);
        return {
            success: false,
            error: error.message,
        }
    }
}

export {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}