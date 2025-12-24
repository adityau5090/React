import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ContactList from '@/components/ContactList'
import ContactStats from '@/components/ContactStats'

const Contacts = () => {
  return (
    <main className='min-h-screen py-8 px-4'>
        <div className='container mx-auto max-w-4xl'>
            <div className='mb-8'>
                <Link href={"/"}>
                    <Button
                    variant='outline' 
                    size='sm'
                    className={"mb-4 bg-transparent"} >Back to Form</Button>                
                </Link>
                <ContactStats />
                <ContactList />
                
            </div>
        </div>
    </main>
  )
}

export default Contacts
