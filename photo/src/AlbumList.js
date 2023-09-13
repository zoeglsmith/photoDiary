import React from "react";
import "./AlbumList.css";
import { Card, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import NavBar from "./NavBar"; // Import the NavBar component

function AlbumList({ albums }) {
  const navigate = useNavigate();

  const onAlbumClick = (album) => {
    navigate(`/view-album/${album.id}`); // Navigate to viewAlbum with album ID
  };

  return (
    <div>
      <Card.Header>Album Collection</Card.Header>
      <div className="album-list">
        <NavBar />
        {albums.map((album) => (
          <div
            key={album.id}
            className="album-card"
            onClick={() => onAlbumClick(album)}
          >
            <Link to={`/album-list/${album.id}`} className="album-link">
              {album.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumList;
