import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Container,
  Button,
  Row,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Carousel,
  Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { IoSearch } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FloatingActionButton from "../../Components/ReusableComponents/FAB/FloatingActionButton";
import { setLastVisit, getLastVisit, setUserPreferences, getUserPreferences, removeCookie, COOKIE_NAMES, hasCookie, getCookie } from "../../utils/cookieUtils";
import ErrorPage from "../Error/ErrorPage";

// Import images
import homepageImage from '../../Assets/images/homepageimage.jpg';
import jb1Image from '../../Assets/images/jb 1.jpeg';
import jb2Image from '../../Assets/images/jb 2.jpeg';
import wecareImage from '../../Assets/images/wecare.png';
import jbvisionImage from '../../Assets/images/jbvision.png';
import enrichImage from '../../Assets/images/enrich.png';
import jbasImage from '../../Assets/images/jblogon.png';
import project1Image from '../../Assets/images/jbvisiontop.jpg';
import project2Image from '../../Assets/images/jb 3.jpeg';
import project3Image from '../../Assets/images/jb 6.jpeg';
import testimonial1Image from '../../Assets/images/mangingdirctor.png';
import testimonial2Image from '../../Assets/images/chairman.png';
import testimonial3Image from '../../Assets/images/ravi.png';
import Arrow from '../../Assets/images/Arrowlogo.png';
import Techsys from '../../Assets/images/logowek-_imresizer (6).png';    
import JBConX from '../../Assets/images/ChatGPT_Image_Nov_11__2025__11_36_33_AM-removebg-preview.png';

const carouselItems = [
  {
    image: homepageImage,
    title: 'JBA Groups',
    subtitle: 'Turning Passion Into Possibilities',
    buttonText: 'Our Family of Companies →',
  },
  {
    image: jb1Image,
    title: 'JBVision',
    subtitle: 'Turning Passion Into Possibilities',
    buttonText: 'Our Family of Companies →',
  },
  {
    image: jb2Image,
    title: 'JBAS',
    subtitle: 'We Build, We Grow, We Inspire',
    buttonText: 'Discover More →',
  },
];

