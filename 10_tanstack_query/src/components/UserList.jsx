"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

async function fetchUsers() {
    const response = await fetch("/api/users")
    const result = await response.json();
    // console.log(result)
    return result;
}
const UsersList = () => {
    
    const { data, isLoading,isError } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    })
    // console.log(data)
    if (isLoading) return <p className='text-xl font-semibold'>Loading...</p>;
    if (isError) return <p>Error fetching users</p>;

    const users = data.data;
    console.log(users)
  return (
    <Card>
        <CardHeader>
            <CardTitle>User List ( useQuery Example )</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='space-y-3'>
                {users?.map((user) => (
                    <div key={user.id}  className='flex items-center justify-start p-2 border rounded-lg'>
                         <div>
                            <div className='text-xl font-semibold'>{user.name}</div>
                            <div className='text-sm text-muted-foreground'>{user.email}</div>
                         </div>
                    </div>

                ))}
            </div>
        </CardContent>
    </Card>
  )
}

export default UsersList
