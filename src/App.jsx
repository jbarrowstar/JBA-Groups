import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import CookieConsent from './Components/CookieConsent/CookieConsent';
import useUserTracking from './hooks/useUserTracking';
import AppRoutes from './AppRoutes';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

const App = () => {
  // Initialize user tracking
  useUserTracking();

  return (
    <ErrorBoundary>
      <CookiesProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="app">
              <Navbar />
              <main className="page-container">
                <div className="content">
                  <Routes>
                    <Route path="/*" element={<AppRoutes />} />
                  </Routes>
                </div>
              </main>
              <CookieConsent />
            </div>
          </Suspense>
        </Router>
      </CookiesProvider>
    </ErrorBoundary>
  );
};

export default App; 