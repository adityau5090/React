import React from 'react'
import { getContactStats } from '../../actions'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const ContactStats = async () => {
    const stats = await getContactStats()
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-6'>
      <Card>
        <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium'>Total</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='text-2xl font-bold'>{stats.total}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium'>New</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='text-2xl font-bold text-blue-600'>{stats.newCount}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium'>Read</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='text-2xl font-bold text-yellow-400'>{stats.readCount}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium'>Replied</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='text-2xl font-bold text-green-400'>{stats.repliedCount}</div>
        </CardContent>
      </Card>

      
    </div>
  )
}

export default ContactStats
