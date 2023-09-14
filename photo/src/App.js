import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Login from "./Login";
import Feed from "./Feed";
import UserProfile from "./UserProfile.js";
import ViewProfile from "./ViewProfile.js";

import Upload from "./UploadPhoto";
import CreateAlbum from "./createAlbum";
import AlbumList from "./AlbumList";
import ViewAlbum from "./viewAlbum";

function App() {
  const [albums, setAlbums] = useState([]);
  const createAlbum = (title) => {
    const newAlbum = {
      id: albums.length + 1,
      title: title,
    };
    setAlbums([...albums, newAlbum]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">{/* Your header content here */}</header>
        <main>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/create-album"
              element={<CreateAlbum onCreateAlbum={createAlbum} />}
            />
            <Route path="/album-list" element={<AlbumList albums={albums} />} />
            <Route path="/view-album/:id" element={<ViewAlbum />} />{" "}
            <Route path="/upload" element={<Upload />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/view-profile" element={<ViewProfile />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
