import React from "react";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaLayerGroup,
  FaDraftingCompass,
  FaIndustry,
  FaProjectDiagram,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
} from "react-icons/fa";
import heroLogo from "../../Assets/HeroLogo.png";
import "./ArrowChild.css";

const specialties = [
  {
    id: "01",
    title: "Metal Scaffold Specialist",
    copy:
      "Full-cycle supply, erection, and dismantling for high-rise and industrial sites across Singapore.",
    icon: <FaHardHat />,
  },
  {
    id: "02",
    title: "Aluminum Scaffolds",
    copy:
      "Lightweight tower systems engineered for rapid deployment inside live facilities and plants.",
    icon: <FaLayerGroup />,
  },
  {
    id: "03",
    title: "Formwork Scaffold",
    copy:
      "Hybrid scaffold-formwork solutions that maximize deck safety and casting efficiency.",
    icon: <FaIndustry />,
  },
  {
    id: "04",
    title: "Designing All Types",
    copy:
      "Bespoke scaffold design, calculations, and PE endorsement for every site condition.",
    icon: <FaDraftingCompass />,
  },
];

const projectVerticals = [
  {
    title: "Semiconductor",
    blurb: "Ultra-clean builds with precision staging and contamination controls.",
  },
  {
    title: "Data Centers",
    blurb: "Large-volume MEP access with strict uptime and fire safety requirements.",
  },
  {
    title: "Pharmaceuticals",
    blurb: "cGMP compliant scaffolds that honor validation and hygiene protocols.",
  },
  {
    title: "Constructions",
    blurb: "Complex façades, infrastructure, and mixed-use developments nationwide.",
  },
];

const testimonials = [
  {
    quote:
      "The amount of effort the team put into completing our project was tremendous. Their energy and sincerity have set a higher benchmark for our organization.",
    attribution: "Client Feedback – Industrial Project",
  },
  {
    quote:
      "Congratulations to the ARROW team for doing an amazing job. We are proud of your system and management discipline.",
    attribution: "Client Feedback – General Contractor",
  },
];

const contactChannels = [
  {
    label: "Call",
    value: "+65 6980 7042",
    href: "tel:+6569807042",
    icon: <FaPhoneAlt />,
  },
  {
    label: "WhatsApp / Mobile",
    value: "+65 8161 6500",
    href: "tel:+6581616500",
    icon: <FaPhoneAlt />,
  },
  {
    label: "Email",
    value: "info@arroweng-mgt.net",
    href: "mailto:info@arroweng-mgt.net",
    icon: <FaEnvelopeOpenText />,
  },
  {
    label: "Visit",
    value: "7 Gambas Crescent, ARK @ Gambas #08-41, Singapore 757087",
    href: "https://maps.app.goo.gl/SQfKKxQ2HJtb4ZkP6",
    icon: <FaMapMarkerAlt />,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const ArrowChild = () => {
  return (
    <div className="arrow-child">
      <section className="arrow-hero">
        <div className="arrow-container hero-grid">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="hero-text"
          >
            <motion.img
              src={heroLogo}
              alt="Arrow Engineering logo"
              className="arrow-hero-logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <p className="eyebrow">Child Brand Spotlight</p>
            <h1>
              ARROW Engineering &amp; Management Pte Ltd
              <span>Scaffolding • Quality • Affordability</span>
            </h1>
            <p className="hero-lead">
              Approved Scaffold Contractor (ASC) with the Singapore Ministry of
              Manpower, delivering innovative, safe, and on-time scaffold
              solutions for landmark projects.
            </p>
            <div className="hero-badges">
              <span>Approved Scaffold Contractor</span>
              <span>On-site Engineering Support</span>
              <span>Islandwide Deployment</span>
            </div>
            <div className="hero-contacts">
              {contactChannels.slice(0, 2).map((channel) => (
                <a
                  key={channel.value}
                  href={channel.href}
                  className="contact-chip"
                >
                  {channel.icon}
                  <div>
                    <small>{channel.label}</small>
                    <strong>{channel.value}</strong>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="hero-panel"
          >
            <p>Trusted by developers, EPCs, and facility owners across Singapore.</p>
            <ul>
              <li>Comprehensive scaffold design and PE endorsement</li>
              <li>Material logistics, erection, inspection, and dismantling</li>
              <li>Dedicated safety supervision and MOM-compliant teams</li>
            </ul>
            <div className="hero-panel-footer">
              <span>Since inception</span>
              <strong>Market leader in local scaffold services</strong>
            </div>
          </motion.div>
        </div>
        <div className="hero-pattern" />
      </section>

      <section className="arrow-about">
        <div className="arrow-container about-grid">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="about-card"
          >
            <h2>Why ARROW</h2>
            <p>
              ARROW Engineering &amp; Management Pte Ltd supports Singapore&apos;s
              most complex builds with scaffolding that is engineered for speed,
              efficiency, and uncompromising safety. From semiconductor fabs to
              data centers, ARROW pairs experienced supervisors with precise
              logistics to keep every work site on schedule.
            </p>
            <p>
              Clients leverage ARROW for turnkey support — on-site studies,
              customized drawings, engineering calculations, trained manpower,
              and rapid material delivery. The result: faster project cycles and
              fewer shutdown headaches.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-card highlight-card"
          >
            <h3>At-a-glance</h3>
            <div className="highlight-list">
              <div>
                <span>Approved by</span>
                <strong>Singapore MOM (ASC)</strong>
              </div>
              <div>
                <span>Delivery model</span>
                <strong>Innovative • Productive • Safe</strong>
              </div>
              <div>
                <span>Support</span>
                <strong>24/7 On-site &amp; Logistics</strong>
              </div>
              <div>
                <span>Track record</span>
                <strong>
                  Featured in marquee Singapore infrastructure projects
                </strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="arrow-specialties">
        <div className="arrow-container">
          <div className="section-header">
            <p className="eyebrow">Core Capabilities</p>
            <h2>Scaffold Services</h2>
          </div>
          <div className="specialty-grid">
            {specialties.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="specialty-card"
              >
                <span className="specialty-index">{item.id}</span>
                <div className="specialty-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arrow-verticals">
        <div className="arrow-container">
          <div className="section-header">
            <p className="eyebrow">Project Verticals</p>
            <h2>Industries Served</h2>
          </div>
          <div className="vertical-grid">
            {projectVerticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="vertical-card"
              >
                <FaProjectDiagram className="vertical-icon" />
                <h3>{vertical.title}</h3>
                <p>{vertical.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arrow-testimonials">
        <div className="arrow-container">
          <div className="section-header">
            <p className="eyebrow">What Clients Say</p>
            <h2>Testimonials</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.quote}
                {...fadeUp}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="testimonial-card"
              >
                <p>{testimonial.quote}</p>
                <footer>{testimonial.attribution}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="arrow-cta">
        <div className="arrow-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="cta-card"
          >
            <div>
              <p className="eyebrow">Connect with ARROW</p>
              <h2>Ready for engineered access solutions?</h2>
              <p>
                Book a site walk-through or send us your drawings to receive a
                fast, engineered scaffold proposal.
              </p>
            </div>
            <div className="cta-actions">
              {contactChannels.map((channel) => (
                <a
                  key={channel.value}
                  href={channel.href}
                  className="contact-chip"
                >
                  {channel.icon}
                  <div>
                    <small>{channel.label}</small>
                    <strong>{channel.value}</strong>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArrowChild;
