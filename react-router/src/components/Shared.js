import React from 'react'
import { Outlet } from 'react-router-dom'
import Cards from './Cards'
 
import Footer from './Footer'
import Header from './Header'

function Shared() {
  return (
      <>
       <Header />
       <Outlet />
       <Cards />
       <Footer />
      </>
      
        
     

  )
}

export default Shared