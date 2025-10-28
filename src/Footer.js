import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        {/* Column 1: Social Media */}
        <div className="footer-column">
          <h3 className="footer-heading">Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1FDhMh2LtP/" rel='noreferrer' aria-label="Facebook"><FaFacebook className="icon" /></a>
            <a href="https://www.instagram.com/kchomes_tours_and_travel?igsh=MXJpcGtnM2s5ejNzNQ==" rel='noreferrer' target='_blank' aria-label="Instagram"><FaInstagram className="icon" /></a>
            <a href="https://x.com/KcHomesTours?t=BVpLITcxJd0ykpYwDQATEQ&s=09" rel='noreferrer' aria-label="Twitter"><FaTwitter className="icon" /></a>
            <a href="https://chat.whatsapp.com/F8d3eQoHBOzHXZfVXOErPY?mode=r_t" rel='noreferrer' target="_blank" aria-label="WhatsApp"><FaWhatsapp className="icon" /></a>
          </div>
          <p className="footer-text">Book your next trip with us!</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" >Home</a></li>
            <li><a href="/about" >About</a></li>
            <li><a href="/visited-trips">Visited Trips</a></li>
            <li><a href="/upcoming-trips">Upcoming Trips</a></li>
            <li><a href="/registration">Registration</a></li>
            <li><a href="/bnbs">BNBs</a></li>
          </ul>
        </div>

        {/* Column 3: Contact and Logo */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/KC-logo.png" alt="KC Tours Logo" className="logo-img" />
            <span className="logo-text">KC Homes</span>
          </div>
          <div className="contact-info">
            <p><FaMapMarkerAlt className="contact-icon" />Bamburi, Mombasa</p>
            <p><FaPhone className="contact-icon" /> 0700540507 or 0117969036</p>
            <p><FaEnvelope className="contact-icon" /> kchomes06@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} KC Tours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;