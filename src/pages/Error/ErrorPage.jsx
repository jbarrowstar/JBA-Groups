import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Oops! Something went wrong</h1>
        <p>We're sorry, but there was an error loading this page.</p>
        <div className="error-actions">
          <button onClick={handleRetry} className="btn-primary">
            Retry
          </button>
          <button onClick={handleGoHome} className="btn-secondary">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 