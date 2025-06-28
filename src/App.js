import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import VisitedTrips from './VisitedTrips';
import UpcomingTrips from './UpcomingTrips';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

import './App.css';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/visited-trips" element={<VisitedTrips />} />
      <Route path="/upcoming-trips" element={<UpcomingTrips />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
   </Router>
   
   
  );
}

export default App;
