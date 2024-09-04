import React from 'react'
import { useSelector } from 'react-redux'

function UserName() {
  const username=useSelector((state)=>state.user.userName)
  // if(!username) return null
  return (
    <div>
      <p className='text-sm font-semibold hidden md:block '>{username}</p>
    </div>
  )
}

export default UserName
 