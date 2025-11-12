import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/about');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col md={3} sm={6} className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about" onClick={(e) => { e.preventDefault(); scrollToSection('our-story'); }}>Our History</Link></li>
                <li><Link to="/about" onClick={(e) => { e.preventDefault(); scrollToSection('leadership'); }}>Founder-Chairman</Link></li>
                <li><Link to="/about" onClick={(e) => { e.preventDefault(); scrollToSection('board'); }}>Board of Directors</Link></li>
              </ul>
            </Col>

            <Col md={3} sm={6} className="footer-section">
              <h3>Resources</h3>
              <ul>
                
                {/* <li><Link to="/developers">Developers</Link></li> */}
                <li><Link to="/legal">Legal</Link></li>
                <li><Link to="/privacy-policy">Privacy</Link></li>
                
                {/* <li><a href="#pricing">Pricing plans</a></li> */}
              </ul>
            </Col>

            <Col md={3} sm={6} className="footer-section company-section">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>

              <button className="cta-button" onClick={() => navigate('/contact')}>Get in touch</button>

              <div className="social-icons">
                <a href="https://www.facebook.com/jbagrps" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/jbagroups" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </Col>

            <Col md={3} sm={6} className="footer-section location-section">
              <h3>Our Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Bhattarahalli+village+Bidarahalli+hobli+Bangalore,+Karnataka+-+560036,+Bangalore,+India+560036&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JBA Groups Location"
                ></iframe>
              </div>
              <div className="location-details">
                <p>
                  <FaMapMarkerAlt className="location-icon" />
                  <span>
                    #11/3 , Bhattarahalli village<br />
                    Bidarahalli hobli<br />
                    Bangalore, Karnataka - 560036,<br />
                    Bangalore, India 560036
                  </span>
                </p>
                <p><FaPhone className="location-icon" /> <span>(+91) 9108474111</span></p>
                <p><FaEnvelope className="location-icon" /> <span>info@jbas.co.in</span></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <p>© 2024 JBA Groups. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
