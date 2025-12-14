import React from 'react'

const QueueDisplay = ({queue,OnUpdateStatus,onRemove}) => {

    const getStatusColor = (status) => {
        switch (status) {
            case 'waiting':
                return "orange";
            case 'serving':
                return "bg-green-500";
            case 'completed': 
                return "bg-red-600";
            default: 
                return "orange";        
        }
    } 
  return (
    <div className='mx-3 w-full bg-gray-800 px-4 py-2 rounded-lg'>
       <h2 className='text-xl font-semibold'>Current Queue</h2>
       {queue.length === 0 ? (<p className='w-full flex items-center justify-center'>No customer data</p>) :
        (
            <div className=''>
                {queue.map((customer) => (
                    <div key={customer.id} 
                    className='bg-black w-full px-4 py-2 flex justify-between items-center my-2'>
                        <div>
                            <h3 className='text-lg font-medium'>{customer.name}</h3>
                            <p className='text-sm text-gray-500 font-medium'>{customer.service}</p>
                            <span style={{color: getStatusColor(customer.status)}} className='text-sm font-semibold'>
                                {customer.status}
                            </span>
                        </div>
                        <div className='flex gap-2'>
                            {customer.status === "waiting" && (
                                <button className='bg-green-400 text-black px-2 py-1 rounded-lg cursor-pointer'
                                onClick={() => OnUpdateStatus(customer.id,"serving")}
                                >Serve</button>
                            )}
                            {customer.status === "serving" && (
                                <button className='bg-red-400 text-black px-2 py-1 rounded-lg cursor-pointer'
                                onClick={() => OnUpdateStatus(customer.id,"completed")}
                                >Complete</button>
                            )}
                            <button className='bg-gray-400 text-black px-2 py-1 rounded-lg cursor-pointer'
                                onClick={() => onRemove(customer.id)} 
                            >remove</button>
                        </div>
                    </div>
                ))}
            </div>
        )} 
    </div>
  )
}

export default QueueDisplay
