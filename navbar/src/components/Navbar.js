import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Logo
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" 
                activeClassName="active" 
                className="nav-links">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ProjectA"
                activeClassName="active"
                className="nav-links"
              >
                ProjectA
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ProjectB"
                activeClassName="active"
                className="nav-links"
              >
                ProjectB
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
