import React, { useState, useEffect, useRef } from 'react';
import tribute1 from '../assets/bg.jpeg'; // Replace with your actual images
import tribute2 from '../assets/bg.jpeg';
import tribute3 from '../assets/bg.jpeg';
import tribute4 from '../assets/bg.jpeg';
import emailjs from 'emailjs-com';
import confetti from 'canvas-confetti';

const preloadedTributes = [
  {
    image: tribute1,
    message: "Your guidance and faith have shaped generations.",
    name: "Women's Ministry"
  },
  {
    image: tribute2,
    message: "A true shepherd of integrity and humility.",
    name: "District Executive"
  },
  {
    image: tribute3,
    message: "Your legacy in Suhum is unforgettable.",
    name: "Suhum Area"
  },
  {
    image: tribute4,
    message: "Thank you for thirty years of faithful service.",
    name: "General Council"
  }
];

export default function ChurchTributes() {
  const [tributes, setTributes] = useState(() => {
    const saved = localStorage.getItem('approvedTributes');
    return saved ? JSON.parse(saved) : [];
  });
  const [pendingTributes, setPendingTributes] = useState(() => {
    const saved = localStorage.getItem('pendingTributes');
    return saved ? JSON.parse(saved) : [];
  });
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [contact, setContact] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [postPublicly, setPostPublicly] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [notification, setNotification] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('approvedTributes', JSON.stringify(tributes));
  }, [tributes]);

  useEffect(() => {
    localStorage.setItem('pendingTributes', JSON.stringify(pendingTributes));
    setNotification(pendingTributes.length > 0);
  }, [pendingTributes]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const formattedName = anonymous || !name.trim()
      ? "Anonymous"
      : origin
        ? `${name.trim()}, ${origin.trim()}`
        : name.trim();

    const newTribute = {
      message,
      name: formattedName,
      origin,
      contact,
      anonymous,
      postPublicly
    };

    emailjs.send(
      'service_24196yd',
      'template_2tkuwlh',
      {
        name: formattedName,
        message,
        origin,
        contact,
        anonymous: anonymous ? 'Yes' : 'No',
        postPublicly: postPublicly ? 'Yes' : 'No'
      },
      'V88hbOfg4rEQQxAgq'
    ).then(() => {
      console.log('Email sent!');
    }).catch(err => console.error("Email error:", err));

    setPendingTributes([newTribute, ...pendingTributes]);
    confetti();
    setMessage('');
    setName('');
    setOrigin('');
    setContact('');
    setAnonymous(false);
    setPostPublicly(true);
  };

  const handleApprove = (index) => {
    const approved = pendingTributes[index];
    setTributes([approved, ...tributes]);
    const updated = [...pendingTributes];
    updated.splice(index, 1);
    setPendingTributes(updated);
  };

  const handleEditApproved = (index, newText) => {
    const updated = [...tributes];
    updated[index].message = newText;
    setTributes(updated);
  };

  const handleDeleteApproved = (index) => {
    const updated = [...tributes];
    updated.splice(index, 1);
    setTributes(updated);
  };

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-100 py-16 px-4 sm:px-8 lg:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-4">Voices of Gratitude</h2>
        <p className="text-center text-gray-600 mb-10">Share your heartfelt tribute or memory.</p>

        {notification && isAdmin && (
          <p className="text-center text-red-600 font-semibold mb-6">You have tributes pending approval.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {preloadedTributes.map((tribute, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow text-center">
              <img src={tribute.image} alt="Tribute" className="w-full h-40 object-cover rounded mb-2" />
              <p className="italic">"{tribute.message}"</p>
              <p className="text-sm text-gray-600 mt-2 font-semibold">— {tribute.name}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">Share Your Tribute</h3>
          <textarea className="w-full p-3 border rounded mb-3" placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <input className="w-full p-2 border rounded mb-2" placeholder="Your Name (optional)" value={name} onChange={e => setName(e.target.value)} />
          <input className="w-full p-2 border rounded mb-2" placeholder="Where are you from?" value={origin} onChange={e => setOrigin(e.target.value)} />
          <input className="w-full p-2 border rounded mb-2" placeholder="Contact Info (not public)" value={contact} onChange={e => setContact(e.target.value)} />
          <p className="text-sm text-gray-500 mb-2">Contact won’t be shown publicly.</p>
          <div className="flex gap-4 mb-4">
            <label><input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} /> Anonymous</label>
            <label><input type="checkbox" checked={postPublicly} onChange={e => setPostPublicly(e.target.checked)} /> Show on Page</label>
          </div>
          <button type="submit" className="bg-purple-700 text-white w-full py-2 rounded">Submit Tribute</button>
        </form>

        {isAdmin && pendingTributes.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-purple-700 text-center mb-6">Pending Approval</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingTributes.map((t, idx) => (
                <div key={idx} className="bg-yellow-50 p-4 rounded shadow">
                  <textarea className="w-full border p-2 rounded" value={t.message} onChange={(e) => {
                    const updated = [...pendingTributes];
                    updated[idx].message = e.target.value;
                    setPendingTributes(updated);
                  }}></textarea>
                  <p className="mt-2 text-sm text-gray-500">— {t.name}</p>
                  <button onClick={() => handleApprove(idx)} className="mt-2 bg-green-600 text-white px-4 py-1 rounded">Approve</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tributes.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-purple-700 text-center mb-6">Community Tributes</h3>
            <div className="flex justify-between items-center mb-4">
              <button onClick={scrollLeft} className="text-purple-700 text-xl">&#8592;</button>
              <button onClick={scrollRight} className="text-purple-700 text-xl">&#8594;</button>
            </div>
            <div className="flex overflow-x-auto gap-4" ref={sliderRef}>
              {tributes.map((t, idx) => (
                <div key={idx} className="bg-white p-4 rounded shadow min-w-[300px] max-w-sm">
                  {isAdmin ? (
                    <textarea className="w-full border p-2 rounded mb-2" value={t.message} onChange={e => handleEditApproved(idx, e.target.value)} />
                  ) : (
                    <p className="italic">"{t.message}"</p>
                  )}
                  <p className="text-sm text-gray-500 text-right">— {t.name}</p>
                  {isAdmin && (
                    <button onClick={() => handleDeleteApproved(idx)} className="mt-2 bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
