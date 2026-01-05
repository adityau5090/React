"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Edit } from "lucide-react"
import { useBear } from "@/store/userStore"
import { ConsoleLogWriter } from "drizzle-orm"


const UpdateUser = ({ user }) => {
  const [selectedUser, setSelectedUser] = useState(null)
  // console.log("User : ", user);
  
  const selectUser = useBear((state) => state.setSelectedUser);
  const print = (e) => {
    e.preventDefault();
    selectUser(user)
    // console.log(user.id)
    // console.log(selectedUSer)
  }

  return (
    <form action="">
      <Button variant='default' size='sm' type="submit" onClick={(e) =>  print(e)} className="bg-green-600 hover:cursor-pointer">
        <Edit className='w-2 h-2' />
      </Button>
    </form>
  )
}

export default UpdateUser
