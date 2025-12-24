"use server"

import { connectDB } from "@/lib/db"
import { Contact } from "@/models/contact.model"
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";

const createContact = async (formdata) => {
    try {
        await connectDB();
        const name = formdata.get("name");
        const email = formdata.get("email");
        const subject = formdata.get("subject");
        const message = formdata.get("message");

        if(!name || !email || !subject || !message){
            return {
                success: "false",
                error: "All fields are required",
            }
        }

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
        })

        if(!contact){
            return {
                success: false,
                error: "Something went wrong while creating message"
            }
        }

        return {
            success: true,
            message: "Message sent successfully",
            contactId: contact._id.toString(),


        }
         
    } catch (error) {
        console.error("Error creating contact : ",error);
        return {
            successs: false,
            error: "Something went wrong",
        }
    }
}

const getContacts = async () => {
    try {
       await connectDB();
       const contacts = await Contact.find({}).sort({createdAt: -1}).lean();
       
       if(!contacts){
        return {
            success: false,
            error: "Failed to fetch contacts",
        }
       }

       return {
            success: true,
            error: "Contacts fetched successfully",
            data: contacts,
       }
    } catch (error) {
        console.error("Failed to fetch contacts : ", error);
        return {
            success: false,
            error: "Failed to fetch contacts"
        }
    }
}

const updateContact = async (contactId, status) => {
    try {
        await connectDB();
        const result = await Contact.findByIdAndUpdate(contactId, {status})
        if(!result){
            return {
                success: false,
                error: "Fialed to update data",
            }    
        }
        // revalidatePath("/contacts")
        revalidateTag("contact-stats")

        return {
            success: true,
            message: "Contact updated successfully",
        }
    } catch (error) {
        console.error("Failed to update contacts : ", error);
        return {
            success: false,
            error: "Failed to update contacts"
        }
    }
}

const getContactStats = async () => {
    const getCachedStats = unstable_cache(
        async () => {
            await connectDB();
            const total = await Contact.countDocuments()
            const newCount = await Contact.countDocuments({status: "new"})
            const readCount = await Contact.countDocuments({status: "read"})
            const repliedCount = await Contact.countDocuments({status: "replied"})

            return {total, newCount, readCount, repliedCount}
        },
        ["contact-stats"],
        {tags:["contact-stats"]}
    )

    return getCachedStats()
}

export {createContact,getContacts, updateContact, getContactStats }
// export default getContacts