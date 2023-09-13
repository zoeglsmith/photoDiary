import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap
import "./SignUp.css"; // Import your CSS file
import NavBar from "./NavBar"; // Import the NavBar component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/create-album");
  };

  return (
    <div className="container">
      <NavBar />
      <Card className="content">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
            {/* Email input */}
            <Form.Group controlId="email">
              <Form.Control
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {/* Password input */}
            <Form.Group controlId="password">
              <Form.Control
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Login button */}
            <Button className="button" variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
