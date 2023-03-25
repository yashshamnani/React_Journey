import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
 
   <div className='w-full h-20 bg-black text-xl text-white'>
	   <div className='flex w-full h-20 justify-around items-center'> 
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
	   </div>
   </div>

  )
}

export default Header