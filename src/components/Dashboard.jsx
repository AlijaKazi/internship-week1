import React from "react";
import { Link } from "react-router-dom"; 
import "./Dashboard.css"; 

const Dashboard = ({ onLogout }) => {
    const accountBalance = 0.0;
    const incomeThisMonth = 0.0;
    const expensesThisMonth = 0.0;
    
    return (
      <div className="dashboard-container">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Track your finances and stay on top of your goals</p>
        </header>
  
        <section className="overview">
          <h2>Account Overview</h2>
          <div className="overview-info">
            <div className="overview-item">
              <h3>Balance</h3>
              <p className="overview-amount">{accountBalance.toFixed(2)}</p>
            </div>
            <div className="overview-item">
              <h3>Income this month</h3>
              <p className="overview-amount">{incomeThisMonth.toFixed(2)}</p>
            </div>
            <div className="overview-item">
              <h3>Expenses this month</h3>
              <p className="overview-amount">{expensesThisMonth.toFixed(2)}</p>
            </div>
          </div>
        </section>
  
        <section className="quick-links">
          <h2>Quick Links</h2>
          <div className="links">
            <Link to="/transactions" className="link-item">View Transactions</Link>
            <Link to="/budget" className="link-item">Manage Budget</Link>
            <Link to="/settings" className="link-item">Account Settings</Link>
          </div>
        </section>
  
        <div className="logout">
          <button onClick={onLogout} className="logout-btn">Log Out</button>
        </div>
  
        <footer className="footer">
          <p>&copy; 2025 Finance Manager. All Rights Reserved.</p>
        </footer>
      </div>
    );
};

export default Dashboard;
