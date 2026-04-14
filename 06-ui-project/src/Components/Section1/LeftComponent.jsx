import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Hero from './Hero'
import Arrow from './Arrow'

const LeftComponent = () => {
  return (
    <div className='flex flex-col justify-between h-full w-1/3 '>
        <Hero />
        <Arrow />
      
    </div>
  )
}

export default LeftComponent
