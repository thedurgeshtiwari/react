import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav>
        <h2>Sheryians</h2>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
