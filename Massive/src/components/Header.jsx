import React from "react";
// import logo from "../assets/linkedin_145807.png";

const Header = ({ onLoginClick, onSignUpClick }) => {
  return (
    <header>
      <div className="nav">
        <div className="logo-nav">
          <img src="" alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#fitur">Fitur</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <ul>
            <li>
              <button onClick={onLoginClick}>Login</button>
            </li>
            <li>
              <button onClick={onSignUpClick}>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
