import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Sign Up attempt: " + email);
  };

  return (
    <div className="signup-page">
      <header className="header">
        <h1>Sign Up</h1>
        <p>Join us today to start managing your finances</p>
      </header>

      <main className="signup-main-content">
        <form onSubmit={handleSignup} className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        <p className="signup-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        </form>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Finance Manager. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SignupPage;
