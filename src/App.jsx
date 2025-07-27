import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import AlternativeNav from './components/Navbar';
import Footer from './components/Footer';
import HomeSections from './components/Home';
import HomePage from './pages/HomePage';


import TheirJourney from './pages/TheirJourney';
import MarriageLoveStory from './pages/Marriage';
import TributeSection from './pages/Tribute';
import DailyVersePage from './pages/Legacy';
import GallerySection from './pages/GallerySection';

function App() {
  return (
    <Router>
      <div>
        <AlternativeNav />

        
        <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/their-journey" element={<TheirJourney />} />
  <Route path="/marriage-love-story" element={<MarriageLoveStory />} />
  <Route path="/tribute" element={<TributeSection />} />
  <Route path="/legacy" element={<DailyVersePage />} />
  <Route path="/gallery" element={<GallerySection/>} />
</Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
