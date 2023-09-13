import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap
import "./SignUp.css"; // Import your CSS file
import NavBar from "./NavBar"; // Import the NavBar component

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    // Implement your signup logic here
    // You can access the values of name, email, and password from the state variables
    // For example, you can send them to an API for user registration
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/login");
  };

  return (
    <div className="container">
      <NavBar />
      {/* Card with signup form */}
      <Card className="content">
        <Card.Header>Sign up</Card.Header>
        <Card.Body>
          <Form>
            {/* Name input */}
            <Form.Group controlId="name">
              <Form.Control
                className="input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

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

            {/* Signup button */}
            <Button className="button" variant="primary" onClick={handleSignup}>
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
