import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
   <>
    <div>Interview Generation</div>
    <Agent userName="you"  userId="user1" type="generate" />
   </>
  )
}

export default page