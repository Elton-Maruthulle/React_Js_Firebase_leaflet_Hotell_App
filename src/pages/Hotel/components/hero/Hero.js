import React from "react";
import "./styles/hero.css";
import { auth } from '../../../../firebase';
import { Link, useNavigate } from 'react-router-dom';

function Hero() {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="Hero">
      <div className="HeroContainer">
        <div className="herocontent">
          <h4 className="userwelcome">Welcome {user && user.email}</h4>
          <h2 className="herotext">Plan Your Holiday With Us...</h2>
          <Link to="/booking">
          <button className="explorenowbutton">Explore Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
