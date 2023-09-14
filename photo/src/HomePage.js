import React from "react";
import NavBar from "./NavBar"; // Import the NavBar component
import "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <NavBar /> 
      <header>
        <h1>Welcome to Photo Diary</h1>
      </header>
    </div>
  );
}

export default HomePage;
