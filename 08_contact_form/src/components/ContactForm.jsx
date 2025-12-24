"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { createContact } from '../../actions'

const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = async (formdata) => {
        setIsSubmitting(true);
        setMessage("")

        const result = await createContact(formdata)
        // console.log(result);
        if(result.success){
            setMessage("Message sent successfully!")

            const form = document.getElementById("contact-form")
            form.reset()
        }else{
            setMessage(result.error || "Something went wrong")
        }

        setIsSubmitting(false)
    }

    return (
        <Card className="w-full max-w-2xl mx-auto hover:ring-1">
            <CardHeader>
                <CardTitle>Contact us</CardTitle>
            </CardHeader>
            <CardContent>
                {
                    message && (
                        <div className={`mb-6 px-4 py-2 rounded ${message.includes("success") ? "bg-green-100 text-green-500" : "bg-red-100 text-red-600"}`}>
                            {message}
                        </div>
                    )
                }
                <form id='contact-form' action={handleSubmit} className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" type="text" required disabled={isSubmitting} className="hover:ring-1 hover:ring-blue-600" />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required disabled={isSubmitting} className="hover:ring-1 hover:ring-blue-600" />
                        </div>
                    </div>    
                        <div className='space-y-2'>
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" name="subject" type="text" required disabled={isSubmitting} className="hover:ring-1 hover:ring-blue-600" />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" type="text" required disabled={isSubmitting} className="hover:ring-1 hover:ring-blue-600 min-h-[20vh]" />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    
                </form>
            </CardContent> 
        </Card>
    )
}

export default ContactForm
