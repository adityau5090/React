import React, { useState } from 'react'
import {FaUserPlus} from "react-icons/fa"

const QueueForm = ({onAdd}) => {
    const [name, setName] = useState("")
    const [service, setService] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name.trim() || !service) return

        onAdd({name, service})
        setName("")
        setService("")
    } 
  return (
    <div className='bg-gray-800 w-[19vw] rounded-lg py-3 px-5 h-[35vh]'>
        <form onSubmit={handleSubmit}>
            <h2 className='text-lg font-semibold text-purple-600'>Add to queue</h2>
            <div>
                <input type="text"
                placeholder='Customer name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border border-gray-500 py-1 px-1 my-2 rounded-md w-full'
                />
            </div>
            <div>
                <select value={service} onChange={(e) => setService(e.target.value)} name="" id="" 
                className='border border-gray-500 py-1 px-1 my-2 rounded-md w-full'>
                    <option value="">Select Service</option>
                    <option value="consultation">consultation</option>
                    <option value="payment">payment</option>
                    <option value="support">support</option>
                </select>
            </div>
            <button type='submit' className='flex gap-2 items-center justify-center bg-purple-600 w-full py-1 my-2 rounded-md cursor-pointer'>
                <FaUserPlus/> Add Customer</button>
        </form>
    </div>
  )
}

export default QueueForm
