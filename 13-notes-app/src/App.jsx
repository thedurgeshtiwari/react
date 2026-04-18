import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(title,details)

    setTitle('')
    setDetails('')

    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(copyTask)
  }

  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')

  const [task, setTask]=useState([])

  const deleteNote = (idx)=>{
      const copyTask=[...task]
      copyTask.splice(idx,1)
      setTask(copyTask)
      
  }

  return (
    <div className='min-h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='p-10 flex gap-4 items-start flex-col lg:w-1/2'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input value={title} 
            onChange={(e)=>{
              setTitle(e.target.value)
              
            }}
            className='outline-none w-full px-5 py-2 border-2 rounded' 
            type="text" 
            placeholder='Enter notes heading' 
          />

          <textarea className='outline-none w-full px-5 py-2 h-20 border-2 rounded' type="text" placeholder='write details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button className='w-full active:bg-gray-500 bg-white text-black px-5 py-2 border-2 rounded'>Add Notes</button>
        
        
      </form>
      <div className='lg:border-l-2 lg:w-1/2 gap-5 p-10'>

      <h1 className='font-bold text-4xl'>Your Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>

          {task.map(function(elem,idx){
            return <div key={idx} className="flex flex-col justify-between text-black h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] p-5">
              
              <div>
                <h3 className='mt-3 leading-tight font-bold text-2xl'>{elem.title}</h3>
                <p className='mt-1 text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='active:scale-95 rounded w-full bg-red-500 font-bold text-xs py-1'>Delete</button>

            </div>
            
          })}
          

        </div>
      </div>
    </div>
  )
}

export default App
