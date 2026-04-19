import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      
      <button onClick={()=>{
        props.setTheme('dark')
      }}>Change theme</button>
    </div>
  )
}

export default Navbar
