"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardTitle, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useMutation, useQueryClient } from '@tanstack/react-query'

async function createUser(userData){
    const response = await fetch("/api/users", {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(userData)
    })

    return response.json();
}
const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ["users"]})
            setEmail("")
            setName("")
        }
    })
    const handleUser = (e) => {
        e.preventDefault();
        if(!name || !email){
            return;
        }
        if(name && email){
            mutation.mutate({name, email})
        }
    }
  return (
    <Card>
        <CardHeader>
            <CardTitle>Add User ( useMutation    Example )</CardTitle>
        </CardHeader>
        <CardContent>
            <form action="" onSubmit={handleUser} className='space-y-3'>
                <Input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} required />
                <Input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required  />
                <Button type="submit" disabled={mutation.isPending} >
                    {
                        mutation.isPending ? "Adding..." : "Add User"
                    }
                </Button>
            </form>
        </CardContent>
    </Card>
  )
}

export default AddUser
