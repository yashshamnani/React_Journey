 
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shared from './components/Shared';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Shared /> } > 
         <Route path = 'Home'  element = {<Home /> } /> 
         <Route path="about" element = {<About />} /> 
         <Route path="contact" element = {<Contact />} /> 
         
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
