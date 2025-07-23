import { useEffect, useState } from 'react';

export default function HomeSections() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date('2025-07-27T09:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 px-4 sm:px-8 lg:px-16 space-y-24 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Countdown Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent mb-6">
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight">Countdown to the Celebration</h2>
          </div>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us on <span className="font-semibold text-yellow-300">27th July, 2025 at 9:00 AM</span> at Akyem Anyinam Central Assembly.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
              <div key={label} className="group">
                <div className="bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl sm:text-5xl font-black bg-gradient-to-b from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2">
                    {Object.values(timeLeft)[i]}
                  </div>
                  <div className="text-sm sm:text-base text-purple-200 font-medium uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Watch Live CTA */}
          <div className="group bg-gradient-to-br from-white/15 to-white/5 border border-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-pink-400/20 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-pink-100 bg-clip-text text-transparent mb-4">
                Watch Live
              </h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                The event will be streamed live on Facebook. Stay tuned for the link!
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold cursor-not-allowed opacity-60 transition-all duration-300">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Download Brochure */}
          <div className="group bg-gradient-to-br from-white/15 to-white/5 border border-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent mb-4">
                Program Brochure[Coming Soon]
              </h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Get the full schedule and event details at your fingertips.
              </p>
              <a 
                href="/brochure.pdf" 
                download 
                className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 font-bold rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="group bg-gradient-to-br from-white/15 to-white/5 border border-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-indigo-400/20 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-indigo-100 bg-clip-text text-transparent mb-4">
                Need Help?
              </h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Feel free to call or send a message. We're happy to assist.
              </p>
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-2xl p-4">
                <a href="whatsapp://send?phone=233558330172" className="text-lg font-semibold text-indigo-200 hover:text-indigo-300 transition duration-300">
                    <div className="text-2xl font-bold text-white">📞 0558330172</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}