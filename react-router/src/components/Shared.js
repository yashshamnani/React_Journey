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
       {/* The <Outlet> renders the current route selected. */}
       <Cards />
       <Footer />
      </>
      
        
     

  )
}

export default Shared