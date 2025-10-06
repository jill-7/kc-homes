import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDestinationsOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsDestinationsOpen(false);
    }
  };

  const toggleDestinations = () => {
    setIsDestinationsOpen(!isDestinationsOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDestinationsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src="/KC-logo.png" alt="logo" className='logo-image'/>
      
      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        
        <div className="dropdown">
          <button onClick={toggleDestinations} className="dropdown-toggle">
            Destinations <FaChevronDown className={isDestinationsOpen ? 'rotate' : ''} />
          </button>
          {isDestinationsOpen && (
            <div className="dropdownMenu">
              <Link to="/visited-trips" className="dropdown-link">Visited Trips</Link>
              <Link to="/upcoming-trips" className="dropdown-link">Upcoming Trips</Link>
            </div>
          )}
        </div>
        
        <Link to="/registration" className="nav-link">Registration</Link>
        <Link to="/bnbs" className="nav-link">BNBs</Link>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<div className='mobile-menu'>
  <button className="mobileMenuButton" onClick={toggleMobileMenu}>
    <FaBars />
  </button>

  {isMobileMenuOpen && (
    <>
      <div className="mobileMenuOverlay active" onClick={closeAllMenus}></div>
      <div className="mobileMenu active">
        {/* Header with logo and close button */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <img src="/KC-logo.png" alt="KC Homes" />
            <span>KC Homes</span>
          </div>
          <button className="close-menu" onClick={closeAllMenus}>
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <div className="mobile-menu-items">
          <Link to="/" onClick={closeAllMenus} className='mobile-link'>🏠 Home</Link>
          <Link to="/about" onClick={closeAllMenus} className='mobile-link'>ℹ About</Link>
          
          <div className="mobile-dropdown">
            <button onClick={toggleDestinations} className='mobile-dropdown-toggle'>
              🌍 Destinations <FaChevronDown className={isDestinationsOpen ? 'rotate' : ''} />
            </button>
            <div className={`mobile-dropdown-menu ${isDestinationsOpen ? 'active' : ''}`}>
              <Link to="/visited-trips" onClick={closeAllMenus} className='mobile-dropdown-link'>📸 Visited Trips</Link>
              <Link to="/upcoming-trips" onClick={closeAllMenus} className='mobile-dropdown-link'>🗓 Upcoming Trips</Link>
            </div>
          </div>
          
          <Link to="/registration" onClick={closeAllMenus} className='mobile-link'>📝 Registration</Link>
          <Link to="/bnbs" onClick={closeAllMenus} className='mobile-link'>🏡 BNBs</Link>
        </div>
      </div>
    </>
  )}
</div>
    </nav>
  );
}

export default Navbar;