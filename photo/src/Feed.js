import React from "react";
import styles from "./Feed.module.css"; // Import the CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar"; // Import the NavBar component

function Feed() {
  return (
    <div className={styles["feed-container"]}>
      <NavBar />

      <div className={styles["feed-header"]}>
        <h1>Photo Feed</h1>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={styles["add-post-icon"]}
        />
      </div>
      <div className={styles["feed-post"]}>
        <div className={styles["post-header"]}>
          <img
            src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
            alt="User Profile"
            className={styles["profile-picture"]}
          />
          <h3 className={styles["username"]}>example_user</h3>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
          alt="Example Post"
          className={styles["post-image"]}
        />
        <div className={styles["post-actions"]}>
          {/* Add like and comment buttons here */}
        </div>
        <div className={styles["post-caption"]}>
          <p>This is an example post caption.</p>
        </div>
      </div>
      {/* Add more feed items here */}
    </div>
  );
}

export default Feed;
