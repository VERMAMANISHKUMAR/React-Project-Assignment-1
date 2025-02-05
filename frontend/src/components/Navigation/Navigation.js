import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <h2>MyApp</h2>
      </div>

      {/* Navbar for larger screens */}
      <div className="navbar">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" className="nav-link" activeClassName="active">
              User Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/editor" className="nav-link" activeClassName="active">
              Text Editor
            </NavLink>
          </li>
        </ul>
        <div className="auth-buttons">
          <NavLink to="/login-signup" className="login-btn">
            Login
          </NavLink>
        </div>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" className="nav-link" activeClassName="active">
              User Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/editor" className="nav-link" activeClassName="active">
              Text Editor
            </NavLink>
          </li>
        </ul>
        <div className="auth-buttons">
          <NavLink to="/login-signup" className="login-btn">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
