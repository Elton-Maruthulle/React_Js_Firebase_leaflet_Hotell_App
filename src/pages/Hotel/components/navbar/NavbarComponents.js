import React, { useState } from "react";
import "./styles/NavbarComponents.css";
import { signOut } from 'firebase/auth';

import { auth } from '../../../../firebase';
import { useNavigate } from 'react-router-dom';


function DropdownButton() {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navfixed">
      <div className="navbarcontainer">
        <div className="logo">StayEase</div>
        <div className="navbarcomponents">
          <div className="navbarlinks">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/booking">
                Rooms
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/booking">
                Reservations
              </a>
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
                <a href="booking">BOOK NOW</a>
                <a href="aboutpage">About Us</a>
                <a href="contactpage">Contact</a>
                <a href="Mappage">Location</a>
              </div>
            )}
          </div>
          <div className="signupbutton">
            <button className="signupbuttonbutton" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownButton;
