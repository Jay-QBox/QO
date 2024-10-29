// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services'; // Make sure you have this component
import Home from './components/Home';

import Gruha from './components/Gruha';
import Vihara from './components/Vihara';
import InstaMed from './components/InstaMed';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ag" element={<Gruha />} />
          <Route path="/services/av" element={<Vihara />} />
          <Route path="/services/im" element={<InstaMed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
