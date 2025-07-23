import React, { useState, useEffect } from 'react';

export default function DailyVersePage() {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Fallback verses in case API fails
  const fallbackVerses = [
    {
      verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
      book: "Deuteronomy",
      chapter: "31",
      verse_number: "6"
    },
    {
      verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      book: "Proverbs",
      chapter: "3",
      verse_number: "5-6"
    },
    {
      verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
      book: "Jeremiah",
      chapter: "29",
      verse_number: "11"
    },
    {
      verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      book: "Romans",
      chapter: "8",
      verse_number: "28"
    },
    {
      verse: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
      book: "Psalm",
      chapter: "23",
      verse_number: "1-3"
    }
  ];

  const fetchVerse = async () => {
    try {
      setLoading(true);
      setError(false);
      
      // Try multiple APIs for better reliability
      const apis = [
        'https://beta.ourmanna.com/api/v1/get/?format=json',
        'https://labs.bible.org/api/?passage=random&type=json'
      ];

      let verseData = null;
      
      for (const apiUrl of apis) {
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const data = await response.json();
            
            // Handle different API response formats
            if (apiUrl.includes('ourmanna')) {
              verseData = {
                verse: data.verse.details.text,
                book: data.verse.details.reference.split(' ')[0],
                chapter: data.verse.details.reference.split(' ')[1]?.split(':')[0] || '',
                verse_number: data.verse.details.reference.split(':')[1] || ''
              };
            } else if (apiUrl.includes('bible.org')) {
              const result = Array.isArray(data) ? data[0] : data;
              verseData = {
                verse: result.text,
                book: result.bookname,
                chapter: result.chapter,
                verse_number: result.verse
              };
            }
            break;
          }
        } catch (apiError) {
          console.log(`API ${apiUrl} failed:`, apiError);
          continue;
        }
      }

      // If all APIs fail, use fallback
      if (!verseData) {
        const randomIndex = Math.floor(Math.random() * fallbackVerses.length);
        verseData = fallbackVerses[randomIndex];
      }

      setVerse(verseData);
      setTimeout(() => setFadeIn(true), 100);
      
    } catch (err) {
      console.error('Error fetching verse:', err);
      setError(true);
      // Use fallback verse
      const randomIndex = Math.floor(Math.random() * fallbackVerses.length);
      setVerse(fallbackVerses[randomIndex]);
      setTimeout(() => setFadeIn(true), 100);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  const handleRefresh = () => {
    setFadeIn(false);
    setTimeout(() => {
      fetchVerse();
    }, 300);
  };

  const formatReference = (verse) => {
    if (!verse) return '';
    const reference = `${verse.book} ${verse.chapter}${verse.verse_number ? ':' + verse.verse_number : ''}`;
    return reference;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col relative overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>

      {/* Header */}
      <div className="text-center pt-16 pb-8 px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl pt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-4">
          Daily Word of Encouragement
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Find strength and inspiration in God's word for today
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mb-4"></div>
              <p className="text-gray-300">Receiving today's word...</p>
            </div>
          ) : (
            <div className={`transition-all duration-700 transform ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Main Verse Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 mb-8">
                <div className="text-center">
                  {/* Decorative Quote */}
                  <div className="text-6xl text-yellow-400/60 mb-6">"</div>
                  
                  {/* Verse Text */}
                  <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 italic drop-shadow-lg">
                    {verse?.verse}
                  </blockquote>
                  
                  {/* Reference */}
                  <cite className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    — {formatReference(verse)}
                  </cite>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center mb-12">
                <button
                  onClick={handleRefresh}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Get New Verse
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-yellow-400/30 opacity-50">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-32 right-16 text-purple-400/20 opacity-30">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-20 text-pink-400/20 opacity-40">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z" />
        </svg>
      </div>

      {/* Floating Hearts */}
      <div className="absolute top-1/4 right-1/4 animate-pulse">
        <div className="text-yellow-400/40 opacity-60">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      {/* Final Touch - Closing Note */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black backdrop-blur-sm border-t border-white/10 py-12 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
            <div className="px-4">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
          </div>

          {/* The Special Closing Message */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic font-light max-w-3xl mx-auto drop-shadow-lg">
            As this verse speaks to you today, may you be reminded of the same grace and faithfulness that upheld the Larbi's for{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              30 beautiful years
            </span>
            .
          </p>

          {/* Subtle Attribution */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400">
              "Let the word of Christ dwell in you richly..." — Colossians 3:16
            </p>
          </div>
        </div>
        
        {/* Footer background decorations */}
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-400/5 rounded-full blur-xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/5 rounded-full blur-xl"></div>
      </footer>
    </div>
  );
}