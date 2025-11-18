import React from "react";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaRobot,
  FaUsersCog,
  FaUserTie,
  FaPaintRoller,
  FaCube,
  FaCalculator,
  FaUniversity,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaMapPin,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import heroLogo from "../../Assets/HeroLogo.png";
import "./JBConX.css";

const heroStats = [
  { label: "Projects Managed", value: "500K+" },
  { label: "Verified Professionals", value: "100K+" },
  { label: "Cities Covered", value: "50K+" },
  { label: "AI Accuracy", value: "95%" },
];

const serviceCards = [
  {
    title: "Construction Services",
    copy:
      "Manage the full lifecycle—from foundation to finishing— with transparent schedules and quality control.",
    icon: <FaHardHat />,
    tags: ["Planning", "Quality", "Timelines"],
  },
  {
    title: "Professional Hiring",
    copy: "Source certified engineers, architects, and skilled labor on demand through the JBConX network.",
    icon: <FaUserTie />,
    tags: ["Verified Talent", "Skill Mapping", "Fast Onboarding"],
  },
  {
    title: "Home Renovation",
    copy: "Turnkey upgrades spanning flooring, painting, electrical, plumbing, and premium interiors.",
    icon: <FaPaintRoller />,
    tags: ["Modern Design", "Craftsmanship", "Quality Materials"],
  },
  {
    title: "Interior Design",
    copy: "Personalized 2D/3D layouts that balance budget, style, and smart space planning.",
    icon: <FaRobot />,
    tags: ["AI Concepts", "3D Visuals", "Budget Insights"],
  },
  {
    title: "Material Management",
    copy: "Track owner-supplied and app-procured materials with real-time usage analytics.",
    icon: <FaCube />,
    tags: ["Inventory", "Cost Control", "Quality"],
  },
  {
    title: "Vendor & Labour Cloud",
    copy: "Connect to reliable vendors, assign work, and monitor completion through live dashboards.",
    icon: <FaUsersCog />,
    tags: ["Assignments", "Tracking", "Performance"],
  },
  {
    title: "Budgeting & Estimation",
    copy: "Automated cost models, live expense alerts, and exportable financial reports.",
    icon: <FaCalculator />,
    tags: ["Cost Plans", "Alerts", "Reports"],
  },
  {
    title: "Govt. Project Suite",
    copy: "Compliance-ready tooling for public infrastructure teams that demand transparency.",
    icon: <FaUniversity />,
    tags: ["Audit Trail", "Policy Ready", "Collaboration"],
  },
];

const capabilityHighlights = [
  {
    title: "End-to-End Platform",
    detail: "One-stop digital ecosystem that unifies home services, team management, and execution intelligence.",
  },
  {
    title: "AI-Powered Decisions",
    detail: "Predictive scheduling, budget checks, and smart search to keep every site on pace.",
  },
  {
    title: "Rural to Urban Reach",
    detail: "Unlock opportunities across cities, towns, and rural clusters with the same verified network.",
  },
  {
    title: "Trusted, Secure Workflows",
    detail: "Profile verification, digital agreements, and transparent communication keep every stakeholder aligned.",
  },
];

