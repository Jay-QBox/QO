// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services'; // Make sure you have this component
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Card from './components/Card';
import Gruha from './components/Gruha';
import Vihara from './components/Vihara';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/ag" element={<Gruha />} />
          <Route path="/services/av" element={<Vihara />} />
          <Route path="/services/im" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
