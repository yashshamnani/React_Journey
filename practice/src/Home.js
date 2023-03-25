import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
      <>
        <h1>Home</h1>
        <button onClick={()=>{
            navigate(-1)
        }}>Go Back</button>
      </>
      
        
     

  )
}

export default Home