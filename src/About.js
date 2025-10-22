import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  // Animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-up">
          <h1 className='description'>More Than Just Tours</h1>
          <p className='description2'>Create unforgettable travel experiences with us</p>
        </div>
      </section>

      {/* Floating Stats */}
      <div className="stats-container">
        {[
          { number: '10', label: 'Epic Trips' },
          { number: '100+', label: 'Happy Clients' },
          { number: '8', label: 'Destinations' }
        ].map((stat, index) => (
          <div key={index} className="stat-card floating">
            <span className="stat-number">{stat.number}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Services Grid */}
      <section className="services">
        <h2 className="trio">Our Magic Trio</h2>
        <div className="services-grid">
          {[
            {
              icon: '🏡',
              title: 'Signature bnbs',
              desc: 'Beachfront Airbnbs & hidden gems across Mombasa'
            },
            {
              icon: '🦁', 
              title: 'Wild Adventures',
              desc: "From Hell's kitchen to Tsavo"
            },
            {
              icon: '📸',
              title: 'Memories',
              desc: 'Professional photography for every moment'
            }
          ].map((service, index) => (
            <div key={index} className={`service-card fade-up delay-${index}`}>
              <div className="icon-circle">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Showcase */}
      {/* Team Showcase - Simplified */}
<section className="team-section">
  <h2 className="trio">About Us</h2>
 
    <div className='history'>
      <div className='history-text'>
       <p>KC Homes is a coastal -based tour company dedicated to curating unforgettable travel experiences. We started as a passion driven business in 2022 and  officially became a registered business in 2024 — driven by a love for adventure, community, and showcasing the beauty of Kenya.
          We specialize in organizing group tours, unique getaways, and local events that connect people through travel. From serene national parks to vibrant coastal escapes, our trips are carefully planned to offer ease, comfort, and authentic experiences. We handle everything — transport, park entry, meals, and guided activities — so you can focus on making memories.</p>
      </div>
      <div className='images'>
        <div className='responsive-images'>
       <img src='/pretty.jpg' alt='person' className='pretty'/>
       <img src='/wasini-pretty.jpg' alt='person' className='wasinii'/>
       </div>
       <img src='/desert.jpg' alt='desert' className='desert'/>
      </div>
    </div>
     
     
 <div className='About'>
   <div className="founder-image">
    <img src='/Casey-profile.jpg' alt='Casey' className='Casey'/>
    
   </div>
   <div className='About-description'>
    {/* <h3 className='founder'>Founder</h3> */}
    <p className='founder-details'>Hi, I'm Arthur Casey, the founder of KC Homes your go to partner for unforgettable travel and housing experiences in Kenya's Coast and beyond.
       KC Homes was born from my deep love and passion for exploring new places and creating meaningful connections through travel and hospitality as a photographer. More like an idea to grow a brand that brings people of all ages together through well-planned getaways, curated accommodation and authentic local adventures. 
       As a mombasa based entrepreneur and with a background experience in the car rental industry, I've come to understand what both locals and tourists truly need; Convenience, Comfort and memorable experiences. 
    </p>
   </div>
  </div>
</section>

      {/* CTA */}
      <div className="cta-banner fade-up">, 
  
        <h2>Ready for Your Adventure?</h2>
        <button className="pulse-button"><a href='/upcoming-trips' className='button'>Book Now</a></button>
      </div>
    </main>
  );
};

export default About;