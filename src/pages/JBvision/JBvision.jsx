import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaLeaf,
  FaHome,
  FaRupeeSign,
  FaUniversity,
  FaClinicMedical,
  FaShoppingBag,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./JBvision.css";

const heroContacts = [
  {
    label: "Sales Desk",
    value: "+91 7204 256 555",
    href: "tel:+917204256555",
    icon: <FaPhoneAlt />,
  },
  {
    label: "WhatsApp",
    value: "+91 9632 704 999",
    href: "https://wa.me/919632704999",
    icon: <FaWhatsapp />,
  },
];

const heroStats = [
  { label: "Plots Delivered", value: "200+" },
  { label: "Acres Under Development", value: "25" },
  { label: "Families Onboarded", value: "320+" },
];

const pillars = [
  {
    title: "House for Everyone",
    copy:
      "Community-centered planning that serves first-time buyers, growing families, and retirees with inclusive layouts and amenities.",
    icon: <FaHome />,
  },
  {
    title: "Competitive Pricing",
    copy:
      "Premium villas and plots priced for accessibility without compromising on architecture, infrastructure, or comfort.",
    icon: <FaRupeeSign />,
  },
  {
    title: "Long-Term Investment",
    copy:
      "Prime locations, curated amenities, and assured appreciation make every JB Vision purchase a future-forward asset.",
    icon: <FaShieldAlt />,
  },
];

const projectSpecs = [
  { label: "Plot sizes", value: "1200 – 2400 sq ft" },
  { label: "Rooms", value: "2 – 5" },
  { label: "Bathrooms", value: "2 – 4" },
  { label: "Parking", value: "Private garage" },
];

const listings = [
  {
    name: "JB Vision — Luxury Villa Plots",
    price: "₹ 3,999 / Sqft",
    location:
      "Site No.121, Hoskote–Malur Road, Behind Morarji Desai PU College, Jadigenahalli",
  },
  {
    name: "Sri Sai Brindavan Avenue — Premium Plots",
    price: "₹ 3,600 / Sqft",
    location: "Thirumanahalli, Baiyappanahalli",
  },
  {
    name: "Sri Sai Brindavan Avenue — Independent Homes",
    price: "₹ 3,999 – 3,599 / Sqft",
    location: "Mandur & Surrounding Neighborhoods",
  },
];

