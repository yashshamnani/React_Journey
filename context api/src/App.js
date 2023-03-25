 
// import { useState, createContext } from "react";

// import Navbar from "./Components/Navbar";
// import HeroSection from "./Components/HeroSection";

// export const myContext = createContext();

// function App() {
//   const [name, setName] = useState("");
//   const [color, setColor] = useState("");

//   const myname = (event) => {
//     setName(event.target.value);
//   };

//   const myColor = (event) => {
//     setColor(event.target.value);
//   };

//   return (
//     <myContext.Provider value={{ name, color }}>
//       <Navbar />
//       <form>
//         <input
//           type={"text"}
//           placeholder="Enter User Name"
//           value={name}
//           onChange={myname}
//         />
//         <input
//           type={"text"}
//           placeholder="ENter A color Name"
//           value={color}
//           onChange={myColor}
//         />
//       </form>
//       <HeroSection /> 
//     </myContext.Provider>
//   );
// }

// export default App;

 import React,{useState,createContext} from 'react'
 import Navbar from './Components/Navbar'
 import HeroSection from './Components/HeroSection'

 export const myContext = createContext()

 function App() {
 
   const [name,setName] = useState("")
   const [color,setColor] = useState("")

   const myName = (e) =>{
    setName(e.target.value)
   }
   const myColor = (e) =>{
    setColor(e.target.value)
   }
   
    
   return (
    <myContext.Provider value = {{name,color}}> 
         <Navbar />
     <form>
        <input type={"text"} placeholder="Enter User Name" value={name} onChange={myName}/>
        <input type={"text"} placeholder="Enter A Color Name" value={color} onChange={myColor}/>
     </form>
     <HeroSection /> 
     </myContext.Provider>
   )
 }
 
 export default App