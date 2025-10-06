import React, { useState, useEffect } from 'react';
import './BNBs.css';

const BNBs = () => {
  const [bnbs, setBnbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('All Prices');
  const [currentPhotoIndices, setCurrentPhotoIndices] = useState({});

  // Fetch BNBs from Airtable
  useEffect(() => {
    const fetchBnbs = async () => {
      try {
        const response = await fetch(
          'https://api.airtable.com/v0/appNe6nBPsk1ZXTlL/Table%201',
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`
            }
          }
        );
        const data = await response.json();
        
        if (data.records) {
          setBnbs(data.records.map(record => record.fields));
        }
      } catch (error) {
        console.log('Error fetching BNBs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBnbs();
  }, []);

  // Filter BNBs based on search and price
  const filteredBnbs = bnbs.filter(bnb => {
    const locationMatch = bnb.Location ? bnb.Location.toLowerCase().includes(searchTerm.toLowerCase()) : false;
    const nameMatch = bnb['House Name'] ? bnb['House Name'].toLowerCase().includes(searchTerm.toLowerCase()) : false;
    const matchesSearch = locationMatch || nameMatch;
    
    const matchesPrice = priceFilter === 'All Prices' || 
      (priceFilter === 'Under KES 5,000' && bnb.Price < 5000) ||
      (priceFilter === 'KES 5,000 - 10,000' && bnb.Price >= 5000 && bnb.Price <= 10000) ||
      (priceFilter === 'Over KES 10,000' && bnb.Price > 10000);
    
    return matchesSearch && matchesPrice;
  });

  // Handle image navigation for each BNB
  const handleNextPhoto = (bnbIndex, e) => {
    e.stopPropagation();
    const bnb = filteredBnbs[bnbIndex];
    if (bnb.Photos && bnb.Photos.length > 1) {
      setCurrentPhotoIndices(prev => ({
        ...prev,
        [bnbIndex]: (prev[bnbIndex] || 0) < bnb.Photos.length - 1 ? (prev[bnbIndex] || 0) + 1 : 0
      }));
    }
  };

  const handlePrevPhoto = (bnbIndex, e) => {
    e.stopPropagation();
    const bnb = filteredBnbs[bnbIndex];
    if (bnb.Photos && bnb.Photos.length > 1) {
      setCurrentPhotoIndices(prev => ({
        ...prev,
        [bnbIndex]: (prev[bnbIndex] || 0) > 0 ? (prev[bnbIndex] || 0) - 1 : bnb.Photos.length - 1
      }));
    }
  };

  // Smart availability check with dates
  const handleCheckAvailability = (bnb) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkOut = bnb['Check Out'] ? new Date(bnb['Check Out']) : null;
    const checkIn = bnb['Check In'] ? new Date(bnb['Check In']) : null;
    
    // Determine availability status
    let status = 'available';
    let message = '';
    
    if (bnb.Booked && checkOut && checkOut > today) {
      status = 'booked';
      message = 'This property is booked until ' + checkOut.toLocaleDateString();
    } else if (bnb.Booked && checkOut && checkOut <= today) {
      status = 'available_soon';
      message = 'This property is available from today!';
    } else if (!bnb.Booked) {
      status = 'available';
      message = 'This property is available for booking!';
    }
    
    if (status === 'available' || status === 'available_soon') {
      const whatsappMessage = 'Hi! I want to check availability for ' + bnb['House Name'] + '. What dates are available?';
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open('https://wa.me/254712345678?text=' + encodedMessage);
    } else {
      alert(message);
    }
  };

  // Get status badge based on dates
  const getStatusBadge = (bnb) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkOut = bnb['Check Out'] ? new Date(bnb['Check Out']) : null;
    const checkIn = bnb['Check In'] ? new Date(bnb['Check In']) : null;
    
    if (!bnb.Booked) {
      return <div className="available-badge">Available</div>;
    }
    
    if (checkOut && checkOut > today) {
      return <div className="booked-badge">Booked until {checkOut.toLocaleDateString()}</div>;
    }
    
    if (checkOut && checkOut <= today) {
      return <div className="available-soon-badge">Available now</div>;
    }
    
    return <div className="booked-badge">Booked</div>;
  };

  if (loading) {
    return (
      <div className="bnbs-page">
        <div className="loading">Loading beautiful homes...</div>
      </div>
    );
  }

  return (
    <div className="bnbs-page">
      <h1>Luxury Vacation Homes</h1>
      <p>Discover your perfect getaway in Mombasa</p>
      
      {/* Search and Filter Section */}
      <div className="bnbs-filters">
        <input 
          type="text" 
          placeholder="Search by location or name..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="filter-select"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option>All Prices</option>
          <option>Under KES 5,000</option>
          <option>KES 5,000 - 10,000</option>
          <option>Over KES 10,000</option>
        </select>
      </div>

      {filteredBnbs.length === 0 ? (
        <div className="no-results">
          <h3>No properties found</h3>
          <p>Try adjusting your search filters</p>
        </div>
      ) : (
        <div className="bnbs-grid">
          {filteredBnbs.map((bnb, index) => {
            const currentPhotoIndex = currentPhotoIndices[index] || 0;
            const whatsappMessage = 'Hi! I am interested in ' + bnb['House Name'];
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = 'https://wa.me/254712345678?text=' + encodedMessage;
            
            return (
              <div key={index} className="bnb-card">
                <div className="bnb-image-container">
                  {bnb.Photos && bnb.Photos.length > 0 ? (
                    <React.Fragment>
                      <div className="bnb-image-scroll-container">
                        <img 
                          src={bnb.Photos[currentPhotoIndex].url} 
                          alt={bnb['House Name']}
                          className="bnb-image"
                        />
                        
                        {/* Navigation arrows for in-card scrolling */}
                        {bnb.Photos.length > 1 && (
                          <React.Fragment>
                            <button 
                              className="scroll-arrow left-arrow"
                              onClick={(e) => handlePrevPhoto(index, e)}
                            >
                              ‹
                            </button>
                            <button 
                              className="scroll-arrow right-arrow"
                              onClick={(e) => handleNextPhoto(index, e)}
                            >
                              ›
                            </button>
                          </React.Fragment>
                        )}
                      </div>
                      
                      <div className="photo-counter">
                        {currentPhotoIndex + 1} / {bnb.Photos.length}
                      </div>

                      {/* Smart status badge */}
                      {getStatusBadge(bnb)}
                    </React.Fragment>
                  ) : (
                    <div className="bnb-image" style={{background: '#e2e8f0'}} />
                  )}
                </div>
                
                <div className="bnb-content">
                  <h3>{bnb['House Name']}</h3>
                  
                  <div className="bnb-meta">
                    <p className="location">📍 {bnb.Location}</p>
                    <p className="price">💰 KES {bnb.Price}/night</p>
                    <p className="guests">👥 Sleeps {bnb['Max Guests']}</p>
                  </div>
                  
                  <p className="bnb-description">
                    {bnb.Description}
                  </p>
                  
                  <div className="bnb-actions">
                    <button 
                      className="book-button"
                      onClick={() => handleCheckAvailability(bnb)}
                    >
                      Check Availability
                    </button>
                    <a 
                      href={whatsappUrl}
                      className="whatsapp-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BNBs;