import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
function About() {
    const navigate = useNavigate()
    const goContact = ()=>{
       navigate('/contact')
    }
  return (
    <>
 
   <div>About</div>
   <button onClick={goContact}>Go Contact</button>
  </>
  )
}

export default About