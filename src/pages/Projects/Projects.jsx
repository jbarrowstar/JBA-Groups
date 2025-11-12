import React, { useState } from 'react';
import './Projects.css';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLeaf, FaClock, FaCity, FaUsers, FaPlayCircle } from 'react-icons/fa';

export default function JBVision2025() {
  const [showVideo, setShowVideo] = useState(false);
  const handleShowVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  const resources = [
    { title: "JB Vision Phase 1 Brochure", file: "/assets/broucher/Phase 1.pdf" },
    { title: "JB Vision Phase 2 Brochure", file: "/assets/broucher/Phase 2 A4 (1).pdf" }
  ];

  return (
    <div className="jbvision-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>JB Vision 2025</h1>
          <p>Shaping tomorrow's skyline, one vision at a time.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-section">
  <h2>Why Choose JB Vision</h2>
  <div className="why-grid">
    <div className="why-card">
      <span className="why-icon">🏗️</span>
      <p>Sustainable Construction</p>
    </div>
    <div className="why-card">
      <span className="why-icon">⏱️</span>
      <p>On-Time Delivery</p>
    </div>
    <div className="why-card">
      <span className="why-icon">🏙️</span>
      <p>Smart Urban Planning</p>
    </div>
    <div className="why-card">
      <span className="why-icon">🤝</span>
      <p>Trusted by Thousands</p>
    </div>
  </div>
</section>


      {/* Landmark Projects */}
      <section>
        <h2 className="text-center mb-5">Opening Doors to a Better Future</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" alt="Luxury Villa & Plots" />
            <h5>Luxury Villa & Plots</h5>
            <p className="text-muted">Phase 1 – Hosakote, Bengaluru</p>
            <Link to="/JBV" className="company-link mt-auto">
              <button className="btn btn-outline-warning btn-sm">View Details</button>
            </Link>
          </div>
          <div className="project-card">
            <img src="https://images.timesproperty.com/blog/6193/tp_iStock_1254330782_SS_Image_Resize.jpg" alt="Farm Land Plots" />
            <h5>Farm Land Plots</h5>
            <p className="text-muted">Phase 2 – Bengaluru</p>
            <Link to="/Phase2" className="company-link mt-auto">
              <button className="btn btn-outline-warning btn-sm">View Details</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="demo-section video-bg">
        <div className="video-overlay">
          <FaPlayCircle className="play-icon" onClick={handleShowVideo} />
          <h2>See how JBA turns vision into reality</h2>
          <p>Watch our company overview video</p>
        </div>

        <Modal show={showVideo} onHide={handleCloseVideo} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>JB Arrowstar Solutions – Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="/assets/Jbavideo.mp4"
                title="JBAS Company Video"
                allow="autoplay; encrypted-media"
                style={{ width: '100%', height: '400px', border: 'none' }}
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </section>

      {/* Resources */}
      <section className="container text-center py-5">
        <h2 className="text-center mb-4">Resources & Reports</h2>
        <ul className="list-group">
          {resources.map((r, i) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
              {r.title}
              <a className="btn btn-sm btn-warning" href={r.file} download>Download</a>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>From blueprint to legacy—experience our journey.</h2>
        <Link to="/about" className="company-link mt-auto">
        <button>Watch Our Story</button>
        </Link>
      </section>
    </div>
  );
}
