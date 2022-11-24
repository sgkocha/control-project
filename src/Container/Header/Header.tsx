import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper flexbox">
        <div className="header-logo">
          <img width= {100} height = {100} src="../images/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul className="nav flexbox">
            <li className="nav-item">
              <a href="#">Task 1 </a>
            </li>
            <li className="nav-item">
              <a href="#"> Task 2</a>
            </li>
            <li className="nav-item">
              <a href="#"> About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
