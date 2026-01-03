import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { createUser } from '../../actions/serverActions'

const UserForm = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Add New Ueer</CardTitle>
        </CardHeader>
        <CardContent>
            <form action={createUser} className='space-y-4'>
                <div className='space-y-2'>
                   <Label htmlFor="name">Name</Label> 
                   <Input id="name" name="name" type="text" required />
                </div>
                <div className='space-y-2'>
                   <Label htmlFor="email">Email</Label> 
                   <Input id="email" name="email" type="email" required />
                </div>
                {/* {user && (
                    <div className='flex items-center'>
                        <Checkbox id="isActive" name="isActive"  />
                        <Label htmlFor="isActive">Active</Label>
                    </div>
                )} */}
                <div className='flex '>
                    <Button type="submit" className="flex-1">
                        Create
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
  )
}

export default UserForm
