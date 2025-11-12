import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Suspense, lazy, useEffect } from 'react';
import FloatingActionButton from "./Components/ReusableComponents/FAB/FloatingActionButton";
import Layout from "./Components/Layout/Layout";
import ScrollToTop from "./Components/ReusableComponents/ScrollToTop";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import SEO from "./Components/SEO/SEO";
import { initAnalytics } from "./utils/analytics";
import { createSkipLink } from "./utils/accessibility";
import { COMPANY_INFO } from "./constants";
import "./Components/ErrorBoundary/ErrorBoundary.css";
import Projects from "./pages/Projects/Projects";
import JB from "./pages/JB/JBVision";
import Phase2 from "./pages/Phase1/Phase2";


// Lazy load all page components
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const JBAS = lazy(() => import("./pages/Jbas/Jbas"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const JBVision = lazy(() => import("./pages/JBvision/JBvision"));
const About = lazy(() => import("./pages/About/About"));


// Loading component with animation
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

const App = () => {
  useEffect(() => {
    // Initialize analytics
    initAnalytics();
    
    // Create skip link for accessibility
    createSkipLink();
  }, []);

  return (
    <ErrorBoundary>
      <SEO 
        title="Home"
        description="JBA Groups - Leading Construction and IT Solutions Provider in Bangalore"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": COMPANY_INFO.name,
          "url": window.location.origin,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${window.location.origin}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="App">
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/JBvision" element={<JBVision />} />
                <Route path="/Jbas" element={<JBAS />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/JBV" element={<JB/>} />
                <Route path="/phase2" element={<Phase2/>} />
                
              </Route>
            </Routes>
          </Suspense>
          <FloatingActionButton />
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;
