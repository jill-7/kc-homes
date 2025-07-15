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
          { number: '2', label: 'Epic Trips' },
          { number: '50+', label: 'Happy Clients' },
          { number: '6', label: 'Destinations' }
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
  <h2 className="trio">Meet Our Guides</h2>
  <div className="team-grid">
    {[
      { 
        name: 'Casey Arthur', 
        role: 'Founder of KC Homes and Tours',
        img: '/Caseyyy.jpg'
      },
     
    ].map((member, index) => (
      <div key={index} className="team-card fade-up">
        <div 
          className="avatar" 
          style={{ backgroundImage: `url(${member.img}) `}} 
        />
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <div className="cta-banner fade-up">
        <h2>Ready for Your Adventure?</h2>
        <button className="pulse-button"><a href='/upcoming-trips' className='button'>Book Now</a></button>
      </div>
    </main>
  );
};

export default About;