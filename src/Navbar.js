import { Link } from 'react-router-dom';
import styles from './Navbar.css';
import { useEffect, useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (isDestinationsOpen) {
        setIsDestinationsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, [isDestinationsOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDestinations = () => {
    setIsDestinationsOpen(!isDestinationsOpen);

    
  };

  return (
    <nav className="navbar">
     <img src="/KC-logo.png" alt="logo" className='logo-image'/>
      

      <ul className="desktopMenu">
          <Link to="/" className="home">Home</Link>
          <Link to="/about" className="about" target='_blank' rel='noreferrer'>About</Link>
        
        <div className="dropdown">
          <button onClick={toggleDestinations} className="Destination">
            Destinations <FaChevronDown size={12} />
          </button>
          {isDestinationsOpen && (
            <div className="dropdownMenu">
              <div className="trips">
                <li className='vTrips'><Link  to="/visited-trips" className='visitedTrips' target='_blank' rel='noreferrer'>Visited Trips</Link></li>
                <li className='uTrips' ><Link to="/upcoming-trips" className="upcomingTrips" target='_blank' rel='noreferrer'>Upcoming Trips</Link></li>
              </div>
            </div>
          )
          }
          </div>
        
        
          <Link to="/contact" className="contact" target='_blank' rel='noreferrer'>Contact</Link>
        
      </ul>


     <div className='mobile'>
      <button className="mobileMenuButton" onClick={toggleMobileMenu}>
        <FaBars />
      </button>

      {isMobileMenuOpen && (
        <ul className="mobileMenu">
          <li>
            <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" target='_blank' rel='noreferrer' onClick={toggleMobileMenu}>About</Link>
          </li>
          <li>
            <button onClick={toggleDestinations}>
              Destinations <FaChevronDown className={styles.chevron} />
            </button>
            {isDestinationsOpen && (
              <ul className={styles.mobileDropdownMenu}>
                <li>
                  <Link to="/visited-trips" target='_blank' rel='noreferrer' onClick={toggleMobileMenu}>Visited Trips</Link>
                </li>
                <li>
                  <Link to="/upcoming-trips" target='_blank' rel='noreferrer' onClick={toggleMobileMenu}>Upcoming Trips</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact" target='_blank' rel='noreferrer' onClick={toggleMobileMenu}>Contact</Link>
          </li>
        </ul>
      )}
      </div>
    </nav>
  );
}

export default Navbar;