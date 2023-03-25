import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./components/Error";
import Shared from "./Shared";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Shared /> } > 
           <Route index element = {<Home /> } /> 
           <Route path="/about" element = {<About />} /> 
           <Route path="/contact" element = {<Contact />} /> 
           <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
