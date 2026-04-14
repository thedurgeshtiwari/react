import React from 'react'
import Card from './componenets/Card'

const App = () => {
  return (
    <div className='parent'>
      
      
      <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1459802071246-377c0346da93?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww'/>
      <Card user='Durgesh' age={20} img='https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D'/>
      <Card user='Ayush' age={350} img='https://images.unsplash.com/photo-1611496855431-6501b335c67f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>
  )
}

export default App
