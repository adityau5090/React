import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { deleteUser, getAllUsers } from '../../actions/serverActions'
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

const UserList = async () => {
    const response = await getAllUsers();

    const users = Array.isArray(response?.data) ? response.data : []
    // console.log("Users :",users);

    if (!Array.isArray(users) || users.length == 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='text-center text-muted-foreground'>
                        {!Array.isArray(users) ? "Database not connected" : "Users not found"}
                    </p>

                </CardContent>
            </Card>
        )
    }

    return (
        <div className='space-y-2'>
            {users.map((user) => (
                <Card key={user.id} className="shadow-xl hover:ring hover:ring-blue-600">
                    <CardContent>
                        <div className='flex items-center justify-between px-4'>
                            <div>
                                <div className='flex gap-3 mb-2'>
                                    <h3 className='font-medium text-sm'>{user.name}</h3>
                                    <Badge variant={user.isActive ? "default" : "secondary"}>
                                        {user.isActive ? "Active" : "Inactive"}
                                    </Badge>
                                </div>
                                <p className='text-muted-foreground text-xs'>{user.email}</p>
                               <p className='text-muted-foreground text-xs'>Created: {user.createdAt && new Date(user.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <form action={deleteUser.bind(null, user.id )}>
                                    <Button variant='destructive' size='sm' type="submit" className="hover:cursor-pointer">
                                        <Trash2 className='w-4 h-4'/>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default UserList
