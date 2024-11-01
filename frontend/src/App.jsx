// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";
import Gruha from "./components/Gruha";
import Vihara from "./components/Vihara";
import InstaMed from "./components/InstaMed";
import Login from "./components/Login";
import Oppertunities from "./components/Oppertunities/Oppertunities";
import Strategies from "./components/Strategies/Strategies";
import PandG from "./components/PandG";
import Analysis from "./components/Analysis";
import Revenue from "./components/Revenue";
// import OppertunitiesSingle from "./components/Oppertunities/OppertunitiesSingle";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("sessionToken"));
    if (
      session &&
      session.token === "logged_in" &&
      Date.now() < session.expiration
    ) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const session = JSON.parse(localStorage.getItem("sessionToken"));
      if (!session || Date.now() >= session.expiration) {
        setIsAuthenticated(false);
        localStorage.removeItem("sessionToken");
      }
    }, 60000); // Check every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              {/* <Route path="/opportunities" element={<OppertunitiesSingle />} /> */}
              <Route path="/opportunities" element={<Oppertunities />} />

              <Route path="/pandg" element={<PandG />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/strategies" element={<p>STRATS</p>} />
              <Route path="/revenues" element={<Revenue />} />

              <Route path="/services/ag" element={<Gruha />} />
              <Route path="/services/av" element={<Vihara />} />
              <Route path="/services/im" element={<InstaMed />} />
            </Routes>
          </div>
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </Router>
  );
};

export default App;
