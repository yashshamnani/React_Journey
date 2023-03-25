import React from 'react'
import { useNavigate } from 'react-router-dom'
 
function Contact() {
    const navigate = useNavigate()
  return (
    <>
    
     <div>Contact</div>
     <button onClick={()=>{
     navigate('/about')
     }}>Go About</button>
    </>
     
  )
}

export default Contact