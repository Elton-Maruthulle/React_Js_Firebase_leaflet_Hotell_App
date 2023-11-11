import React, { useState } from "react";
import "./styles/NavbarComponents.css";
import { signOut } from "firebase/auth";

import { auth } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DropdownButton() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navfixed">
      <div className="navbarcontainer">
        <div className="logo">
        <Link to="/" >
        StayEase</Link></div>
        <div className="navbarcomponents">
          <div className="navbarlinks">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/booking" class="nav-link">
                Rooms
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/booking" class="nav-link">
                Reservations
              </Link>
            </li>
          </div>
          <div className="dropdown-button">
            <button
              onClick={toggleDropdown}
              className="dropdown-button-toggle down-arrow-button"
            >
              !
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/booking">BOOK NOW</Link>
                <Link to="/aboutpage">About Us</Link> 
                <a href="http://Elton-Maruthulle.github.io/My_Portfolio" target="_blank">Contact</a>
                <Link to="/Mappage">Location</Link>
              </div>
            )}
          </div>
          <div className="signupbutton">
            <button className="signupbuttonbutton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownButton;
