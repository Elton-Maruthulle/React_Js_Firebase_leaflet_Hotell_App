import React from 'react';
import FixedLocationMap from './MapLocation';
import Navbar from '../navbar/navbar';
import './Location.css';

function Location() {
  return (
    <div className='fullpage'>
        <Navbar />
      <h1>Our Hotel's Location</h1>
      <FixedLocationMap />
    </div>
  );
}

export default Location;
