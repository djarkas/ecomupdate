 import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 import Home from './pages/Home';
 import Contact from './pages/Contact';
 import Drip from './pages/Drip';
 import Filter from "./components/Filter";
 import Data from "./Drip.json";
// import { Router, Route } from 'react-router-dom';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
}from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
 
      <Navbar />
      <Footer/>
      <Routes>
     <Route path ="/" element = {<Home/>}></Route>
   
     <Route path ="/drip" element = {<Drip/>}></Route>
     <Route path ="/contact" element = {<Contact/>}></Route>
     </Routes>
     </div>

</Router>
    
  );
}

export default App;





