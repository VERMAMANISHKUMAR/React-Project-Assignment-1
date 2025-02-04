import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/form" className="nav-link">
            User Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/editor" className="nav-link">
            Text Editor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