const contactChannels = [
  {
    label: "Phone",
    value: "+91 96327 04999",
    icon: <FaPhoneAlt />,
    href: "tel:+919632704999",
    note: "24/7 for critical jobs",
  },
  {
    label: "Email",
    value: "info@jbconx.com",
    icon: <FaEnvelopeOpenText />,
    href: "mailto:info@jbconx.com",
    note: "Responses within 24 hrs",
  },
  {
    label: "Head Office",
    value: "#11/3, Bhattarahalli Village, Bidarahalli Hobli, Bengaluru, Karnataka 560036",
    icon: <FaMapPin />,
    href: "https://maps.app.goo.gl/gWxFvgkX4nJ8D6yY9",
    note: "Open 9:00–18:00 IST",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const JBConX = () => {
  return (
    <div className="jbconx-page">
        <section className="jbconx-hero">
          <div className="hero-overlay" />
          <div className="jbconx-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={heroLogo}
                alt="JBConX logo"
                className="hero-logo"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />
              <span className="hero-pill">JBConX Pvt Ltd • Digital Construction Suite</span>
              <h1>
                Click, Connect, Construct.
                <span>Building intelligence for every site.</span>
              </h1>
              <p>
                JBConX is the comprehensive platform that converges construction services, professional hiring,
                AI-driven dashboards, and live tracking so teams can deliver with speed and certainty.
              </p>
              <div className="hero-ctas">
                <a className="primary-btn" href="#services">
                  Explore Services
                </a>
                <a className="ghost-btn" href="#contact">
                  Book a Demo
                </a>
              </div>
              <motion.div
                className="hero-floating-chip"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                ⚡ AI-powered dashboards, live tracking & verified professionals in a single tap.
              </motion.div>
              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="hero-stat"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -6 }}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="jbconx-about">
        <div className="jbconx-container">
          <div className="section-header">
            <p className="eyebrow">About JBConX</p>
            <h2>Reimagining construction through digital innovation</h2>
            <p>
              JBConX removes friction from the entire construction lifecycle. We connect property owners,
              government departments, project managers, and field teams on one secure stack backed by AI.
            </p>
          </div>
          <div className="about-grid">
            <motion.div {...fadeUp} className="mission-card">
              <h3>Mission</h3>
              <p>
                Through our digital platform, we create sustainable employment and accelerate development by
                giving every stakeholder— from rural craftsmen to urban engineers— a verified identity and a
                transparent workflow.
              </p>
              <ul>
                <li>Home services, team management, and AI in one place</li>
                <li>Lightning-fast coordination with secure records</li>
                <li>Opportunities that span metros, towns, and villages</li>
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="chips-card">
              {capabilityHighlights.map((item) => (
                <div key={item.title} className="chip">
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="jbconx-services">
        <div className="jbconx-container">
          <div className="section-header">
            <p className="eyebrow">What we deliver</p>
            <h2>Core services powered by JBConX</h2>
            <p>Every workflow your project needs, wrapped in AI-enabled transparency.</p>
          </div>
          <div className="service-grid">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ delay: index * 0.05 }}
                className="service-card"
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="jbconx-app">
        <div className="jbconx-container">
          <div className="app-card">
            <motion.div {...fadeUp}>
              <p className="eyebrow">Always-on platform</p>
              <h2>Access JBConX anywhere</h2>
              <p>
                Monitor dashboards, assign manpower, approve budgets, and chat with site teams using the JBConX
                mobile experience.
              </p>
              <ul>
                <li>Real-time tracking & status alerts</li>
                <li>Secure wallet & digital agreements</li>
                <li>JBConX Pro for professionals on the go</li>
              </ul>
              <div className="download-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.jbconx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGooglePlay />
                  Google Play
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
                  <FaApple />
                  App Store
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="jbconx-contact">
        <div className="jbconx-container">
          <div className="section-header">
            <p className="eyebrow">Connect</p>
            <h2>Ready to transform your next project?</h2>
            <p>Reach out for deployments, demos, or regional partnerships.</p>
          </div>
          <div className="contact-grid">
            {contactChannels.map((channel) => (
              <motion.a
                key={channel.label}
                {...fadeUp}
                href={channel.href}
                target={channel.href?.startsWith("http") ? "_blank" : undefined}
                rel={channel.href?.startsWith("http") ? "noreferrer" : undefined}
                className="contact-card"
                whileHover={{ y: -6, boxShadow: "0 25px 60px rgba(9,18,40,0.18)" }}
              >
                <div className="contact-icon">{channel.icon}</div>
                <div>
                  <h4>{channel.label}</h4>
                  <p>{channel.value}</p>
                  <span>{channel.note}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JBConX;
