import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);       
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div 
          className="error-boundary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }  }
        >
          <div className="error-content">
            <h1>Oops! Something went wrong</h1>
            <p>We're sorry, but there was an error loading this page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="retry-button"
            >
              Retry
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="home-button"
            >   
              Go to Home
            </button>                    
          </div>                     
        </motion.div>                        
      );      
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 