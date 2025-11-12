import React, { useState, useEffect } from 'react';
import './JBvision.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const JBVision2025 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="jb-section">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="Hero Background"
          className="hero-background"
        />
        <div className="hero-overlay">
          <h1>JB Vision 2025</h1>
          <p>Building the Future of Modern Living</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Projects</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* JB Vision Phase 1 Section */}
      <section className="phase-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}>
        <div className="phase-overlay">
          <h2>JB Vision - Phase 1</h2>
          <p>
            Phase 1 of JB Vision began with a bold goal: redefine affordable luxury. Featuring 2BHK and 3BHK residential apartments
            with top-tier amenities like rooftop gardens, gymnasiums, children’s play areas, and 24/7 security.
          </p>
        </div>
      </section>

      {/* JB Vision Phase 2 Section */}
      <section className="phase-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154084-7c1a00ae1744')" }}>
        <div className="phase-overlay">
          <h2>JB Vision - Phase 2</h2>
          <p>
            A mixed-use community development featuring smart homes, commercial outlets, landscaped parks, and solar power. Focused
            on sustainable and smart living solutions.
          </p>
        </div>
      </section>

      {/* Transparent Highlight Section */}
      <section className="transparent-section" data-aos="fade-up">
        <div className="transparent-content">
          <h2>Our Promise</h2>
          <p>
            We are committed to delivering excellence with integrity, innovation, and quality. Every brick laid reflects our vision of creating future-ready, sustainable communities.
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section" data-aos="fade-up">
        <h2>Amenities</h2>
        <div className="amenities-slider">
          <div className="amenity-card">Swimming Pool</div>
          <div className="amenity-card">Club House</div>
          <div className="amenity-card">Gym & Yoga Hall</div>
          <div className="amenity-card">24x7 Security</div>
          <div className="amenity-card">Rainwater Harvesting</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" data-aos="fade-up">
        <div className="about-content">
          <div className="about-images">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914" alt="build" />
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" alt="build" />
          </div>
          <div className="about-text">
            <h2>About JB Vision</h2>
            <p>
              JB Vision is a premier construction initiative focused on crafting modern, sustainable, and functional living
              environments. With a commitment to excellence, we blend architectural brilliance with innovation and technology.
            </p>
            <button className="download-btn">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" data-aos="fade-up">
        <h2 className="gallery-title">Lifestyle Gallery</h2>
        <div className="gallery-content">
          <div className="gallery-description">
            <p>
              Explore the essence of refined living through our visual tour. Our gallery reflects the serene beauty,
              modern design, and vibrant community life within JB Vision.
            </p>
          </div>
          <div className="gallery-video">
            <div className="video-container">
              <img src="https://images.unsplash.com/photo-1600585154084-7c1a00ae1744" alt="Gallery Thumb" className="video-thumb" />
              <div className="video-overlay">
                <p>Watch Video</p>
                <span className="play-button">▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="choose-section" data-aos="fade-up">
        <h2>Why Choose JB Vision?</h2>
        <div className="choose-cards">
          <div className="choose-card">Timely Delivery</div>
          <div className="choose-card">Transparent Pricing</div>
          <div className="choose-card">Top-Quality Materials</div>
          <div className="choose-card">Excellent Connectivity</div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section" data-aos="fade-up">
        <h2>Project Milestones</h2>
        <ul className="milestone-list">
          <li>✔️ Phase 1 - 100+ Flats Sold</li>
          <li>✔️ Phase 2 - Smart Commercial Launch</li>
          <li>✔️ 90% Work Completed on Club House</li>
        </ul>
      </section>

      {/* How We Work */}
      <section className="workflow-section" data-aos="fade-up">
        <h2>How We Work</h2>
        <div className="workflow-steps">
          <div className="step">1. Planning & Design</div>
          <div className="step">2. Approvals & Budgeting</div>
          <div className="step">3. Construction Phase</div>
          <div className="step">4. Handover & Maintenance</div>
        </div>
      </section>

      {/* WhatsApp & Scroll to Top */}
      <a
        href="https://wa.me/919000000000"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default JBVision2025;
