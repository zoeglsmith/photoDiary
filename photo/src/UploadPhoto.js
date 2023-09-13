// UploadPhoto.js

import React, { useState } from "react";

function UploadPhoto({ album, onUploadPhoto }) {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadButtonClick = () => {
    if (file) {
      onUploadPhoto(album, file);
      setFile(null);
    }
  };

  return (
    <div>
      <h2>Upload Photo to {album.title}</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUploadButtonClick}>Upload</button>
      {/* You can access the albums data here using the `albums` prop */}
    </div>
  );
}

export default UploadPhoto;
