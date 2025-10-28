import React from 'react';
import './VisitedTrips.css';

const visitedTrips = [
  {
    id: 'watamu-2025',
    name: "Watamu Getaway",
    date: "February 15, 2025",
    description: "Watched the most incredible sunset while sipping fresh coconut water on the pristine beaches of Watamu. The turquoise waters and warm hospitality made this trip unforgettable.",
    image: "/KC-arafats.jpg",
    travelers: 24,
    highlights: ["Mambrui sand dunes", "Quad bike riding", "Sunset watching at Lichtaus"],
    location: "Watamu, Kenya"
  },
  {
    id: 'wasini-2025',
    name: "Wasini Island Adventure", 
    date: "April 19, 2025",
    description: "Swam with dolphins in the crystal clear waters of Wasini Island. The marine life was breathtaking, and the local Swahili cuisine was an absolute delight.",
    image: "/3people.jpg",
    travelers: 18,
    highlights: ["Dolphin Watching", "Marine Park", "Snorkelling"],
    location: "Wasini Island, Kenya"
  },
  {
    id: 'tsavo-2025',
    name: "Tsavo Safari",
    date: "August 16, 2025",
    description: "Witnessed the majestic red elephants in their natural habitat. The vast landscapes and diverse wildlife of Tsavo National Park left us in awe of Kenya's natural beauty.",
    image: "/Vtrips3.jpg", 
    travelers: 32,
    highlights: ["Wildlife Safari", "Photography", "Game drive"],
    location: "Tsavo National Park, Kenya"
  },
  {
    id: 'malindi-2025',
    name: "Malindi: Sardegna Island & Mambrui",
    date: "October 18, 2025", 
    description: "Explored the rich Swahili culture and history of Malindi. From the ancient Gedi Ruins to the vibrant local markets, every moment was a learning experience.",
    image: "/Vtrips1.jpg",
    travelers: 15,
    highlights: ["Snorkelling", "Malindi marine park", "Glass bottom ride experience"],
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
            {/* Large Photo Section  */}
            <div className="photo-hero">
              <img src={trip.image} alt={trip.name} />
              <div className="photo-overlay">
                <div className="location-badge">
                  📍 {trip.location}
                </div>
              </div>
            </div>
            
            {/* Content Section  */}
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