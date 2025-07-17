export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo on the left */}
          <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-80 transition duration-300">
            THE LARBI's
          </a>

          {/* Optional navigation links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-sm text-gray-300 hover:text-yellow-400 transition">Their Journey</a>
            <a href="#children" className="text-sm text-gray-300 hover:text-yellow-400 transition">Family</a>
            <a href="#memories" className="text-sm text-gray-300 hover:text-yellow-400 transition">Memories</a>
          </div>
        </div>

        {/* Appreciation message */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-pink-200">
          Built with ❤️ by <span className="text-yellow-300 font-semibold">Gloria</span> — Celebrating 30 Years of Love and Leadership
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent"></div>
    </footer>
  );
}