const accessibility = [
  {
    title: "Schools & Colleges",
    icon: <FaUniversity />,
    items: [
      "Polaris International School",
      "United World Academy",
      "Narayana e-Techno, Whitefield",
      "VIBGYOR High, Kadugodi",
      "Pinnacle International School",
    ],
  },
  {
    title: "Healthcare",
    icon: <FaClinicMedical />,
    items: [
      "MVJ Hospital",
      "OVUM Hospitals",
      "Woman & Child Speciality",
      "Siliconcity Hospitals",
      "Sathya Sai Orthopaedic",
    ],
  },
  {
    title: "IT Parks & Retail",
    icon: <FaShoppingBag />,
    items: [
      "Orion Uptown Mall",
      "Phoenix Marketcity",
      "VR Bengaluru",
      "Nexus Shantiniketan",
      "Narsapura Industrial Area",
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61566905600948", icon: <FaFacebookF /> },
  { label: "Instagram", href: "https://www.instagram.com/jbvisionplots/", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/jb-vision-luxury-villa-plots/", icon: <FaLinkedinIn /> },
  { label: "X", href: "https://x.com/JBGroupsVision", icon: <FaTwitter /> },
];

const officeDetails = [
  {
    label: "Experience Centre",
    value:
      "Flat 107, Uthunga Residency, Bangalore–Tripathi HWY, Near Hoskote Toll Plaza, Bangalore 562114",
    icon: <FaMapMarkerAlt />,
  },
  {
    label: "Call Us",
    value: "+91 7204 256 555 • +91 9663 332 139",
    icon: <FaPhoneAlt />,
  },
  {
    label: "Timings",
    value: "Mon – Sun: 09:00 AM – 06:00 PM • Tuesday: Closed",
    icon: <FaClock />,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const JBvision = () => {
  return (
    <div className="jbvision">
      <section className="jbvision-hero">
        <div className="hero-overlay-gradient" />
        <div className="jbvision-container hero-grid">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="hero-copy"
          >
            <p className="eyebrow">Child Brand Spotlight</p>
            <h1>
              JB Vision
              <span>Luxury Plots &amp; Villas in East Bengaluru</span>
            </h1>
            <p className="hero-lead">
              Reimagining gated community living along the Hoskote growth
              corridor with landscaped enclaves, smart infrastructure, and
              inclusive pricing curated for every family journey.
            </p>
            <div className="hero-badges">
              <span>Gated Community</span>
              <span>House for Everyone</span>
              <span>24/7 Security</span>
            </div>
            <div className="hero-contacts">
                {heroContacts.map((contact, index) => (
                  <motion.a
                  key={contact.value}
                  href={contact.href}
                  className="hero-chip"
                  target={contact.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {contact.icon}
                  <div>
                    <small>{contact.label}</small>
                    <strong>{contact.value}</strong>
                  </div>
                  </motion.a>
              ))}
            </div>
              <div className="hero-stats">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="hero-stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <span>{stat.value}</span>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-sidecard"
          >
            <p className="eyebrow">Why JB Vision</p>
            <h3>Trusted real-estate craft since 2007.</h3>
            <p>
              JB Groups fuses premium plotting with lifestyle infrastructure,
              making every square foot deliver comfort, connectivity, and
              capital appreciation.
            </p>
            <ul>
              <li>Curated villa plots with modern civic upgrades</li>
              <li>Inclusive amenities: pool, club, fitness, play zones</li>
              <li>Proximity to Whitefield, ORR, and Narsapura hubs</li>
            </ul>
          </motion.div>
        </div>
          <motion.div
            className="hero-floating-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>Now Booking</span>
            <p>Experience-centre walkthroughs available daily (Tue closed)</p>
          </motion.div>
      </section>

      <section className="jbvision-vision">
        <div className="jbvision-container vision-grid">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="vision-card"
          >
            <h2>Our Vision</h2>
            <p>
              At JB Vision we cultivate thriving neighborhoods where design,
              sustainability, and connection shape everyday living. Every plot
              or villa balances comfort with accessibility so buyers across life
              stages can plant roots with confidence.
            </p>
            <p>
              From first-time homeowners to retirement seekers, our masterplans
              uplift the quality of life with thoughtful layouts, steady
              infrastructure, and lush, well-managed commons.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="vision-pillars"
          >
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="jbvision-featured">
        <div className="jbvision-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <p className="eyebrow">Featured Property</p>
            <h2>JB Vision — Gated Community Living</h2>
            <p>
              Secure, landscaped precinct spread across Jadigenahalli with
              state-of-the-art amenities, on-ground supervision, and quick
              access to Bengaluru&apos;s most connected corridors.
            </p>
          </motion.div>

          <div className="featured-grid">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="featured-card"
            >
              <h3>Location &amp; Access</h3>
              <p>
                Site No.121, Hoskote Malur Road, behind Morarji Desai PU College,
                Jadigenahalli, Bengaluru – 562114.
              </p>
              <div className="feature-list">
                <div>
                  <FaMapMarkerAlt /> <span>8 min to Hoskote Toll</span>
                </div>
                <div>
                  <FaLeaf /> <span>Landscaped parks &amp; trails</span>
                </div>
                <div>
                  <FaShieldAlt /> <span>24/7 security &amp; surveillance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="featured-card specs-card"
            >
              <h3>Project Details</h3>
              <div className="spec-grid">
                {projectSpecs.map((spec) => (
                  <div key={spec.label}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
              <a
                className="primary-link"
                href="https://jbvgroups.com/contact-us/"
                target="_blank"
                rel="noreferrer"
              >
                Get Quote Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="jbvision-listings">
        <div className="jbvision-container">
          <div className="section-header">
            <p className="eyebrow">The Property</p>
            <h2>Featured Listings</h2>
          </div>
          <div className="listing-grid">
            {listings.map((listing, index) => (
              <motion.div
                key={listing.name}
                {...fadeUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="listing-card"
              >
                <h3>{listing.name}</h3>
                <p className="price">{listing.price}</p>
                <p className="location">
                  <FaMapMarkerAlt /> {listing.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="jbvision-benefits">
        <div className="jbvision-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="benefits-copy"
          >
            <p className="eyebrow">Our Benefits</p>
            <h2>Life inside JB Vision</h2>
            <p>
              Residents enjoy a sparkling pool, clubhouse fitness center,
              children&apos;s play courts, and scenic walking trails that wind
              through manicured green pockets. Regular community events foster
              a friendly, close-knit neighborhood vibe.
            </p>
          </motion.div>
          <div className="access-grid">
            {accessibility.map((bucket, index) => (
              <motion.div
                key={bucket.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="access-card"
              >
                <div className="access-icon">{bucket.icon}</div>
                <h3>{bucket.title}</h3>
                <ul>
                  {bucket.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="jbvision-cta">
        <div className="jbvision-container cta-grid">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="cta-card"
          >
            <p className="eyebrow">Connect with JB Vision</p>
            <h2>Book a site visit or request the latest availability.</h2>
            <p>
              Share your requirement and the JB Vision desk will coordinate a
              guided walkthrough, pricing details, and documentation support.
            </p>
            <div className="contact-list">
              {officeDetails.map((detail) => (
                <div key={detail.label} className="contact-row">
                  <span>{detail.icon}</span>
                  <div>
                    <strong>{detail.label}</strong>
                    <p>{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="cta-social"
          >
            <h3>Follow us</h3>
            <p>
              Real-time launch updates, development milestones, and community
              stories from the site.
            </p>
            <div className="social-row">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JBvision;
