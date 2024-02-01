import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TopMenu.css";

const TopMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="top-menu">
      <div
        className="logo-container"
        onClick={() => {
          navigate("photos");
        }}
      >
        {/* Animated React Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
      </div>
      <div className="menu-options">
        {/* Photos - Link to Photos Page */}
        <Link to="/photos" className="menu-option">
          <span>Photos</span>
        </Link>
        {/* Add New Photos - Link to Add New Photo Page */}
        <Link to="/add-photo" className="menu-option">
          <span>Add Photo</span>
        </Link>
      </div>
    </div>
  );
};

export default TopMenu;
