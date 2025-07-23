import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Hero() {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/bg.jpeg',
    '/images/1.jpg'
  ];

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Changed to 8 seconds for better pacing

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background images with crossfade effect */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`hero background ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Black overlay effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-12">
        <div className={`max-w-5xl text-center text-white transform transition-all duration-1500 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Celebration badge */}
          <div className="inline-flex items-center px-4 mt-30 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm mb-8 shadow-lg animate-bounce">
            <span className="mr-2">🎉</span>
            30 YEARS OF FAITHFUL SERVICE
            <span className="ml-2">🎉</span>
          </div>

          {/* Main title with enhanced styling */}
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse">
              AYEKOO!
            </span>
            <span className="block text-3xl md:text-5xl font-bold text-white mt-4 drop-shadow-2xl">
              Pastor Samuel & Mrs. Felicia Larbi
            </span>
          </h1>

          {/* Subtitle with glow effect */}
          <p className="text-xl md:text-2xl text-pink-200 mb-8 font-medium drop-shadow-lg">
            Celebrating three decades of 
            <span className="text-yellow-300 font-bold"> unforgettable impact </span>
            and faithful service to God's people.
          </p>

          {/* Quote with elegant styling */}
          <div className="max-w-3xl mx-auto mb-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <p className="text-lg italic text-yellow-100 leading-relaxed">
              "Indeed, the great God of wonders has been so good to us...
              <br />
              <span className="text-yellow-300 font-semibold">Great is Thy Faithfulness, O Lord.</span>"
            </p>
          </div>

          {/* Enhanced buttons */}
          <div className="flex justify-center gap-6 flex-wrap"> 
  <Link
    to="/their-journey"
    className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
  >
    <span className="relative z-10 flex items-center">
      <span className="mr-2">📖</span>
      Their Journey
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </Link>

  <Link
    to="/tribute"
    className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl"
  >
    <span className="flex items-center">
      <span className="mr-2">👨‍👩‍👧‍👦</span>
      Tribute
    </span>
  </Link>
</div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}