const Dashboard = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const numbersRef = useRef(null);
  const isInView = useInView(numbersRef, { once: true });

  // Track user visit and handle preferences
  useEffect(() => {
    // Attempt to remove the cookie at the very start
    try {
       removeCookie(COOKIE_NAMES.USER_PREFERENCES);
    } catch (e) {
       console.error("Error attempting to remove user preferences cookie initially:", e);
    }

    try {
      // Add another check and remove attempt right before getting preferences
      if (hasCookie(COOKIE_NAMES.USER_PREFERENCES)) {
         const currentValue = getCookie(COOKIE_NAMES.USER_PREFERENCES);
         if (currentValue === '[object Object]') {
             console.warn("Detected '[object Object]' in user preferences cookie, removing.");
             removeCookie(COOKIE_NAMES.USER_PREFERENCES);
         }
      }

      const lastVisit = getLastVisit();
      if (!lastVisit) {
        // First visit
        setUserPreferences({
          firstVisit: new Date().toISOString(),
          visitCount: 1
        });
      } else {
        // Returning visitor
        // getUserPreferences has error handling, but this extra check adds safety
        const preferences = getUserPreferences() || {};
        setUserPreferences({
          ...preferences,
          lastVisit: new Date().toISOString(),
          visitCount: (preferences.visitCount || 0) + 1
        });
      }
      setLastVisit();
    } catch (error) {
      console.error("Error handling user preferences cookie in Dashboard effect:", error);
      // The removeCookie in getUserPreferences should handle corrupted data during get
      // Continue loading the page even if cookie handling fails
    }
  }, []);

  // Handle image loading (only for initial carousel images)
  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        const imagePromises = [
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = homepageImage;
          }),
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = jb1Image;
          }),
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = jb2Image;
          })
        ];

        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading initial images:', error);
        // Don't set imageError here, let individual onError handle it
        setIsLoading(false);
      }
    };

    loadInitialImages();
  }, []);

  const scrollToCompanies = () => {
    const companiesSection = document.querySelector('.our-companies-section');
    if (companiesSection) {
      companiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isInView) {
      console.log('Legacy in Numbers section is in view, triggering animation.');
      const duration = 2000; // 2 seconds
      const targets = [500, 200, 50, 1000];
      const setters = [setCount1, setCount2, setCount3, setCount4];

      targets.forEach((target, index) => {
        let current = 0;
        const increment = target / (duration / 16); // 60fps
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setters[index](target);
            clearInterval(interval);
          } else {
            setters[index](Math.floor(current));
          }
        }, 16);
      });
    }
  }, [isInView]);

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (imageError) {
    return <ErrorPage />;
  }

  const displayCount = (count, target) => {
    // If not in view or count is still 0, display the target as a fallback
    if (!isInView || count === 0) {
      return target;
    }
    return count;
  };

  return (
    <div className="banner-container">
      {/* Carousel Section */}
      <Carousel fade controls indicators interval={4000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 banner-image"
              src={item.image}
              alt={`Slide ${index}`}
              onError={handleImageError}
            />
            <Carousel.Caption className="banner-caption">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button 
                className="cta-button"
                onClick={item.buttonText.includes('Our Family of Companies') ? scrollToCompanies : undefined}
              >
                {item.buttonText}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* We Care Section */}
      <div className="we-care-section">
        <h1 className="we-care-title">
          <img 
            src={wecareImage} 
            alt="We Care" 
            onError={handleImageError}
          />
        </h1>
        <p className="we-care-description">
          JBA Groups is a diversified conglomerate with a legacy rooted in vision and integrity.
          From pioneering constructions to shaping infrastructure, real estate, and futuristic ventures,
          we bring passion and performance to every project.
        </p>
        <button className="learn-more-button" onClick={handleLearnMoreClick}>
          Learn More About Us →
        </button>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <h2 className="about-us-title">About <span className="highlight">Us</span></h2>
        <p className="about-us-subtitle">Driven by Passion. Defined by Possibility.</p>
        <p className="about-us-description">
          JBA Groups is a powerhouse of innovation, craftsmanship, and leadership. With diversified operations
          spanning infrastructure, technology, construction, and real estate, we're shaping the future with legacy,
          precision, and purpose.
        </p>

        <div className="vision-mission-section">
          <div className="vision">
            <span className="icon">👁️</span>
            <h3 className="text">Vision</h3>
            <p>To be a global benchmark in delivering excellence across infrastructure, technology, and construction — building a legacy that inspires future generations.</p>
          </div>
          <div className="mission">
            <span className="icon yellow-icon">🎯</span>
            <h3 className="text">Mission</h3>
            <p>To empower our group companies to innovate, collaborate, and lead with integrity. To deliver sustainable, high-quality projects that enhance lives and communities. To uphold passion, purpose, and performance in everything we do.</p>
          </div>
        </div>

        {/* Our Companies */}
        <div className="our-companies-section">
  <h2 className="our-companies-title">
    Our <span className="highlight">Companies</span>
  </h2>
  <p className="our-companies-subtitle">Our Legacy of Excellence</p>

  <div className="company-cards">
    
    {/* Company 1 */}
    <div className="company-card">
      <Link to="/Jbas" className="company-link">
        <img 
          src={jbasImage}
          alt="JB ArrowStar Solutions"
          onError={handleImageError}
        />
        <p>JBAS <br/>→</p>
      </Link>
    </div>

    {/* Company 2 */}
    <div className="company-card">
      <Link to="https://arrowengmgt.com/beta/" className="https://arrowengmgt.com/beta/">
        <img 
          src={Arrow}
          alt="JB EPC Pvt Ltd"
          onError={handleImageError}
        />
        <p>Arrow <br/>→</p>
      </Link>
    </div>

    {/* Company 3 */}
    <div className="company-card">
      <Link to="https://www.jbconx.com/" className="https://www.jbconx.com/">
        <img 
          src={JBConX}
          alt="JB Infra Pvt Ltd"
          onError={handleImageError}
        />
        <p>JBConX <br/>→</p>
      </Link>
    </div>

    {/* Company 4 */}
    <div className="company-card">
      <Link to="https://techsys.com.sg/" className="https://techsys.com.sg/">
        <img 
          src={Techsys}
          alt="JB Infra Pvt Ltd"
          onError={handleImageError}
        />
        <p>Techsys <br/>→</p>
      </Link>
    </div>

  </div>
</div>

      </div>

      {/* Legacy in Numbers Section */}
      <div className="legacy-numbers-section" ref={numbersRef}>
        <h2 className="legacy-numbers-title">Our Legacy in Numbers</h2>
        <div className="numbers-stats">
          <div className="stat-item">
            <h3>{displayCount(count1, 500)}+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>{displayCount(count2, 1000)}+</h3>
            <p>Clients Served</p>
          </div>
        
          <div className="stat-item">
            <h3>{displayCount(count4, 300)}+</h3>
            <p>Employees</p>
          </div>
        </div>
      </div>

     <div className="featured-projects-section updated-featured text-center"> 
  <h2 className="featured-projects-title">
    OUR <span className="highlight">Fields of Expertise</span>
  </h2>
  <p className="featured-projects-subtitle">Crafting Landmark Across Sectors</p>

  <div className="project-wrapper">
    
    {/* Phase 1 – Luxury Villa & Plots */}
    <div className="project-card">
      <img
        src={project1Image}
        alt="Luxury Villa & Plots"
        className="project-image"
        onError={handleImageError}
      />
      <div className="project-content">
        <h5>Phase 1 – LUXURY VILLA & PLOTS</h5>
        <p className="project-purpose">
          Premium residential villas and plotted development with top-tier amenities in Hosakote, Bengaluru.
        </p>
        <Link to="/JBV" className="project-btn">
          View Details →
        </Link>
      </div>
    </div>

    {/* Phase 2 – Farm Land Plots */}
    <div className="project-card">
      <img
        src={project2Image}
        alt="Farm Land Plots"
        className="project-image"
        onError={handleImageError}
      />
      <div className="project-content">
        <h5>Phase 2 – FARM LAND PLOTS</h5>
        <p className="project-purpose">
          Serene farmland plots designed for weekend retreats and long-term eco-investment.
        </p>
        <Link to="/phase2" className="project-btn">
          View Details →
        </Link>
      </div>
    </div>

    {/* Luxury Apartments - Coming Soon */}
    <div className="project-card">
      <img
        src={project3Image}
        alt="Luxury Apartments"
        className="project-image"
        onError={handleImageError}
      />
      <div className="project-content">
        <h5>Luxury Apartments</h5>
        <p className="project-purpose">
          Upcoming high-rise living with modern comfort and city views.
        </p>
        <span className="project-btn disabled">Coming Soon</span>
      </div>
    </div>
  </div>
</div>


<div className="site-visit-cta">
          <h3>Ready to Experience Our Properties?</h3>
          <Link to="/contact#site-visit" className="site-visit-btn">
            Schedule a Site Visit
          </Link>
        </div>



      {/* Driven by Humanity Section */}
      <div className="driven-humanity-section">
        <div className="main-block">
          <h2 className="main-title">Driven by Humanity. Grounded in Sustainability.</h2>
        </div>
        <div className="initiatives-container">
          <div className="initiatives-section">
            <div className="initiative-item">
              <div className="initiative-icon">👥</div>
              <div className="initiative-content">
                <h3>Community Impact</h3>
                <p>Local partnerships: Support for schools & shelters, Volunteering programs</p>
              </div>
            </div>
            <div className="initiative-item">
              <div className="initiative-icon">🔄</div>
              <div className="initiative-content">
                <h3>Inclusive Growth</h3>
                <p>Inclusive culture: Internal growth programs, Wellness initiatives</p>
              </div>
            </div>
            <div className="initiative-item">
              <div className="initiative-icon">🌍</div>
              <div className="initiative-content">
                <h3>Environmental Care</h3>
                <p>Green building projects: Recycling & waste reduction, Carbon footprint tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="testimonials-title">What Our Director's Say</h2>
        <p className="testimonials-subtitle">Voices Behind the Vision</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">"We don't just build — we shape skylines. JBA Groups has transformed our vision into reality with their exceptional expertise and dedication."</p>
            <div className="testimonial-author">
              <img src={testimonial1Image} alt="Author" className="author-image" onError={handleImageError} />
              <div className="author-info">
                <h4>Babu G</h4>
                <p>MD, JBA Groups & JBAS</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">"The attention to detail and commitment to quality in every project is what sets JBA Groups apart. They've been instrumental in our growth."</p>
            <div className="testimonial-author">
              <img src={testimonial2Image} alt="Author" className="author-image" onError={handleImageError} />
              <div className="author-info">
                <h4>Ravi D</h4>
                <p>Director, Arrow Groups, Singapore</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* Latest News and Insights Section - DISABLED
      <div className="news-insights-section">
        <h2 className="news-insights-title">Latest news and insights</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={require('../../Assets/images/galaxy.jpeg')} alt="News" />
            <p>15/04/2025</p>
            <h3>Supporting global communities</h3>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="news-card">
            <img src={require('../../Assets/images/galaxy.jpeg')} alt="News" />
            <p>15/04/2025</p>
            <h3>Supporting global communities</h3>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="news-card">
            <img src={require('../../Assets/images/galaxy.jpeg')} alt="News" />
            <p>15/04/2025</p>
            <h3>Supporting global communities</h3>
            <button className="read-more-button">Read more</button>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default Dashboard;









  