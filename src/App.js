import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import VisitedTrips from './VisitedTrips';
import UpcomingTrips from './UpcomingTrips';
import Registration from './Registration';
import BNBs from './BNBs';
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
      <Route path="/registration" element={<Registration />} />
      <Route path="/bnbs" element={<BNBs />} />
    </Routes>
    <Footer />
   </Router>
   
   
  );
}

export default App;
