import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login attempt: " + email);
  };

  return (
    <div className="loginpage">
      <header className="login-head">
        <h1>Login </h1>
        <p>Enter your credentials to access your account</p>
      </header>

      <main className="login-main-content">
        <form onSubmit={handleLogin} className="login-form">
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
          <Link to="/dashboard">
          <button type="submit" className="login-button">
            Login
          </button>
          </Link>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Finance Manager. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
