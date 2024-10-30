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
