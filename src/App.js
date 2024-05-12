import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  
  return (
    <>
        <main className="main">
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="About" element={<About />} exact/>
              <Route path="Contact" element={<Contact/>} exact/> 
            </Routes>
        </main>
    </>
  );
}

export default App;