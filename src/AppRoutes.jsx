import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import JBvision from './pages/JBvision/JBvision';
import ErrorPage from './pages/Error/ErrorPage';
import UserGuides from './pages/UserGuides/UserGuides';
import GuideDetail from './pages/UserGuides/GuideDetail';
import Blog from './pages/Blog/Blog';
import Community from './pages/Community/Community';
import Developers from './pages/Developers/Developers';
import Legal from './pages/Legal/Legal';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Sitemap from './pages/Sitemap/Sitemap';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Careers from './pages/Careers/Careers';
import ArrowChild from './pages/arrow/ArrowChild';
import JBConX from './pages/JBConX/JBConX';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route - redirect to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      
      {/* Main routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jbvision" element={<JBvision />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
        <Route path="/arrow" element={<ArrowChild />} />
        <Route path="/jbconx" element={<JBConX />} />
      
      {/* Guide routes */}
      <Route path="/guides" element={<UserGuides />} />
      <Route path="/guides/:id" element={<GuideDetail />} />
      
      {/* Resource routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/community" element={<Community />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sitemap" element={<Sitemap />} />
      
      {/* Error route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes; 