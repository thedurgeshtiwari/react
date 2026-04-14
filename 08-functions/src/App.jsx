import React from 'react'

const App = () => {
  function onClicked(val){
    console.log(val)
  }
  return (
    <div>
      <input onChange={function(elem){
        onClicked(elem.target.value)
      }} type="text" placeholder='Enter your name' />
      <div onMouseMove={function(elem){
        console.log(elem.pageX)
      }} className="page">
        
      </div>
    </div>
  )
}

export default App
