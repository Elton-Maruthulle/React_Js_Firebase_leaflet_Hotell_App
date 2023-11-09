import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import 'L' object from Leaflet

const mapContainerStyle = {
  width: '60vw',
  height: '60vh',
  maxWidth: '600px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'auto',
  marginTop: '5vh',
  display: 'flex',
  flexDirection: 'colomn',
  alignItems: 'center',
  alignContent: 'center',
};

const fixedPosition = [-26.271346, 28.204916]; // Coordinates for "7930 Ufukwe Crescent, Windmill Park Ext 17, Boksburg, South Africa"
const googleMapsLink = `https://www.google.com/maps?q=${fixedPosition[0]},${fixedPosition[1]}`;

const crosshairIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [32, 48],
  iconAnchor: [16, 48],
  popupAnchor: [0, -48],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [64, 48],
  shadowAnchor: [22, 42],
});

const FixedLocationMap = () => {
  return (
    <div className='mapmap'>
    <h2>Our Hotels Location</h2>
    <div style={mapContainerStyle}>
    
      <MapContainer center={fixedPosition} zoom={16} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={fixedPosition} icon={crosshairIcon}>
          <Popup>7930 Ufukwe Crescent, Windmill Park Ext 17, Boksburg, South Africa</Popup>
        </Marker>
      </MapContainer>
    </div>
    <div>
    <p>
        Address: <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </p>
    </div>
    </div>
  );
}

export default FixedLocationMap;
