import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar"; // Import the NavBar component

function ViewAlbum() {
  const { id } = useParams(); // Access the album ID from the URL parameter
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]); // Updated to store multiple images

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Display the uploaded image on the screen
      const imageUrl = URL.createObjectURL(selectedFile);
      setUploadedImages([...uploadedImages, imageUrl]);

      // Clear the selected file after uploading
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <NavBar />
      <h2 className="viewTitle">View Album {id}</h2>
      <button
        className="upload-button"
        onClick={() => {
          // Show the upload modal
          const uploadModal = document.getElementById("uploadModal");
          uploadModal.style.display = "block";
        }}
      >
        +
      </button>

      {/* The upload modal */}
      <div id="uploadModal" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              // Hide the upload modal
              const uploadModal = document.getElementById("uploadModal");
              uploadModal.style.display = "none";
            }}
          >
            &times;
          </span>
          <h3>Upload a Photo</h3>
          <input type="file" onChange={handleFileUpload} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>

      {/* Display the uploaded photos */}
      <div className="uploaded-photos">
        {uploadedImages.map((imageUrl, index) => (
          <div key={index} className="uploaded-image">
            <img
              src={imageUrl}
              alt={`Uploaded ${index}`}
              className="square-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAlbum;
