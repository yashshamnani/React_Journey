// import logo from './logo.svg';
// import './App.css'; 
 
import Card from "./card"
import  Axios  from "axios";
import React, { useEffect, useState } from "react"
// const [details,setDetails] = useState({})
 

function App() {

  const [details, setDetails] = useState({})

  let list = ["yash", "Anurag", "manas"]
  useEffect(()=> {
    fetechDetails();
}, [])
  // useEffect()
  // useEffect accepts two arguments. The second argument is optional.
  // useEffect(<function>, <dependency>)

  const fetechDetails = async () => {
    const {data} = await Axios.get('https://randomuser.me/api')
    console.log("RESPONSE", data);
    
    const details = data.results[0]
    setDetails(details)
  }

  return (
    <> 
    <div>
      App
      <Card myname = "Yash" list = {list}  details = {details}/>
    </div>
    <button
    onClick={fetechDetails}
    >get Details</button>
    </>
  );
}

export default App;
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
//   const updateColor = () => {
//     setCar(   
//         { ...car, color: "blue" }
//     );
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// export default Car;