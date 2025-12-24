// "use client"
import React from 'react'
import { getContacts, updateContact } from '../../actions'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Mail } from 'lucide-react'
import { Button } from './ui/button'

const ContactList = async () => {
    const data = await getContacts()
    const contacts = data.data
    // console.log(contacts);  

    const handleUpdate = async (formdata) => {
        console.log(formdata)
    }
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Contact Message</h2>
        <Badge>{contacts.length} messages</Badge>
      </div>

      {contacts.length === 0 ? (
        <Card>
            <CardContent className='flex flex-col items-center justify-center py-10'>
                <Mail className='h-12 w-12 text-muted-foreground mb-4' />
                <h3 className='text-lg font-semibold mb-2'>No Messages Yey</h3>
            </CardContent>
        </Card> ) : (
            <div className='grid gap-4'>
                {
                    contacts.map((contact) => (
                        <Card key={contact._id}>
                            <CardHeader className="pb-3">
                                <div className='flex  items-start justify-between'>
                                    <div>
                                        <CardTitle className="text-lg">{contact.subject}</CardTitle>
                                        <p className='text-sm text-muted-foreground'>
                                            From: {contact.name} ({contact.email})
                                        </p>
                                    </div>
                                    <Badge variant={contact.status === 'new' ? 'default' : 'secondary'}>
                                        {contact.status}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className='text-sm text-muted-foreground mb-4'>{contact.message}</p>
                                <div className='border-t pt-4 flex items-center justify-between'>
                                    <p className='text-xm text-muted-foreground  '>{new Date(contact.createdAt).toLocaleDateString()}</p>

                                    <div className='flex gap-2'>
                                        {contact.status === 'new' && (
                                            <form action={
                                                async () => {
                                                    "use server"
                                                    await updateContact(contact._id, "read")
                                                }
                                            }>
                                                <Button type='submit' size='sm' variant='outline' className='cursor-pointer'>Mark as Read</Button>
                                            </form>
                                        )} 
                                        {contact.status === 'read' && (
                                            <form action={
                                                async () => {
                                                    "use server"
                                                    await updateContact(contact._id, "replied")
                                                }
                                            }>
                                                <Button type='submit' size='sm' variant='outline' className='cursor-pointer'>Mark as Replied </Button>
                                            </form>
                                        )} 
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        )}
    </div>
  )
}

export default ContactList
