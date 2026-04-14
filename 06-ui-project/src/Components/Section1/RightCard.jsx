import React from 'react'
import { ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-70 bg-amber-300 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.user.img}alt="" />
        <RightCardContent tag={props.user.tag} index={props.index}/>
        
      
    </div>
  )
}

export default RightCard
