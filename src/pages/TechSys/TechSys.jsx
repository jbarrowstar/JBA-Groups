import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaFireExtinguisher,
  FaTools,
  FaClipboardCheck,
  FaHeadset,
} from "react-icons/fa";
import "./TechSys.css";

const heroStats = [
  { label: "Years Protecting Singapore", value: "15+" },
  { label: "Mission-Critical Systems", value: "1200+" },
  { label: "24/7 Response", value: "On-Call" },
  { label: "Regulatory Compliance", value: "100%" },
];

const serviceTiles = [
  "Automatic Sprinkler Systems",
  "Wet & Dry Riser Networks",
  "Fire Hydrant Installations",
  "Hosereel & Hose Monitoring",
  "Automatic & Manual Fire Alarm Systems",
  "Emergency Voice Communication Systems",
  "Gas & Water Mist Suppression",
  "VESDA / High-Sensitivity Detection",
  "Portable Fire Extinguishers",
  "Plan Submission & Licensing",
  "Addition & Alteration Projects",
  "Preventive Maintenance Contracts",
];

const projects = [
  { name: "Mandarin Oriental Hotel", detail: "Integrated alarm + suppression retrofit" },
  { name: "Medpace Singapore", detail: "Clean agent system for critical labs" },
  { name: "Capital Tower", detail: "Enterprise-class fire & evacuation upgrade" },
];

const chooseCards = [
  {
    title: "Expertise You Can Trust",
    copy: "Decades of local experience delivering compliant fire protection for commercial, industrial, and residential assets.",
  },
  {
    title: "Tailored Engineering",
    copy: "From design & build to maintenance, every solution is scoped around your building type, hazard class, and budget.",
  },
  {
    title: "Cutting-Edge Technology",
    copy: "Advanced detection, suppression, and voice evacuation platforms keep occupants safe and operations uninterrupted.",
  },
  {
    title: "Quality & Compliance",
    copy: "Built to SCDF standards with rigorous QA, documentation, and licensing support for hassle-free approvals.",
  },
  {
    title: "Community Focus",
    copy: "We champion safety awareness, ongoing inspections, and training so every stakeholder stays emergency-ready.",
  },
];

const contactInfo = [
  { label: "Call Us", value: "+65 6015 0636", icon: <FaPhoneAlt />, href: "tel:+6560150636" },
  { label: "Email", value: "general@tss.sg", icon: <FaEnvelopeOpenText />, href: "mailto:general@tss.sg" },
  {
    label: "Address",
    value: "7 Gambas Crescent, Singapore",
    icon: <FaMapMarkerAlt />,
    href: "https://maps.app.goo.gl/d9As8tmKxSbzL1Cr7",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const TechSys = () => {
  return (
    <div className="techsys-page">
      <section className="techsys-hero">
          <div className="techsys-hero-overlay" />
          <div className="techsys-container">
            <motion.div
              className="techsys-hero-inner"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge">Tech Sys Singapore Pte Ltd</span>
              <h1>
                Creating a Safer Tomorrow
                <span>Protecting lives & property with advanced fire protection solutions.</span>
              </h1>
              <p>
                Tech Sys Singapore (TSS) designs, installs, and maintains compliant fire alarm and suppression systems
                for commercial, industrial, and residential assets across the island—ensuring readiness before danger strikes.
              </p>
              <div className="hero-actions">
                <a href="tel:+6560150636" className="primary">
                  Call Now
                </a>
                <a href="#services" className="secondary">
                  Explore Services
                </a>
              </div>
              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="hero-stat"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{stat.value}</span>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
      </section>

      <section id="services" className="techsys-services">
          <div className="techsys-container">
            <div className="section-header">
              <p className="eyebrow">Services</p>
              <h2>Your safety, our priority</h2>
              <p>Integrated fire protection and maintenance programs engineered for Singapore’s strict codes.</p>
            </div>
            <div className="service-grid">
              {serviceTiles.map((service, index) => (
                <motion.div
                  key={service}
                  {...fadeUp}
                  transition={{ delay: index * 0.03 }}
                  className="service-card"
                >
                  <FaFireExtinguisher />
                  <p>{service}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      <section className="techsys-about">
          <div className="techsys-container">
            <div className="about-content">
              <motion.div {...fadeUp} className="about-card">
                <h3>Who We Are</h3>
                <p>
                  TECH SYS Singapore is a trusted local provider delivering design, supply, installation, and maintenance for
                  mission-critical fire protection systems. Every deployment is tailored to SCDF requirements plus the unique
                  needs of your asset, from data centers to hospitality and manufacturing.
                </p>
                <div className="about-points">
                  <span>
                    <FaTools /> Design & Build
                  </span>
                  <span>
                    <FaClipboardCheck /> Licensing Support
                  </span>
                  <span>
                    <FaHeadset /> Preventive Maintenance
                  </span>
                </div>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="about-card outline">
                <h3>Recent Works</h3>
                <ul>
                  {projects.map((proj) => (
                    <li key={proj.name}>
                      <strong>{proj.name}</strong>
                      <p>{proj.detail}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
        </div>
      </section>

      <section className="techsys-why">
          <div className="techsys-container">
            <div className="section-header">
              <p className="eyebrow">Why Tech Sys</p>
              <h2>Trusted local expertise backed by cutting-edge technology</h2>
            </div>
            <div className="why-grid">
              {chooseCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{ delay: index * 0.05 }}
                  className="why-card"
                >
                  <FaShieldAlt />
                  <h4>{card.title}</h4>
                  <p>{card.copy}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      <section className="techsys-contact" id="contact">
        <div className="techsys-container">
          <motion.div {...fadeUp} className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Need a fire protection partner?</h2>
              <p>
                Call, email, or visit our Gambas Crescent office to discuss design-build projects,
                addition & alteration works, or preventive maintenance programs.
              </p>
            </div>
            <div className="contact-grid">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                >
                  <div className="icon">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
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

export default TechSys;
