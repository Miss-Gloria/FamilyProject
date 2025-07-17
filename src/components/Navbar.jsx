import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export default function AlternativeNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavItems = [
    { name: 'Home', to: '/' },
    { name: 'Their Journey', to: '/their-journey' },
    { name: 'Family', to: '/marriage-love-story' } // Keep as hash if internal scroll
  ];

  const rightNavItems = [
    { name: 'Memories', to: '/tribute' },
    { name: 'Gallery', to: '#gallery' },
    { name: 'Contact', to: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/70 backdrop-blur-lg shadow-2xl' 
        : 'bg-white/5 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Navigation */}
          <div className="hidden lg:flex space-x-6">
            {leftNavItems.map((item) => (
              item.to.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.to}
                  className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg md:text-xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                THE LARBI's
              </span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex space-x-6">
            {rightNavItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[...leftNavItems, ...rightNavItems].map((item) =>
              item.to.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
