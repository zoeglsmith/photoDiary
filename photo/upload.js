// App.js

import React, { useState } from "react";
import CreateAlbum from "./CreateAlbum";
import AlbumList from "./AlbumList";
import UploadPhoto from "./UploadPhoto";

function Upload() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const createAlbum = (title) => {
    const newAlbum = {
      id: albums.length + 1,
      title: title,
    };
    setAlbums([...albums, newAlbum]);
  };

  const uploadPhoto = (album, photo) => {
    // Implement the logic to add the photo to the selected album
  };

  return (
    <div>
      <CreateAlbum onCreateAlbum={createAlbum} />
      <AlbumList albums={albums} onAlbumClick={setSelectedAlbum} />
      {selectedAlbum && (
        <UploadPhoto
          album={selectedAlbum}
          onUploadPhoto={uploadPhoto}
          albums={albums}
        />
      )}
    </div>
  );
}
export default Upload;
