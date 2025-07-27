import { useState, useEffect } from 'react';

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
    { name: 'Family', to: '/marriage-love-story' }
  ];

  const rightNavItems = [
    { name: 'Tributes', to: '/tribute' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Legacy', to: '/legacy' }
  ];

  // Enhanced link styling with better contrast
  const getLinkClass = (isRoute = false) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative group";
    const textColor = isScrolled 
      ? "text-white hover:text-yellow-300 drop-shadow-lg" 
      : "text-gray-900 hover:text-yellow-600 drop-shadow-sm";
    const shadowClass = "text-shadow-strong";
    
    return `${baseClass} ${textColor} ${shadowClass}`;
  };

  const handleLinkClick = (to) => {
    if (to.startsWith('/')) {
      // For route navigation, you'd typically use your router's navigate function
      window.location.href = to;
    } else {
      // For hash links, smooth scroll
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Add custom CSS for text shadows */}
      <style jsx>{`
        .text-shadow-strong {
          text-shadow: 
            1px 1px 2px rgba(0, 0, 0, 0.8),
            0 0 8px rgba(0, 0, 0, 0.6),
            0 0 12px rgba(0, 0, 0, 0.4);
        }
        .text-shadow-light {
          text-shadow: 
            1px 1px 2px rgba(255, 255, 255, 0.8),
            0 0 4px rgba(255, 255, 255, 0.6);
        }
        .backdrop-enhanced {
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-enhanced shadow-2xl border-b border-white/10' 
          : 'bg-white/20 backdrop-enhanced shadow-lg border-b border-black/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Navigation */}
            <div className="hidden lg:flex space-x-6">
              {leftNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.to)}
                  className={getLinkClass(true)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleLinkClick('/')} 
                className="text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105"
              >
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg ${
                  isScrolled ? 'filter brightness-110' : 'filter brightness-90'
                }`}>
                  THE LARBI's
                </span>
              </button>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex space-x-6">
              {rightNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.to)}
                  className={getLinkClass()}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-all duration-300 p-2 rounded-md ${
                  isScrolled 
                    ? 'text-white hover:text-yellow-300 hover:bg-white/10' 
                    : 'text-gray-900 hover:text-yellow-600 hover:bg-black/10'
                } text-shadow-strong`}
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
          <div className="lg:hidden border-t border-white/20 bg-black/90 backdrop-enhanced">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.to)}
                  className="block w-full text-left px-4 py-3 text-white hover:text-yellow-300 hover:bg-white/10 rounded-md text-base font-medium transition-all duration-200 text-shadow-strong"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}