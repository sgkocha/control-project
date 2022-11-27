import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  
  return (
    <header className="header">
      <div className="wrapper flexbox">
        <div className="header-logo">
          <img width={100} height={100} src="../images/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul className="nav flexbox">
            <li className="nav-item">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Task 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/task2"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Task 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
