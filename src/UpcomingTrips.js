import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingTrips.css';
import { upcomingTrips } from './tripData'; // Import from shared file

export default function UpcomingTrips() {
  // Group trips by month - using the imported upcomingTrips
  const groupedTrips = upcomingTrips.reduce((acc, trip) => {
    const month = trip.date.split(' ')[0]; // Get month from date
    if (!acc[month]) acc[month] = [];
    acc[month].push(trip);
    return acc;
  }, {});

  return (
    <div className="upcoming-trips-page">
      <div className="trips-header">
        <h1>Upcoming Adventures</h1>
        <p>Join us on these incredible journeys</p>
      </div>

      <div className="timeline-container">
        {Object.entries(groupedTrips).map(([month, trips]) => (
          <div key={month} className="timeline-month">
            <div className="timeline-month-header">
              <div className="timeline-dot"></div>
              <h2 className="month-title">{month} 2025</h2>
              <div className="timeline-line"></div>
            </div>
            
            <div className="trips-list">
              {trips.map((trip, index) => (
                <div key={trip.id} className="timeline-trip-card">
                  <div className="trip-image">
                    <img src={trip.image} alt={trip.name} />
                  </div>
                  
                  <div className="trip-content">
                    <h3>{trip.name}</h3>
                    <div className="trip-meta">
                      <span className="trip-date">📅 {trip.date}</span>
                      <span className="trip-duration">⏱ {trip.duration}</span>
                      <span className="trip-category">🎯 {trip.category}</span>
                    </div>
                    <p className="trip-description">{trip.description}</p>
                    <div className="trip-footer">
                      <span className="trip-price">KES {trip.price}</span>
                      <Link 
                        to={`/registration?trip=${trip.id}&name=${trip.name}&price=${trip.price}`}
                        className="register-btn"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}