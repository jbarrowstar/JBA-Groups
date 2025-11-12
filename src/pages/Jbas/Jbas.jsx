import React, { useState, useEffect } from "react"; 
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Badge,
} from "react-bootstrap";
import "./Jbas.css";
import aboutImage from "../../Assets/images/about.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumbnail from "../../Assets/images/Dashboard.jpg";
import { FaPlay, FaFacebook, FaIndustry, FaUniversity, FaStethoscope, FaTruckMoving, FaHandHoldingHeart } from "react-icons/fa";
import { FiWifi, FiShare2, FiSend } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const header = document.querySelector('.jbas-header');
    const onScroll = () => {
      header?.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    {
      title: 'Cost-effectiveness',
      description:
        'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
    },
    {
      title: 'Innovative Technology',
      description:
        'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
    },
    {
      title: 'Industry Expertise',
      description:
        'We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.',
    },
    {
      title: 'Scalability',
      description:
        'Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.',
    },
  ];

  const solutionsData = [
    {
      title: "Web Development",
      icon: "🌐",
      description:
        "Our web development approach combines cutting-edge technology with green design principles, ensuring fast, responsive, and secure websites.",
    },
    {
      title: "Mobile Development",
      icon: "📱",
      description:
        "Our mobile development process combines intuitive UI/UX design, robust backend systems, and frameworks to support Android and iOS platforms.",
    },
    {
      title: "Custom Software",
      icon: "🧩",
      description:
        "Our custom software is designed from the ground up to align with your workflows, scale with your operations, and deliver measurable results.",
    },
    {
      title: "Digital Marketing",
      icon: "🔐",
      description:
        "Our digital marketing solutions align with your brand goals and operations to deliver measurable outcomes and business growth.",
    },
    {
      title: "Custom Software",
      icon: "💻",
      description:
        "We develop software to support data-conscious organizations, green initiatives, and mission-critical applications with high performance.",
    },
    {
      title: "Automation",
      icon: "🤖",
      description:
        "By integrating intelligent workflows, custom solutions, and analytics, we empower businesses to work faster and smarter.",
    },
  ];

  const industries = [
    { name: 'Industry & Manufacturing', img: require('../../Assets/images/industry.jpeg') },
    { name: 'Bank Insurance', img: require('../../Assets/images/factory.jpeg') },
    { name: 'Consulting & Providers', img: require('../../Assets/images/payments.jpeg') },
    { name: 'Transportation Logistics', img: require('../../Assets/images/cars.jpeg') },
    { name: 'Non-Profit', img: require('../../Assets/images/aircraft.jpeg') }
  ];
  
  const projects = [
    {
      title: 'Successful completion of the Flight Simulator Game project',
      desc: 'Flight Simulator Game project, developed in collaboration with National Aerospace Laboratories (NAL), showcasing our expertise in advanced simulation technologies and innovative software development.',
      services: ['Modern Infrastructure', 'Consulting services'],
      image: require('../../Assets/images/aircraft.jpeg')
    },
    {
      title: 'Successful completion of the Image Re-production project',
      desc: 'The process of aligning two or more images of the same scene taken at different times, from different viewpoints, or by different sensors. It plays a critical role in various fields such as remote sensing, medical imaging, computer vision, and robotics.',
      services: ['Modern Infrastructure', 'Consulting services'],
      image: require('../../Assets/images/imageGenaration.jpeg')
    },
    {
      title: 'Successful completion of the Scene Generation project',
      desc: 'Scene Generation is the process of creating immersive, interactive 3D environments where a single scene can be viewed from multiple angles, positions, and perspectives. This technology is widely used in gaming, architecture, simulations, virtual tours, and product showcases.',
      services: ['Modern Infrastructure', 'Consulting services'],
      image:require('../../Assets/images/imageRigistration.jpg')
    }
  ];

  return (
    <div className="hero-services">
      <div className="hero-image">
      <img
        src={require("../../Assets/images/hero.jpeg")}
        alt="Hero Background"
        className="hero-background"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">
          Take charge of your business <br />
          continuity with innovative IT <br />
          solutions
        </h1>
        <p className="hero-subtitle">
          <span className="highlight-green">JB Arrowstar Solutions Private Limited</span> empowers businesses with smart, scalable tech solutions tailored for tomorrow’s challenges.
        </p>
        <div className="tooltip-container">
  <button 
    className="explore-button"
    onClick={() => window.location.href = "https://jbas.co.in"}
  >
    Explore to JBAS <FaArrowRight className="arrow-icon" />
  </button>
  <span className="tooltip-text">
    You are now being redirected to our upgraded platform — JBAS!<br />
    JB Groups has been integrated into JBAS for a better and smarter user experience.
  </span>
</div>



      </div>
      </div>

      <section className="services-section">
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <h2 className="section-title">Our Services</h2>
  </div>
  <div className="services-grid">
    {services.map((service, index) => (
      <div
        key={index}
        className={`service-item ${hoverIndex === index ? 'highlighted-service' : ''}`}
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
</section>


      <section className="solutions-section">
      <h2 className="solutions-title">Solutions</h2>
      <div className="solutions-grid">
        {solutionsData.map((solution, index) => (
          <div className="solution-card" key={index}>
            <div className="solution-icon">{solution.icon}</div>
            <h4>{solution.title}</h4>
            <p>{solution.description}</p>
          { /*  <button className="learn-more-btn">Learn More</button> */ }
          </div>
        ))}
      </div>
      <div className="view-all-container">
        { /* <button className="view-all-btn">View All Solutions</button> */}
      </div>
    </section>
    <section className="combined-section">
    {/* Industries */}
    <div className="industries">
      <h2 className="section-title">Industries</h2>
      <p className="section-subtitle">Solving IT challenges in every industry,<br />every day.</p>
      <div className="industry-tags">
        {industries.map((ind, i) => (
          <div key={i} className="industry-tag">
            <img src={ind.img} alt={ind.name} />
            <span>{ind.name}</span>
          </div>
        ))}
      </div>
      <a className="view-all" href="#">View All Industries</a>
    </div>

    {/* Projects */}
    <div className="success-stories">
      <h2 className="section-title">Projects Successfully Executed</h2>
      <h3 className="section-subheading">Success Stories</h3>
      <div className="project-cards">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <div className="card-body">
              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>
              <ul>
                {proj.services.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
              <a href="#">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

    </div>
  );
};

export default About;
