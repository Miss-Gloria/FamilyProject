import React from 'react';
import bg from '../assets/bg.jpeg'

export default function MarriageLoveStory() {
  return (
    <section className="bg-slate-100 text-gray-800 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold leading-[1.2] pt-2  text-orange-600 mb-4">Two Hearts, One Calling</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            On February 25th, 1989, two hearts became one—joined not just in love, but in purpose. Pastor Samuel and Mrs. Felicia Larbi’s union has been a living testimony of faith, partnership, and unwavering support through every season of life and ministry.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
            Their journey began in Korle Gonno, where their marriage was blessed by two revered ministers—Pastor Matthias Ato Nkansah and Apostle Peter Ayerekwa. Since then, their story has been one of deep commitment: to each other, to God, and to the countless lives they’ve touched together.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
            Through transfers, early morning devotions, all-night prayers, and years of faithful ministry, Felicia stood beside Samuel—not just as a wife, but as a spiritual co-laborer, prayer partner, and quiet powerhouse of grace.
          </p>
        </div>

        {/* Layout: Text + Image */}
        <div className="md:flex md:items-center gap-8">
          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <ul className="text-gray-800 text-base leading-relaxed space-y-2">
              <li><strong>📅 Married on:</strong> 25th February, 1989</li>
              <li><strong>👰🏾 Wife:</strong> Mrs. Felicia Larbi, from Agona Nyarkrom</li>
              <li><strong>⛪ Marriage blessed by:</strong> Pastor Matthias Ato Nkansah & Apostle Peter Ayerekwa</li>
              <li><strong>👨‍👩‍👧‍👦 Blessed with:</strong> Four biological children + 35 spiritual children</li>
            </ul>
            <p className="text-gray-600 italic mt-6">
              "Together, they lived a sermon louder than any words could preach."
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={bg} alt="Pastor and Mrs. Larbi" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
