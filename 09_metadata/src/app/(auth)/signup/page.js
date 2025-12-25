import React from 'react'
import Link from 'next/link'

export const metadata = {
    title : "Signup",
}
const Signup = () => {
  return (
    <div>
      Signup Page
      <Link href="/login">
      <button className='my-7 py-2 px-5 bg-gray-200 text-black rounded-lg mx-3'>Login</button>
      </Link>
    </div>
  )
}

export default Signup
