import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaChartLine, FaBuilding, FaHandshake, FaHistory, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import "./About.css";
import director from '../../Assets/images/mangingdirctor.png';

const About = () => {
  return (
    <div className="aboutPage">
      {/* Hero Section with Parallax */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-container"
          >
            <h1>About <span className="highlight">JBA Groups</span></h1>
            <p className="hero-subtitle">Driven by Passion. Defined by Possibility.</p>
            <motion.div 
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#about-content" className="cta-button">
                Explore Our Story <FaArrowRight />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </div>

      <motion.div
        id="about-content"
        className="container aboutContent py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Company Overview Section with Floating Elements */}
        <Row className="mb-5" id="our-story">
          <Col lg={12}>
            <Card className="aboutCard p-4 floating-card">
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">Our Story</h2>
                <p className="lead">
                  JBA Groups is a diversified business conglomerate committed to delivering excellence across two core sectors: technology and real estate. As the parent company of JB Aerowstar Solutions (JBAS) and JB Vision, we offer a synergy of digital innovation and premium property solutions, aligned with the evolving needs of modern enterprises and discerning homeowners.
                </p>
                <p>
                  Backed by a strong foundation of ethics, expertise, and execution, JBA Groups is driven by a mission to transform ideas into value and create lasting impact for our clients, partners, and communities.
                </p>
              </motion.div>
            </Card>
          </Col>
        </Row>

        {/* History Section with Timeline */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="aboutCard p-4 timeline-card">
              <div className="section-header">
                <FaHistory className="section-icon" />
                <h2 className="section-title">Our Journey</h2>
              </div>
              <div className="timeline">
                <motion.div 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Foundation</h3>
                    <p>Started with a vision to bridge technology and practical solutions</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Expansion</h3>
                    <p>Expanded into luxury real estate with JB Vision</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Innovation</h3>
                    <p>Launched JBAS for comprehensive digital solutions</p>
                  </div>
                </motion.div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Subsidiaries Section with Hover Effects */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="aboutCard p-4 h-100 subsidiary-card">
                <div className="section-header">
                  <FaBuilding className="section-icon" />
                  <h3 className="section-title">JBAS</h3>
                </div>
                <p className="subtitle">Technology that transforms business.</p>
                <div className="feature-grid">
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">🌐</span>
                    <span>Web & Mobile Apps</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">📊</span>
                    <span>CRM & ERP</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">☁️</span>
                    <span>Cloud Solutions</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">🎨</span>
                    <span>UI/UX Design</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="aboutCard p-4 h-100 subsidiary-card">
                <div className="section-header">
                  <FaBuilding className="section-icon" />
                  <h3 className="section-title">JB Vision</h3>
                </div>
                <p className="subtitle">Redefining modern living.</p>
                <div className="feature-grid">
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">🏰</span>
                    <span>Luxury Villas</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">🏡</span>
                    <span>Residential Plots</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">🏘️</span>
                    <span>Gated Communities</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="feature-icon">💎</span>
                    <span>Premium Projects</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Leadership Section with Quote */}
        <Row className="mb-5" id="leadership">
          <Col lg={12}>
            <Card className="aboutCard p-4 leadership-card">
              <div className="section-header">
                <FaUsers className="section-icon" />
                <h2 className="section-title">Leadership</h2>
              </div>
              <motion.div 
                className="quote-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="quote-text">
                  "We don't just build businesses; we build legacies that inspire future generations."
                </p>
              </motion.div>
              <motion.div 
                className="leader-profile"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="leader-name">Mr. Babu G</h3>
                <p className="subtitle">Chairman & Managing Director, JBA Groups</p>
                <p>
                  A visionary entrepreneur and technologist, Mr. Babu G established JBA Groups with a goal to redefine service excellence across industries. With a background in Computer Science Engineering and a deep understanding of business operations, he continues to lead the group with strategic clarity, innovation-first thinking, and a strong commitment to ethical growth.
                </p>
              </motion.div>
            </Card>
          </Col>
        </Row>

        {/* Board of Directors Section */}
        <Row className="mb-5" id="board">
          <Col lg={12}>
            <Card className="aboutCard p-4 board-card">
              <div className="section-header">
                <FaUsers className="section-icon" />
                <h2 className="section-title">Board of Directors</h2>
              </div>
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <motion.div 
                    className="board-member-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="board-member-image">
                      <img src={director} alt="Board Member" />
                    </div>
                    <h3 className="board-member-name">Mr. Babu G</h3>
                    <p className="board-member-position">Independent Director</p>
                    <p className="board-member-bio">
                      With over 20 years of experience in corporate governance and strategic planning, Mr.Babu G brings valuable insights to our board.
                    </p>
                  </motion.div>
               </Col>
                 
                
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Mission and Vision Section with Gradient Cards */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="aboutCard p-4 h-100 gradient-card vision-card">
                <div className="section-header">
                  <FaLightbulb className="section-icon" />
                  <h3 className="section-title">Our Vision</h3>
                </div>
                <p>
                  To be a trusted, multi-sector leader known for innovation, integrity, and service excellence — transforming lives through advanced technology and distinguished real estate.
                </p>
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="aboutCard p-4 h-100 gradient-card mission-card">
                <div className="section-header">
                  <FaChartLine className="section-icon" />
                  <h3 className="section-title">Our Mission</h3>
                </div>
                <p>
                  To deliver integrated solutions that combine digital intelligence and lifestyle enhancement, with an unwavering commitment to quality, transparency, and client success.
                </p>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Core Values Section with Interactive Cards */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="aboutCard p-4 values-card">
              <div className="section-header">
                <FaHandshake className="section-icon" />
                <h2 className="section-title">Core Values</h2>
              </div>
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <motion.div 
                    className="value-card"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHandshake className="value-icon" />
                    <h4>Integrity</h4>
                    <p>Conducting business with honesty and responsibility</p>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div 
                    className="value-card"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLightbulb className="value-icon" />
                    <h4>Innovation</h4>
                    <p>Continuously improving and adapting to change</p>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div 
                    className="value-card"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaChartLine className="value-icon" />
                    <h4>Excellence</h4>
                    <p>Setting benchmarks in quality and performance</p>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div 
                    className="value-card"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUsers className="value-icon" />
                    <h4>Client-Centricity</h4>
                    <p>Understanding and exceeding customer expectations</p>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div 
                    className="value-card"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaBuilding className="value-icon" />
                    <h4>Sustainability</h4>
                    <p>Building for today while securing tomorrow</p>
                  </motion.div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default About; 