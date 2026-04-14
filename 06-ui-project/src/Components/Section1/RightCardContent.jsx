import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
      <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.index+1}</h2>
      
      <div>
        <p className='font-semibold text-lg leading-normal mb-20 text-white drop-shadow-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima alias iste jdjij woecm!
        </p>
        
        <div className='flex justify-between items-center'>
          <button className='bg-blue-600 text-white font-semibold px-7 py-2 rounded-full'>
            {props.tag}
          </button>
          
          <button className='bg-blue-600 text-white font-semibold p-3 rounded-full flex justify-center items-center'>
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent