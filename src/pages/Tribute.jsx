// Full updated ChildrenTributes component with complete styles
import React, { useState, useEffect } from 'react'; 
import emailjs from 'emailjs-com';

const childrenTributes = [
  {
    name: "Dorender",
    title: "A Father's Legacy",
    excerpt: "Dad, your unwavering faith and dedication to God's work has been the cornerstone of our family...",
    fullEssay: `Dad, your unwavering faith and dedication to God's work has been the cornerstone of our family. From the earliest memories I have, you were always leading by example, showing us what it means to serve others with humility and grace.

I remember those early morning prayers, the way you would gather us around before starting each day. Your voice, steady and sure, asking for God's guidance not just for our family, but for every soul you would encounter in your ministry. Those moments taught me that leadership isn't about position—it's about service.

Your thirty years of faithful service to the church have not gone unnoticed by any of us. We've watched you counsel families through their darkest hours, celebrate with couples on their wedding days, and hold the hands of those saying their final goodbyes. Through it all, you've remained steadfast, never wavering in your commitment to God's calling on your life.

The sacrifices you made for your ministry were never hidden from us, but neither was your joy in serving. Late nights preparing sermons, early mornings visiting the sick, weekends spent traveling to different parishes—you did it all with a heart full of love for God and His people.

As your son, I am proud of the man you are and the legacy you've built. Your impact extends far beyond the walls of any church building. You've shaped hearts, changed lives, and pointed countless souls toward heaven. Thank you for being not just a pastor to many, but the father we needed and the example we continue to follow.`,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Fred",
    title: "Lessons from a Shepherd",
    excerpt: "Papa, watching you navigate the complexities of church leadership while maintaining your integrity...",
    fullEssay: `Papa, watching you navigate the complexities of church leadership while maintaining your integrity has been one of the greatest lessons of my life. You've shown me that true strength lies not in being perfect, but in being authentic and humble before God and man.

I've seen you make difficult decisions, knowing they wouldn't always be popular, but you made them because they were right. Your wisdom in handling church conflicts, your patience with difficult members, and your ability to bring peace where there was discord—these are gifts that have blessed so many lives.

The way you've balanced being a pastor and a father has been remarkable. Despite the demands of your calling, you never made us feel like we were competing with the church for your attention. You found ways to include us in your ministry, teaching us that serving God is a family affair.

Your sermons have been more than just Sunday messages—they've been life lessons that have guided me through my own challenges. The way you've preached with conviction while remaining approachable has shown me that ministry is about connection, not just proclamation.

I remember the times when criticism came your way, as it does to all leaders, and how you handled it with grace. You taught us that responding with love, even to those who oppose us, is the Christ-like way. These lessons have shaped my character and continue to influence how I interact with others.

Thank you for being a father who led by example, a pastor who preached with authenticity, and a man who showed us what it means to finish well. Your legacy lives on in each of us, and we are committed to honoring the values you've instilled in us.`,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Gloria",
    title: "A Daughter's Gratitude",
    excerpt: "Daddy, your gentle strength and unwavering faith have been the anchors of our family...",
    fullEssay: `Daddy, your gentle strength and unwavering faith have been the anchors of our family. As your daughter, I've had the unique privilege of seeing both the public pastor and the private father, and I can testify that you are the same man in both roles—authentic, loving, and devoted to God.

Growing up as a pastor's daughter came with its unique challenges, but you and Mama made it beautiful. You taught me that being in ministry isn't about being perfect—it's about being real about our dependence on God's grace. When I made mistakes, you showed me how to seek forgiveness and start again.

Your love for Mama has been a beautiful example of what godly marriage looks like. The way you've cherished her, supported her ministries, and worked alongside her has shown me what to look for in a life partner. Your marriage has been a testament to God's design for families.

I've watched you comfort grieving families with such tenderness, officiate weddings with joy, and welcome new members with genuine warmth. But what touches my heart most is how you've always made time for your own family, ensuring we felt valued and loved despite the demands on your time.

Your prayers over us before school, your presence at our important events, and your wise counsel during our teenage years—these are the treasures I carry in my heart. You've been our spiritual leader, our protector, and our biggest supporter.

As you transition into this new season, I want you to know that your investment in us has paid dividends. We are who we are because of the foundation you laid. Your legacy isn't just in the churches you've pastored or the lives you've touched in ministry—it's in the children you've raised to love and serve God.

Thank you for being the daddy I needed and the example I continue to follow. I love you more than words can express.`,
    image: "assets/bg.jpeg"
  },
  {
    name: "Caroline",
    title: "Following Your Footsteps",
    excerpt: "Dad, your commitment to excellence in ministry while maintaining humility has shaped my understanding...",
    fullEssay: `Dad, your commitment to excellence in ministry while maintaining humility has shaped my understanding of what it means to serve God wholeheartedly. As the youngest, I've had the benefit of watching my siblings learn from you, and then applying those same lessons to my own life.

Your dedication to studying God's Word has been inspiring. I remember seeing you at your desk early in the morning, Bible open, commentaries spread around you, preparing to feed the flock God had entrusted to your care. You taught us that if we're going to speak for God, we better know what He's saying.

The way you've mentored young ministers has shown me the importance of pouring into the next generation. You never saw other pastors as competition, but as brothers in the faith who needed encouragement and guidance. Your willingness to share your knowledge and experience has multiplied your ministry impact exponentially.

I've been blessed to see your heart for missions and evangelism. Your passion for reaching the lost wasn't just relegated to Sunday services—it was a lifestyle. You taught us that every conversation is an opportunity to share God's love, and every relationship is a chance to make disciples.

Your financial integrity has been exemplary. In a time when many religious leaders have fallen due to money matters, you've maintained a spotless reputation. You've shown us that God's servants should be above reproach in all areas, especially in their handling of resources.

The way you've prepared for your retirement shows your wisdom and planning. You're not just stepping down—you're transitioning well, ensuring the ministries you've built will continue to thrive. This has taught me the importance of building sustainable systems rather than personal empires.

As I consider my own calling, I look to your example of faithfulness, integrity, and excellence. Thank you for showing me that it's possible to serve God with distinction while remaining humble and accessible. Your life has been a sermon that continues to preach to all of us.`,
    image: "https://cdn.pixabay.com/photo/2025/07/19/02/31/dragonfly-9722219_640.jpg"
  }
];

