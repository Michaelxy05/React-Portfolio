import React from "react";
import { Link } from "react-router-dom";
import  "./style.css"

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project"
          className={window.location.pathname === "/project" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>

    </ul>
  );
}

export default NavTabs;
