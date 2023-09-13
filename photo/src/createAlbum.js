import React, { useState } from "react";
import "./createAlbum.css";
import { useNavigate } from "react-router-dom";

import { Card, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap
import NavBar from "./NavBar"; // Import the NavBar component

function CreateAlbum({ onCreateAlbum }) {
  const [albumTitle, setAlbumTitle] = useState("");
  const navigate = useNavigate();

  const handleCreateAlbum = () => {
    onCreateAlbum(albumTitle);
    setAlbumTitle("");
    navigate("/album-list");
  };

  return (
    <div className="container">
      <NavBar />

      <Card className="content">
        <Card.Header>Create Album</Card.Header>
        <Card.Body>
          <Form>
            {/* Email input */}
            <Form.Group controlId="text">
              <Form.Control
                className="input"
                type="text"
                placeholder="Album Title"
                value={albumTitle}
                onChange={(e) => setAlbumTitle(e.target.value)}
              />
            </Form.Group>
            <button
              className="button"
              variant="primary"
              onClick={handleCreateAlbum}
            >
              Create Album
            </button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateAlbum;
