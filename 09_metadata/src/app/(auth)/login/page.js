import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      Login Page
      <Link href="/signup">
      <button className='my-7 py-2 px-5 bg-gray-200 text-black rounded-lg mx-3'>Sign up</button>
      </Link>
    </div>
  )
}

export default Login
