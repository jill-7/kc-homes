import React from 'react';
import './VisitedTrips.css';

const visitedTrips = [
  {
    id: 'watamu-2024',
    name: "Watamu Getaway",
    date: "March 15-18, 2025",
    description: "Watched the most incredible sunset while sipping fresh coconut water on the pristine beaches of Watamu. The turquoise waters and warm hospitality made this trip unforgettable.",
    image: "/KC-beach.jpg",
    travelers: 24,
    highlights: ["Beach Relaxation", "Snorkeling", "Sunset Views"],
    location: "Watamu, Kenya"
  },
  {
    id: 'wasini-2024',
    name: "Wasini Island Adventure", 
    date: "February 10-12, 2025",
    description: "Swam with dolphins in the crystal clear waters of Wasini Island. The marine life was breathtaking, and the local Swahili cuisine was an absolute delight.",
    image: "/KC-wasini.jpg",
    travelers: 18,
    highlights: ["Dolphin Watching", "Marine Park", "Swahili Culture"],
    location: "Wasini Island, Kenya"
  },
  {
    id: 'tsavo-2024',
    name: "Tsavo Safari",
    date: "January 5-7, 2025",
    description: "Witnessed the majestic red elephants in their natural habitat. The vast landscapes and diverse wildlife of Tsavo National Park left us in awe of Kenya's natural beauty.",
    image: "/KC-rides.jpg", 
    travelers: 32,
    highlights: ["Wildlife Safari", "Photography", "Nature Walks"],
    location: "Tsavo National Park, Kenya"
  },
  {
    id: 'malindi-2023',
    name: "Malindi Cultural Tour",
    date: "December 20-22, 2025", 
    description: "Explored the rich Swahili culture and history of Malindi. From the ancient Gedi Ruins to the vibrant local markets, every moment was a learning experience.",
    image: "/KC-arafats.jpg",
    travelers: 15,
    highlights: ["Cultural Tour", "Historical Sites", "Local Markets"],
    location: "Malindi, Kenya"
  }
];

export default function VisitedTrips() {
  return (
    <div className="visited-trips-page">
      <div className="diary-header">
        <h1>Our Travel Memories</h1>
        <p>Moments captured, stories shared</p>
      </div>

      <div className="photo-diary-grid">
        {visitedTrips.map((trip) => (
          <div key={trip.id} className="photo-diary-card">
            {/* Large Photo Section - Takes 60% of card */}
            <div className="photo-hero">
              <img src={trip.image} alt={trip.name} />
              <div className="photo-overlay">
                <div className="location-badge">
                  📍 {trip.location}
                </div>
              </div>
            </div>
            
            {/* Content Section - Takes 40% of card */}
            <div className="diary-content">
              <div className="trip-header">
                <h3 className="trip-title">{trip.name}</h3>
                <p className="trip-date">📅 {trip.date}</p>
              </div>
              
              <p className="trip-description">
                "{trip.description}"
              </p>
              
              <div className="trip-highlights">
                {trip.highlights.map((highlight, index) => (
                  <span key={index} className="highlight-tag">
                    {highlight}
                  </span>
                ))}
              </div>
              
              <div className="trip-stats">
                <div className="traveler-count">
                  ❤ {trip.travelers} travelers loved this experience
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}