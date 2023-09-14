import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultProfileImage from "./default-profile.jpg";
import "./profile.css";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState(""); // Added state for bio
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value); // Update bio state
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Bio:", bio); // Include bio in the log
    console.log("Profile Picture:", profilePicture);
  };

  return (
    <div className="container">
      <div className="profile">
        <div className="profile-picture">
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
          ) : (
            <img src={defaultProfileImage} alt="Default Profile" />
          )}
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            required
          />
          <button className="add-button">+</button>
        </div>
        <div className="profile-details">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="bio">Bio</label>
          <textarea
            className="input"
            id="bio"
            rows="4"
            value={bio} // Set value to bio state
            onChange={handleBioChange} // Handle bio changes
            placeholder="Write a short bio..."
          />
          <Link
            to={`/view-profile?username=${encodeURIComponent(
              username
            )}&bio=${encodeURIComponent(bio)}`} // Pass username and bio as URL parameters
            className="button"
          >
            Save Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
