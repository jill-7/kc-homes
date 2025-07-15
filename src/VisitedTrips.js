import React from 'react';
import './Trips.css'; // Shared CSS for both trip pages

export const visitedTrips = [
  {
    id: 'kilimanjaro-2023',
    name: "Kilimanjaro Summit",
    date: "August 2023",
    description: "Conquered Africa's highest peak",
    images: ['/KC-wasini.jpg', "/KC-marafa.jpg"],
    stats: "12 Adventurers",
    testimonial: "Life-changing experience with KC Homes!",
  }
];

export default function VisitedTrips() {
  return (
    <div className="trips-page">
      <h1>Where We've Been</h1>
      <p className="subheader">Relive our past adventures</p>
      
      <div className="trips-grid">
        {visitedTrips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div className="completed-badge">Completed</div>
            
            <div className="trip-images">
              {trip.images.slice(0, 2).map((img, idx) => (
                <img key={idx} src={img} alt={`${trip.name} ${idx + 1}`} />
              ))}
            </div>
            
            <h3>{trip.name}</h3>
            <p>{trip.date} • {trip.stats}</p>
            
            {trip.testimonial && (
              <div className="testimonial">
                <span>“{trip.testimonial}”</span>
              </div>
            )}
          </div>
        ))}
        
        {/* Placeholder for future trips */}
        <div className="trip-card placeholder">
          <p>More adventures coming soon!</p>
        </div>
      </div>
    </div>
  );
}