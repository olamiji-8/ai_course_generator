
import Image from 'next/image'
import { Button } from '../../components/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-0 shadow-sm bg-gray-200'>
     <Image src="/Ai.png" alt="Ai_Gen Logo" width={100} height={100} />
       <Button className='mt-5 mr-10' >Get Started</Button> 
    </div>
  )
}

export default Header
