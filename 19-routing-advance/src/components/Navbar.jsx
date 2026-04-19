import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex px-8 py-4 bg-cyan-500 justify-between'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-8 font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        
      </div>
    </div>
  )
}

export default Navbar
