import React from "react";
import NavBar from "./NavBar"; // Import the NavBar component
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <header>
        <h1>Welcome to Photo Diary</h1>
      </header>
    </div>
  );
}

export default HomePage;
