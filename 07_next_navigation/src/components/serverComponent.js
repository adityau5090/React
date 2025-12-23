import React from 'react'
import { createUser } from '../../action'

const ServerComponent = () => {
    // async function createUser(formData) {
    //     "use server"
    //     const  name = formData.get("name")
    //     console.log(name)

    // }


  return (
    <div className='m-5'>
      <form action={createUser}>
        <input className='bg-white text-black' name='name' type="text"  />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default ServerComponent
