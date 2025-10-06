import React, { useState, useEffect } from 'react';
import './Home.css'; // Your CSS file
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const backgroundImages = [
    '/KC-beach.jpg',
    '/KC-morepeople.jpg',
    '/KC-wasini.jpg',
    '/KC-arafats.jpg',
    '/KC-marafa.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setFade(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const navigate = useNavigate();
  return (
    <div className="home-container">
      
      <div className="slideshow-container">
        <img
          src={backgroundImages[currentImageIndex]}
          alt="Slideshow"
          className={`slideshow-image ${fade ? 'fade-out' : 'fade-in'}`}
        />
        <div className="image-overlay"></div>
      </div>

      
      <div className="content-container">
        <h1 className="main-heading">Welcome to KC Homes</h1>
        <h2 className='next-heading'>Tours and Travel</h2>
        <p className="subtext">Discover extraordinary adventures with us</p>
        <button className="cta-button" onClick={() => navigate('/upcoming-trips')}>Start Your Journey</button>
      </div>

      
      
<div className="reviews-section">
  <h2 className="section-title">Reviews</h2>
  <div className="review-cards">
    {/* Card 1 */}
    <div className="review-card">
      <div className="review-header">
        <img 
          src="/H-Google.png" 
          alt="User" 
          className="review-avatar"
        />
        <div>
          <h3>Hudnut Jake</h3>
          <div className="stars">★★★★★</div>
        </div>
      </div>
      <p className="review-text">
        "I can't recommend @ KC HOMES AND TRAVEL enough. The team management has always been professional and passionate towards creating memorable experiences for whoever books with them .
        Whether you're a solo adventure enthusiast or with a group they deliver exceptional experience. Definitely deserves Five stars!"
      </p>
      <div className="review-footer">
      <a className='kc-reviews' href='https://www.google.com/maps/place/KC+Homes+Tours+and+Travel/@-4.0039536,39.702648,17z/data=!4m10!3m9!1s0x18400d467a604e57:0x4375cc6a181faec7!5m3!1s2025-07-20!4m1!1i2!8m2!3d-4.003959!4d39.7052229!16s%2Fg%2F11xkpq72dd?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D' target='_blank'rel='noreferrer'>
        <img src="/Google.png" alt="Google" className="google-icon" />
        <div className='kc-review'>Google Review</div>
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="review-card">
      <div className="review-header">
        <img 
          src="/A-Googleee.png" 
          alt="User" 
          className="review-avatar"
        />
        <div>
          <h3>Alex Indasa</h3>
          <div className="stars">★★★★☆</div>
        </div>
      </div>
      <p className="review-text">
        "The rooms and service are top notch...planning on coming back with my family 🙏 …"
      </p>
      <div className="review-footer">
      <a className='kc-reviews' href='https://www.google.com/maps/place/KC+Homes+Tours+and+Travel/@-4.0039536,39.702648,17z/data=!4m10!3m9!1s0x18400d467a604e57:0x4375cc6a181faec7!5m3!1s2025-07-20!4m1!1i2!8m2!3d-4.003959!4d39.7052229!16s%2Fg%2F11xkpq72dd?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D' target='_blank' rel='noreferrer'>
        <img src="/Google.png" alt="Google" className="google-icon" />
        <div className='kc-review'>Google Review</div>
        </a>
      </div>
    </div>

     {/* Card 3 */}
    <div className="review-card">
      <div className="review-header">
        <img 
          src="/J-Googlee.png" 
          alt="User" 
          className="review-avatar"
        />
        <div>
          <h3>Joanne Kioko</h3>
          <div className="stars">★★★★★</div>
        </div>
      </div>
      <p className="review-text">
        "Best services in terms of communication, rooms and adventures.KC hones doesn’t play when it comes to quality and fun. it’s a whole package deal"
      </p>
      <div className="review-footer">
        <a className='kc-reviews' href='https://www.google.com/maps/place/KC+Homes+Tours+and+Travel/@-4.0039536,39.702648,17z/data=!4m10!3m9!1s0x18400d467a604e57:0x4375cc6a181faec7!5m3!1s2025-07-20!4m1!1i2!8m2!3d-4.003959!4d39.7052229!16s%2Fg%2F11xkpq72dd?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D' target='_blank'rel='noreferrer'>
        <img src="/Google.png" alt="Google" className="google-icon" />
        <div className='kc-review'>Google Review</div>
        </a>
      </div>
    </div>
  </div>
</div>

      </div>

      
    
  );
};

export default Home;