import React from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaTree,
  FaSwimmingPool,
  FaDumbbell,
  FaRunning,
  FaWater,
} from 'react-icons/fa';
import './JBVision.css';
import { Link, useNavigate } from "react-router-dom";

const heroImg = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80';

const galleryImgs = [
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
];

const amenities = [
  { icon: <FaShieldAlt />, label: '24×7 Security' },
  { icon: <FaTree />, label: 'Park' },
  { icon: <FaRunning />, label: 'Jogging Track' },
  { icon: <FaDumbbell />, label: 'Gym' },
  { icon: <FaSwimmingPool />, label: 'Swimming Pool' },
  { icon: <FaTree />, label: 'Play Area' },
  { icon: <FaWater />, label: 'Rainwater Harvest' },
  { icon: <FaShieldAlt />, label: 'CCTV Surveillance' },
  { icon: <FaTree />, label: 'Landscaped Gardens' },
  { icon: <FaRunning />, label: 'Cycling Track' },
  { icon: <FaDumbbell />, label: 'Clubhouse' },
  { icon: <FaSwimmingPool />, label: 'Kids Pool' },
  { icon: <FaTree />, label: 'Amphitheatre' },
  { icon: <FaWater />, label: 'Water Features' },
  { icon: <FaShieldAlt />, label: 'Gated Entry' },
  { icon: <FaTree />, label: 'Yoga Deck' },
  { icon: <FaRunning />, label: 'Sports Courts' },
  { icon: <FaDumbbell />, label: 'Party Lawn' },
  { icon: <FaSwimmingPool />, label: 'Skating Rink' },
  { icon: <FaTree />, label: 'Senior Citizen Zone' },
];

const insights = [
  {
    title: 'International School',
    time: '10 min',
    bg: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=60',
    top: '20%',
    left: '30%',
  },
  {
    title: 'MVJ Medical College',
    time: '15 min',
    bg: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
    top: '35%',
    left: '50%',
  },
  {
    title: 'Orion Mall',
    time: '30 min',
    bg: 'https://images.unsplash.com/photo-1592066575517-58df903152f2?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
    top: '55%',
    left: '65%',
  },
  {
    title: 'Airport',
    time: '30–40 min',
    bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60',
    top: '10%',
    left: '70%',
  },
  {
    title: 'Whitefield ITPL',
    time: '40 min',
    bg: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    top: '70%',
    left: '80%',
  },
  {
    title: 'Chennai Expressway',
    time: '10 min',
    bg: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=60',
    top: '80%',
    left: '40%',
  },
];

const reveal = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function JBVision() {
  return (
    <div className="Phase1">
      <motion.section className="hero-section" initial="hidden" animate="visible" variants={reveal}>
        <img src={heroImg} alt="Luxury plots hero" className="hero-img" />
        <div className="hero-content">
          <h1>Your Luxury Lifestyle Starts Here</h1>
          <p>Premium Villa Plots in Hoskote, Bengaluru</p>
          <Link to="/contact" className="project-btn">
          <button>Contact Now</button>
          </Link>
        </div>
      </motion.section>

      <motion.section className="section amenities-section" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2 className="centered-heading">20+ Modern Amenities</h2>
          <div className="amenities-carousel">
            <div className="amenities-track">
              {amenities.map((a, i) => (
                <div key={i} className="amenity-large">
                  <span className="amenity-icon">{a.icon}</span>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section features-section" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2>What Makes Us Unique?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span role="img" aria-label="city">🏙️</span>
              <h4>Modern Infrastructure</h4>
              <p>State-of-the-art planning with sustainable development.</p>
            </div>
            <div className="feature-card">
              <span role="img" aria-label="highway">🛣️</span>
              <h4>Excellent Connectivity</h4>
              <p>Quick access to highways, metro & airport.</p>
            </div>
            <div className="feature-card">
              <span role="img" aria-label="tree">🌳</span>
              <h4>Green Community</h4>
              <p>Lush landscapes with parks, gardens, and tree-lined avenues.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section gallery-section" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {galleryImgs.map((src, i) => (
              <img key={i} src={src} alt={`Gallery ${i + 1}`} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Updated Insights Section */}
      <motion.section className="section insights-section" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2>Nearby Insights</h2>
          <div className="insights-map-container">
            {insights.map((item, i) => (
              <motion.div
  key={i}
  className="map-marker"
  style={{ top: item.top, left: item.left, backgroundImage: `url(${item.bg})` }}
  initial={{ opacity: 0, scale: 0.5, y: 30 }}
  animate={{
    opacity: 1,
    scale: [1, 1.05, 1],
    y: 0,
  }}
  transition={{
    delay: i * 0.2,
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
    type: "tween",
  }}
  whileHover={{ scale: 1.15, zIndex: 10 }}
>
  <strong>{item.title}</strong>
  <p>{item.time}</p>
</motion.div>


            ))}
          </div>
        </div>
      </motion.section>
      {/* Phase Highlights Section */}
<section className="phase-highlights">
  <h2>Phase 1 Highlights</h2>
  <div className="highlights-grid">
    <div className="highlight-card">
      <span>📍</span>
      <h4>Prime Location</h4>
      <p>Strategically located near major development zones in Bengaluru.</p>
    </div>
    <div className="highlight-card">
      <span>🏗️</span>
      <h4>Advanced Infrastructure</h4>
      <p>Wide roads, sewage, drainage, water supply and electrification.</p>
    </div>
    <div className="highlight-card">
      <span>🌱</span>
      <h4>Eco-Friendly Planning</h4>
      <p>Ample green zones and landscaping across the layout.</p>
    </div>
    <div className="highlight-card">
      <span>💼</span>
      <h4>Investment Ready</h4>
      <p>High ROI potential in upcoming East Bengaluru corridor.</p>
    </div>
  </div>
</section>

{/* Future Development Vision */}
<section className="future-vision">
  <h2>Our Vision for Phase 1</h2>
  <p className="vision-text">
    At JB Vision Phase 2, we envision a connected, sustainable community with modern infrastructure, lifestyle amenities, and superior appreciation potential. 
    With a strategic master plan, we aim to deliver value that grows with time.
  </p>
</section>


      <motion.section className="cta" initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.8 }}>
        <div className="section-content">
          <h2>Book Your Plot Today!</h2>
          <p>Secure your luxury plot before prices climb. Limited units left.</p>
          <Link to="/contact" className="project-btn">
          <button>Contact Now</button>
          </Link>
        </div>
      </motion.section>

      <motion.section className="contact" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2>Contact & Booking</h2>
          <p><strong>Site Office:</strong> SiteNo.121, Hoskote Malur Road, Bengaluru‑562114</p>
          <p><strong>Reg Office:</strong> #11/3, Bhattarahalli Village, Bengaluru‑560036</p>
          <p><strong>📞 Phone:</strong> +91 96189 91192, +91‑91084 74111</p>
          <p><strong>🌐 Website:</strong> <a href="https://jbagroups.com" target="_blank" rel="noreferrer">jbagroups.com</a></p>
        </div>
      </motion.section>
    </div>
  );
}
