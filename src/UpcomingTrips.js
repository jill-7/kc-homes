import React from 'react';
import { Link } from 'react-router-dom';
import './Trips.css';

export const upcomingTrips = [
  {
    id: 'tsavo-2024',
    name: "Tsavo Adventure",
    date: "16th August 2025",
    price: "ksh 5000",
    description: "Explore Kenya's wild heart",
    image: "/KC-beach.jpg",
    whatsappLink: "https://chat.whatsapp.com/TsavoGroup2024"
  }
];

export default function UpcomingTrips() {
  return (
    <div className="trips-page">
      <h1>Where We're Going</h1>
      <p className="subheader">Join our next expeditions</p>
      
      <div className="trips-grid">
        {upcomingTrips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <img src={trip.image} alt={trip.name} />
            <h3>{trip.name}</h3>
            <p><strong>Date:</strong> {trip.date}</p>
            <p><strong>Price:</strong> {trip.price}</p>
            <p>{trip.description}</p>
            <Link 
              to={`/registration?trip=${trip.id}`}
              className="register-btn"
            >
              Register Now
            </Link>
          </div>
        ))}
        
        {/* Placeholder */}
        <div className="trip-card placeholder">
          <p>Planning our next journey...</p>
        </div>
      </div>
    </div>
  );
}