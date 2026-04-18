import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const[userdata, setUserData] = useState([])

  const[index, setIndex] = useState(1)

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
    //console.log(response)
    setUserData(response.data)
  }

    useEffect(function(){
      getData()
    },[index])

  let printUserData = <h3 className='text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'>Loading....</h3>

  if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){

      return <div key={idx}>
         <a href={elem.url} target=''>
            <div className='h-40 w-44 bg-white overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            
          </div>
         </a>
        <h2 className='font-bold'>{elem.author}</h2>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      
      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black border px-4 py-2 font-semibold rounded'
        onClick={()=>{
          if(index>1){
            setUserData([])
            setIndex(index-1)
          }
        }}
        >Prev</button>

        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black border px-4 py-2 font-semibold rounded'
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default App
