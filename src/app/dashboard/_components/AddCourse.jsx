"use client"

import { useUser } from '@clerk/nextjs'
import React from 'react'

const AddCourse = () => {
  const {user} = useUser
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-3xl'>Hello, <span>{user?.fullName}</span></h2>
        <p className='text-sm text-gray-500'>Create new course with AI, share with friends and Earn from it.</p>
      </div>
      <Button>+ Create AI Course</Button>
    </div>
  )
}

export default AddCourse
