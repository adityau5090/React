import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'

function App() {
  // const [count, setCount] = useState(0)
  const [queue, setQueue] = useState([])

  const addToQueue = (customer) => {
    console.log(customer)
    setQueue([...queue, {...customer, id: Date.now(), status:'waiting'}])
  }
  const updateStatus = (id,newStatus) => {
    setQueue(queue.map((customer)  => (
      customer.id === id ? {...customer, status: newStatus} : customer
    )))
  }
  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id))
  }


  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col items-center py-14'>
      <header>
        <h1 className='text-purple-600 text-2xl font-semibold text-center py-3'>Queue Management Application</h1>
        <p className='text-gray-300 text-center text-sm pb-4'>Manage your customers efficiently</p>
      </header>
      <main className='w-[70vw] p-3 flex gap-5'>
        <QueueForm onAdd={addToQueue}/>
        <QueueDisplay queue={queue} OnUpdateStatus={updateStatus} onRemove={removeFromQueue} />
      </main>
    </div>
  )
}

export default App
