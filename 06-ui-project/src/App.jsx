import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users=[
    {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', intro:'', tag:'Satisfied'},
    {img:'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', intro:'', tag:'Underserved'},
    {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', intro:'', tag:'Underbanked'}
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
