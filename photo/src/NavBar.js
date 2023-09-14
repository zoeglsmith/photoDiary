import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button onClick={() => window.location.assign("/")}>Home</button>
        </li>
        <li className="nav-item">
          <button onClick={() => window.location.assign("/signup")}>
            Sign Up
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => window.location.assign("/login")}>
            Login
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => window.location.assign("/feed")}>Feed</button>
        </li>
        <li className="nav-item">
          <button onClick={() => window.location.assign("/profile")}>
            Profile
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
