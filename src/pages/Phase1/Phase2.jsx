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
import './Phase2.css';
import { Link, useNavigate } from "react-router-dom";

const heroImg = 'https://thumbs.dreamstime.com/b/land-plot-sale-aerial-view-landscape-green-field-include-agriculture-farm-house-building-village-real-estate-219388811.jpg';

const galleryImgs = [
  'https://www.shutterstock.com/image-photo/land-landscape-green-field-aerial-600nw-2504778555.jpg',
  'https://images.timesproperty.com/blog/6193/tp_iStock_1254330782_SS_Image_Resize.jpg',
  'https://thumbs.dreamstime.com/b/land-plot-sale-aerial-view-landscape-green-field-include-agriculture-farm-house-building-village-real-estate-219388811.jpg',
];

const amenities = [
  { icon: <FaShieldAlt />, label: '24×7 Security' },
  { icon: <FaTree />, label: 'Fully Fenced Farm Plots' },
  { icon: <FaRunning />, label: 'Wide Roads' },
  { icon: <FaDumbbell />, label: 'Clubhouse' },
  { icon: <FaSwimmingPool />, label: 'Swimming Pool' },
  { icon: <FaWater />, label: 'Rainwater Harvesting' },
  { icon: <FaShieldAlt />, label: 'CCTV Surveillance' },
  { icon: <FaTree />, label: 'Rich Plantation' },
  { icon: <FaTree />, label: 'Park & Open Spaces' },
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
    bg: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=400&q=60',
    top: '35%',
    left: '50%',
  },
  {
    title: 'Orion Uptown Mall',
    time: '20 min',
    bg: 'https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&w=400&q=60',
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
    title: 'Chennai Expressway',
    time: '10 min',
    bg: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=60',
    top: '80%',
    left: '40%',
  },
];

const reveal = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function JBVisionPhase2() {
  return (
    <div className="jbphase2">
      <motion.section className="hero-section" initial="hidden" animate="visible" variants={reveal}>
        <img src={heroImg} alt="Farm Plots Banner" className="hero-img" />
        <div className="hero-content">
          <h1>JB VISION Phase II – Farm Plots</h1>
          <p>Own a Fully Fenced Farmland with Rich Plantation</p>
          <Link to="/contact" className="project-btn">
          <button>Contact Now</button>
          </Link>
    
        
        </div>
      </motion.section>

      <motion.section className="section amenities-section" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2 className="centered-heading">15+ World-Class Amenities</h2>
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
          <h2>Why JB Vision Phase II?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span role="img" aria-label="approval">✅</span>
              <h4>Approved Layout</h4>
              <p>Fully approved by local authorities for hassle-free ownership.</p>
            </div>
            <div className="feature-card">
              <span role="img" aria-label="bank">🏦</span>
              <h4>Bank Loans Available</h4>
              <p>Financial assistance from top banks to make buying easier.</p>
            </div>
            <div className="feature-card">
              <span role="img" aria-label="location">📍</span>
              <h4>Prime Location</h4>
              <p>Near schools, colleges, hospitals & expressway.</p>
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

      <motion.section className="section insights-section" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2>Nearby Highlights</h2>
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
      {/* Investment Benefits Section */}
<section className="investment-benefits">
  <h2>Why Invest With Us?</h2>
  <div className="benefits-grid">
    <div className="benefit-card">
      <span>📈</span>
      <h4>High Appreciation</h4>
      <p>Plots located in emerging real estate hubs ensure solid returns.</p>
    </div>
    <div className="benefit-card">
      <span>🛣️</span>
      <h4>Strategic Connectivity</h4>
      <p>Close proximity to highways, schools, and employment zones.</p>
    </div>
    <div className="benefit-card">
      <span>🌳</span>
      <h4>Green Lifestyle</h4>
      <p>Eco-friendly planning with open spaces and landscape gardens.</p>
    </div>
    <div className="benefit-card">
      <span>🔐</span>
      <h4>Safe & Secure</h4>
      <p>Fully gated communities with 24×7 surveillance systems.</p>
    </div>
  </div>
</section>

{/* Brand Values Section */}
<section className="brand-values">
  <h2>Our Brand Values</h2>
  <div className="values-grid">
    <div className="value-card">
      <span>✅</span>
      <h4>Trust</h4>
      <p>Years of transparent and honest dealings in real estate.</p>
    </div>
    <div className="value-card">
      <span>🚀</span>
      <h4>Innovation</h4>
      <p>Modern layouts, sustainable design, and futuristic planning.</p>
    </div>
    <div className="value-card">
      <span>🏆</span>
      <h4>Excellence</h4>
      <p>Commitment to delivering top-tier infrastructure & amenities.</p>
    </div>
    <div className="value-card">
      <span>🤝</span>
      <h4>Customer Focus</h4>
      <p>Always placing your satisfaction and growth first.</p>
    </div>
  </div>
</section>


      <motion.section className="cta" initial="hidden" animate="visible" variants={reveal}>
        <div className="section-content">
          <h2>Book Your Farmland Today!</h2>
          <p>Limited Units Left | Peaceful Green Surroundings | Investment Value</p>
          <Link to="/contact" className="project-btn">
          <button>Contact Now</button>
          </Link>
        </div>
      </motion.section>

      <motion.section className="contact" initial="hidden" whileInView="visible" variants={reveal}>
        <div className="section-content">
          <h2>Contact & Booking</h2>
          <p><strong>Site Office:</strong> Site No.121, Hoskote Malur Road, Behind Morarji Desai PU College, Bengaluru‑562114</p>
          <p><strong>Reg Office:</strong> #11/3, Bhattarahalli Village, Bengaluru‑560036</p>
          <p><strong>📞 Phone:</strong> +91 96189 91192, +91 91084 74111</p>
          <p><strong>🌐 Website:</strong> <a href="https://jbagroups.com" target="_blank" rel="noreferrer">jbagroups.com</a></p>
        </div>
      </motion.section>
    </div>
  );
}
