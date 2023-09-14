import React from "react";
import { useLocation } from "react-router-dom";
import defaultProfileImage from "./default-profile.jpg"; // Import your default profile image
import "./viewProfile.css";

function ViewProfile() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const bio = searchParams.get("bio");

  return (
    <div className="profile-container">
      <div className="profile-username-container">
        <h1 className="profile-username">{username}</h1>
      </div>{" "}
      <div className="profile-header">
        <div className="profile-picture">
          <img src={defaultProfileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <button className="edit-profile-button">Edit Profile</button>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-count">100</span> posts
        </div>
        <div className="stat">
          <span className="stat-count">1.5k</span> followers
        </div>
        <div className="stat">
          <span className="stat-count">500</span> following
        </div>
      </div>
      <div className="profile-bio">
        <p>{bio}</p>
      </div>
      <div className="profile-posts">
        {/* Render your posts here */}
        {/* Each post should have an image, caption, and any other relevant information */}
        {/* You can map through your posts and render them */}
      </div>
    </div>
  );
}

export default ViewProfile;
