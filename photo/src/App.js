import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">{/* Your header content here */}</header>
        <main>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
