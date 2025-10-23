import React, { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import { init, send } from '@emailjs/browser';
import { upcomingTrips } from './tripData';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Registration.css';

init("jRhxRv6bKTanar6HC");

export default function Registration() {
  const [searchParams] = useSearchParams();
  const tripId = searchParams.get('trip');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    participants: 1,
    trip: tripId || 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set trip if coming from UpcomingTrips
  useEffect(() => {
    if (tripId) {
      const trip = upcomingTrips.find(t => t.id === tripId);
      setSelectedTrip(trip);
    }
  }, [tripId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const adminParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        special_requests: formData.message || 'None',                        
        submission_date: new Date().toLocaleString(),
        participants: formData.participants,
        trip_name: selectedTrip?.name || 'General Inquiry',
        trip_date: selectedTrip?.date || 'N/A',
        user_email: formData.email,
        company_email: "kchomes06@gmail.com",
        whatsappLink: selectedTrip?.whatsappLink ? `https://chat.whatsapp.com/${selectedTrip.whatsappLink}`: 'Not available',
      };

      await send('service_juazvd7,template_evww4ar',adminParams)


      if (selectedTrip) {
      const userParams = {
        ...adminParams,
        whatsapp_to_join: selectedTrip?.whatsappLink || "F8d3eQoHBOzHXZfVXOErPY"
      };
      await send('service_juazvd7', 'template_5p8pgm4', userParams);
    }

      await send('service_juazvd7', 'template_evww4ar', adminParams);
      
       

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        participants: 1,
        trip: 'general'
      });
      setIsSubmitted(true);
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="registration-contact-container">
      <h1>{selectedTrip ? `Register for ${selectedTrip.name} `: 'Contact Us'}</h1>
      
      {selectedTrip && (
        <div className="trip-highlight">
          <p><strong>Trip:</strong> {selectedTrip.name}</p>
          <p><strong>Date:</strong> {selectedTrip.date}</p>
        </div>
      )}

      {isSubmitted ? (
        <div className="success-message">
          <h3>Thank you! ✅</h3>
          <p>We've received your {selectedTrip ? 'registration' : 'message'}.</p>
          <p>Join our <a href="https://chat.whatsapp.com/F8d3eQoHBOzHXZfVXOErPY?mode=r_t">WhatsApp group</a> for updates.</p>
        </div>
      ) : (
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

          {selectedTrip && (
            <div className="form-group">
              <label>Number of Participants</label>
              <input 
                type="number" 
                min="1"
                value={formData.participants}
                onChange={(e) => setFormData({...formData, participants: e.target.value})}
              />
            </div>
          )}

          <div className="form-group">
            <label>Your Message</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder={selectedTrip ? 'Any special requests?' : 'Inquiries?'}
              className='text-area'
            />
          </div>

          <div className='terms-section'>
            <input 
            type='checkbox'
            id='terms'
            required
            />
            <label htmlFor='terms'>
              I agree to the <a href='/KC HOMES T&Cs.pdf' target='_blank' rel='noopener noreferrer'>Terms & Conditions</a>

            </label>

          </div>

          <button type="submit" className="submit-btn">
            {selectedTrip ? 'Complete Registration' : 'Send Message'}
          </button>
        </form>
      )}

      <div className="contact-info">
        <h3>Feel free to check out our socials and interact with us</h3>
         <div className="social-icons">
                    <a href="https://www.facebook.com/share/1FDhMh2LtP/" rel='noreferrer' aria-label="Facebook"><FaFacebook className="icon" /></a>
                    <a href="https://www.instagram.com/kchomes_tours_and_travel?igsh=MXJpcGtnM2s5ejNzNQ==" rel='noreferrer' target='_blank' aria-label="Instagram"><FaInstagram className="icon" /></a>
                    <a href="https://x.com/KcHomesTours?t=BVpLITcxJd0ykpYwDQATEQ&s=09" rel='noreferrer' aria-label="Twitter"><FaTwitter className="icon" /></a>
                    <a href="https://chat.whatsapp.com/F8d3eQoHBOzHXZfVXOErPY?mode=r_t" rel='noreferrer' target="_blank" aria-label="WhatsApp"><FaWhatsapp className="icon" /></a>
                  </div>
        
      </div>
    </div>
  );
}