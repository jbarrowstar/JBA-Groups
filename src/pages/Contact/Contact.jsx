// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";

const floatingIcon = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [siteVisitData, setSiteVisitData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    visitType: "",
    otherVisitType: "",
    address: "",
    additionalNotes: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSiteVisitChange = (e) => {
    const { name, value } = e.target;
    setSiteVisitData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'visitType' && value !== 'other' && { otherVisitType: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      _captcha: "false",
      _template: "table"
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@jbas.co.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleSiteVisitSubmit = async (e) => {
    e.preventDefault();

    // Regex validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(siteVisitData.phoneNumber)) {
      toast.error("Invalid phone number. Please enter a 10-digit Indian number.");
      return;
    }

    if (!emailRegex.test(siteVisitData.email)) {
      toast.error("Invalid email address. Please enter a valid email.");
      return;
    }

    const payload = {
      ...siteVisitData,
      _captcha: "false",
      _template: "table",
      subject: "Site Visit Request"
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@jbas.co.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        toast.success("Site visit request submitted successfully!");
        setSiteVisitData({
          fullName: "",
          phoneNumber: "",
          email: "",
          preferredDate: "",
          preferredTime: "",
          visitType: "",
          otherVisitType: "",
          address: "",
          additionalNotes: ""
        });
      } else {
        toast.error("Failed to submit site visit request. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contactPage" ref={contactRef}>
      <ToastContainer position="top-center" autoClose={3000} />
      <Container className="contactContent py-5">
        <motion.h1
          className="contactTitle text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="highlight">Touch</span>
        </motion.h1>

        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="contactInfoCard text-center h-100">
              <motion.div variants={floatingIcon} animate="animate">
                <FaPhoneAlt className="contactIcon" />
              </motion.div>
              <h5>Phone</h5>
              <p>(+91) 9108474111</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="contactInfoCard text-center h-100">
              <motion.div variants={floatingIcon} animate="animate">
                <FaEnvelope className="contactIcon" />
              </motion.div>
              <h5>Email</h5>
              <p>info@jbas.co.in</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="contactInfoCard text-center h-100">
              <motion.div variants={floatingIcon} animate="animate">
                <FaMapMarkerAlt className="contactIcon" />
              </motion.div>
              <h5>Address</h5>
              <p>#11/3, Bhattarahalli village<br />
                 Bidarahalli hobli<br />
                 Bangalore, Karnataka - 560036<br />
                 Bangalore, India 560036</p>
            </Card>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6} md={12}>
            <Card className="contactCard">
              <h3 className="text-center">Contact Us</h3>
              <form className="row g-3" onSubmit={handleSubmit}>
                <Col md={6}>
                  <input
                    type="text"
                    name="name"
                    className="form-control contact-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    name="email"
                    className="form-control contact-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12}>
                  <input
                    type="text"
                    name="subject"
                    className="form-control contact-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    name="message"
                    className="form-control contact-control"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12}>
                  <button type="submit" className="btn contactBtn">
                    Send Message
                  </button>
                </Col>
              </form>
            </Card>
          </Col>

          <Col lg={6} md={12}>
            <Card className="contactCard">
              <h3 className="text-center">Schedule a Site Visit</h3>
              <form className="row g-3" onSubmit={handleSiteVisitSubmit}>
                <Col md={12}>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control contact-control"
                    placeholder="Full Name"
                    value={siteVisitData.fullName}
                    onChange={handleSiteVisitChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="form-control contact-control"
                    placeholder="Phone Number"
                    value={siteVisitData.phoneNumber}
                    onChange={handleSiteVisitChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    name="email"
                    className="form-control contact-control"
                    placeholder="Email"
                    value={siteVisitData.email}
                    onChange={handleSiteVisitChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="date"
                    name="preferredDate"
                    className="form-control contact-control"
                    value={siteVisitData.preferredDate}
                    onChange={handleSiteVisitChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="time"
                    name="preferredTime"
                    className="form-control contact-control"
                    value={siteVisitData.preferredTime}
                    onChange={handleSiteVisitChange}
                    required
                  />
                </Col>
                <Col md={12}>
                  <select
                    name="visitType"
                    className="form-control contact-control"
                    value={siteVisitData.visitType}
                    onChange={handleSiteVisitChange}
                    required
                  >
                    <option value="">Select Visit Type</option>
                    <option value="property">Property Viewing</option>
                    <option value="apartment">Apartment Tour</option>
                    <option value="villa">Villa Tour</option>
                    <option value="plot">Plot Visit</option>
                    <option value="consultation">Property Consultation</option>
                    <option value="investment">Investment Discussion</option>
                    <option value="meeting">Business Meeting</option>
                    <option value="other">Other</option>
                  </select>
                </Col>
                {siteVisitData.visitType === 'other' && (
                  <Col md={12}>
                    <input
                      type="text"
                      name="otherVisitType"
                      className="form-control contact-control"
                      placeholder="Please specify your visit type"
                      value={siteVisitData.otherVisitType}
                      onChange={handleSiteVisitChange}
                      required
                    />
                  </Col>
                )}
                <Col md={12}>
                  <textarea
                    name="address"
                    className="form-control contact-control"
                    placeholder="Enter your address"
                    rows="3"
                    value={siteVisitData.address}
                    onChange={handleSiteVisitChange}
                    required
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    name="additionalNotes"
                    className="form-control contact-control"
                    placeholder="Additional Notes"
                    rows="3"
                    value={siteVisitData.additionalNotes}
                    onChange={handleSiteVisitChange}
                  />
                </Col>
                <Col md={12}>
                  <button type="submit" className="btn contactBtn">
                    Schedule Visit
                  </button>
                </Col>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