export default function ChildrenTributes() {
  const [tributes, setTributes] = useState([]);
  const [pendingTributes, setPendingTributes] = useState([]);
  const [expandedEssay, setExpandedEssay] = useState(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [contact, setContact] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [postPublicly, setPostPublicly] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdmin(true);
    }
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

    console.log('Tribute submitted:', newTribute);

    setPendingTributes([newTribute, ...pendingTributes]);
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

  const toggleEssay = (index) => {
    setExpandedEssay(expandedEssay === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-8 lg:px-16 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold pt-4 text-yellow-400 mb-4">Letters from the Heart</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Heartfelt tributes from Dorender, Fred, Gloria, and Caroline - celebrating thirty years of faithful service, love, and legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {childrenTributes.map((tribute, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="bg-purple-800 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{tribute.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{tribute.name}</h3>
                    <p className="text-gray-200 italic">{tribute.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                {expandedEssay === idx ? (
                  <div className="space-y-4">
                    {tribute.fullEssay.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className="text-gray-200 leading-relaxed mb-4">{para}</p>
                    ))}
                    <button onClick={() => toggleEssay(idx)} className="text-purple-300 hover:text-white font-semibold">
                      Show Less
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-300 italic mb-4">"{tribute.excerpt}"</p>
                    <button onClick={() => toggleEssay(idx)} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600">
                      Read Full Letter
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-950/40 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-2xl mx-auto mb-12 border border-purple-700">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">Add Your Voice</h3>
            <p className="text-gray-300">Share your own tribute or memory</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea className="w-full bg-white/10 text-white p-4 rounded-lg border border-white/20" rows="6" placeholder="Share your tribute..." value={message} onChange={e => setMessage(e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-white/10 text-white p-3 rounded-lg border border-white/20" placeholder="Your Name (optional)" value={name} onChange={e => setName(e.target.value)} />
              <input className="bg-white/10 text-white p-3 rounded-lg border border-white/20" placeholder="Where are you from?" value={origin} onChange={e => setOrigin(e.target.value)} />
            </div>
            <input className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/20" placeholder="Contact Info (admin only)" value={contact} onChange={e => setContact(e.target.value)} />
            <div className="flex gap-4">
              <label className="text-gray-300 flex items-center">
                <input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} className="mr-2" /> Submit anonymously
              </label>
              <label className="text-gray-300 flex items-center">
                <input type="checkbox" checked={postPublicly} onChange={e => setPostPublicly(e.target.checked)} className="mr-2" /> Display publicly
              </label>
            </div>
            <button type="submit" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-full py-3 rounded-lg hover:bg-purple-600">Share Your Tribute</button>
          </form>
        </div>

        {isAdmin && pendingTributes.length > 0 && (
          <div className="bg-purple-950/40 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-purple-600">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Pending Approval</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingTributes.map((t, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <textarea className="w-full bg-white/5 text-white p-3 rounded mb-3" rows="4" value={t.message} onChange={(e) => {
                    const updated = [...pendingTributes];
                    updated[idx].message = e.target.value;
                    setPendingTributes(updated);
                  }} />
                  <p className="text-sm text-gray-300 mb-3">— {t.name}</p>
                  <button onClick={() => handleApprove(idx)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Approve & Publish</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tributes.length > 0 && (
          <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Community Tributes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tributes.map((t, idx) => (
                <div key={idx} className="bg-white/10 p-6 rounded-lg border-l-4 border-purple-400">
                  <p className="italic text-gray-200 mb-4">"{t.message}"</p>
                  <p className="text-right text-gray-400 font-semibold">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

