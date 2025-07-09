import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allTrips } from './trips';
import { init, send } from '@emailjs/browser';
import './Registration.css';

// Initialize EmailJS (replace with your IDs)
init("YOUR_EMAILJS_USER_ID");

export default function Registration() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    notes: ''
  });

  // Load trip data on component mount
  useEffect(() => {
    const trip = allTrips.find(t => t.id === tripId);
    if (!trip) navigate('/trips');
    setSelectedTrip(trip);
  }, [tripId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await send(
        'YOUR_EMAILJS_SERVICE_ID',
        'trip_confirmation',
        {
          name: formData.name,
          trip_name: selectedTrip.name,
          trip_date: selectedTrip.date,
          participants: formData.participants,
          whatsapp_link: selectedTrip.whatsappLink,
          company_name: "KC HOMES and tours"
        }
      );
      
      // Redirect to success page
      navigate(`/registration-success?trip=${tripId}`);
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error("EmailJS error:", error);
    }
  };

  if (!selectedTrip) return <div>Loading...</div>;

  return (
    <div className="registration-container">
      <h2>Register for {selectedTrip.name}</h2>
      <div className="trip-highlight">
        <img src={selectedTrip.image} alt={selectedTrip.name} />
        <p>{selectedTrip.description}</p>
        <p><strong>Date:</strong> {selectedTrip.date}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name*</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number*</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Participants*</label>
          <input 
            type="number" 
            min="1"
            value={formData.participants}
            onChange={(e) => setFormData({...formData, participants: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Special Requests</label>
          <textarea 
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>

        <button type="submit" className="submit-btn">
          Complete Registration
        </button>
      </form>
    </div>
  );
}