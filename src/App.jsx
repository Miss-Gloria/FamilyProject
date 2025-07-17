import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import AlternativeNav from './components/Navbar';
import Footer from './components/Footer';

import TheirJourney from './pages/TheirJourney';
import MarriageLoveStory from './pages/Marriage';
import TributeSection from './pages/Tribute';

function App() {
  return (
    <Router>
      <div>
        <AlternativeNav />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/their-journey" element={<TheirJourney />} />
          <Route path="/marriage-love-story" element={<MarriageLoveStory />} />
          <Route path="/tribute" element={<TributeSection />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
