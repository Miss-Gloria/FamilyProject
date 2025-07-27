import React from "react";

const images = [
  "1.jpg", "2.jpg", "3.jpg", "bg.jpg",
  "4.jpg", "5.jpg", "8.jpg", "5.jpg", "7.jpg", "9.jpg", "10.jpg",
  "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg",
  "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg",
  "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg",
  "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
  "41.jpg", "42.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg",
  "48.jpg", "49.jpg", "50.jpg", "52   .jpg", "53.jpg", "54.jpg" , "58.jpg", "59.jpg",    "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">View Our Journey</h2>
      <p className="text-gray-600 mb-8">
        A journey of faith, love, and service — 30 years in pictures.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={`/images/${img}`}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
