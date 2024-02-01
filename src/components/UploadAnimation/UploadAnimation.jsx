// UploadAnimation.js
import React from "react";
import "./uploadAnimation.css"; // Import your CSS for styling

const UploadAnimation = () => {
  return (
    <div className="overlay">
      <div className="upload-animation-container">
        <div className="spinner"></div>
        <p>Uploading...</p>
      </div>
    </div>
  );
};

export default UploadAnimation;
