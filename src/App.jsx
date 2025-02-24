import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; 
import LoginPage from "./components/LoginPage"; 
import SignUpPage from "./components/SignUpPage";
import LearnMorePage from "./components/LearnMorePage"; 
import Dashboard from "./components/Dashboard";
import "./App.css"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        
        <Route path="/learnmore" element={<LearnMorePage />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
