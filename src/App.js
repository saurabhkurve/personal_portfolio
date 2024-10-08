import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <div className="content-container">
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  </div>
  );
}

export default App;