import React from 'react'
import RightCard from './RightCard'

const RightComponent = (props) => {
    console.log(props);
  return (
    <div className='h-full flex flex-nowrap gap-10 overflow-x-auto w-2/3  p-4'>
       {props.users.map(function(user, index){
        return <RightCard key={index} user={user} index={index}/>
       })}
    </div>
  )
}

export default RightComponent ; 
