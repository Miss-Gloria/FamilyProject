import React from 'react';

export default function TheirJourney() {
  return (
    <section id="journey" className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold leading-[1.2] pt-4 text-yellow-400 mb-4">Their Journey</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From one village to many nations, from one couple to countless souls, Pastor Samuel and Mrs. Felicia Larbi have journeyed through decades of faithful ministry, planting churches, nurturing families, raising spiritual sons and daughters, and transforming communities with the light of Christ.
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mt-4">
            What began as a humble yes to God's call in the 1990s blossomed into a ministry that has touched every region they were sent to, spanning Pong Tamale to Anyinam, and far beyond. Together, they lived the Gospel: he as a shepherd with wisdom and boldness, and she as a quiet strength behind every sermon, prayer, and sacrifice.
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mt-4">
            Thirty years later, their footprints are in churches, families, pulpits, and hearts across Ghana, and their legacy continues to speak.
          </p>
          <p className="text-md italic text-purple-300 mt-6">
            “And I will give you shepherds after My own heart, who will feed you with knowledge and understanding.” – Jeremiah 3:15
          </p>
        </div>

        {/* Timeline Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[ 
            { station: 'Pong Tamale', area: 'Tamale', years: '1995–2001' },
            { station: 'Jaman Drobo', area: 'Berekum', years: '2001–2006' },
            { station: 'Twifo Wawase', area: 'Assin Fosu', years: '2006–2011' },
            { station: 'Tarkwa Nsuaem', area: 'Tarkwa', years: '2011–2016' },
            { station: 'Asante Nsuta', area: 'Mampong', years: '2016–2021' },
            { station: 'Akyem Anyinam', area: 'Suhum', years: '2021–2025' },
          ].map(({ station, area, years }, idx) => (
            <div
              key={idx}
              className="border-l-4 border-purple-500 pl-4 py-4 bg-white/10 rounded-lg shadow-sm"
            >
              <h4 className="text-xl font-bold text-white">{station}</h4>
              <p className="text-sm text-gray-300">Area: {area}</p>
              <p className="text-sm text-gray-400">Years Served: {years}</p>
            </div>
          ))}
        </div>

        {/* Key Responsibilities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Some Key Responsibilities & Leadership Roles</h3>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-300">
            <li>Children’s Ministry Leader (1996–2001)</li>
            <li>Youth Ministry Leader (1996–2001)</li>
            <li>Missions Committee Chairman</li>
            <li>Pastor’s Welfare Chairman</li>
            <li>Ministerial Committee Member (multiple areas)</li>
            <li>Discipleship Coordinator (2009–2024)</li>
          </ul>
        </div>

        {/* Retirement Milestone */}
        <div className="bg-white/10 border-l-4 border-purple-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-300 mb-2">🏁 Retirement Milestone</h3>
          <p className="text-gray-200">
            Retired from full-time ministry on <strong>27th July, 2025</strong> after 30 years of faithful service to God and country.
          </p>
        </div>
      </div>
    </section>
  );
}
