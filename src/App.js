import React from 'react';
import Navbar from "./Navbar.js"
import Home from "./Home.js";
import About from "./About.js";
import Photography from "./Photography.js";
import FooterContent from './FooterContent.js';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
  <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/photography" element={<Photography/>}/>
      </Routes>
      <FooterContent/>
  </div>)
}
export default App;
