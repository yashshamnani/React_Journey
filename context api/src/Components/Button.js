// import React, { useContext } from "react";
// import { myContext } from "../App";
// export const Button = () => {
//   const data = useContext(myContext);
//   return <div style={{ backgroundColor: data.color }}> Button</div>;
// };
import React,{useContext} from 'react'
import { myContext } from '../App'

function Button() {
  const data = useContext(myContext)
  return (
    <div style = {{backgroundColor: data.color}}>Button</div>
  )
}

export default Button