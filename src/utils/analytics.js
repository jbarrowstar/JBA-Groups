// Performance monitoring
const initPerformanceMonitoring = () => {
  // Report Web Vitals
  if (window.performance && window.performance.mark) {
    window.performance.mark('app-start');
  }

  // Monitor long tasks
  if (window.PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          console.log('Long task detected:', entry);
          sendToAnalytics({
            type: 'long-task',
            duration: entry.duration,
            timestamp: Date.now()
          });
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  }

  // Monitor resource timing
  if (window.performance && window.performance.getEntriesByType) {
    const resources = window.performance.getEntriesByType('resource');
    resources.forEach(resource => {
      if (resource.duration > 1000) { // Resources taking more than 1s
        console.log('Slow resource:', resource);
        sendToAnalytics({
          type: 'slow-resource',
          url: resource.name,
          duration: resource.duration,
          timestamp: Date.now()
        });
      }
    });
  }
};

// Error tracking
const initErrorTracking = () => {
  window.addEventListener('error', (event) => {
    sendToAnalytics({
      type: 'error',
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno,
      timestamp: Date.now()
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    sendToAnalytics({
      type: 'unhandled-rejection',
      reason: event.reason,
      timestamp: Date.now()
    });
  });
};

// User interaction tracking
const trackUserInteraction = (action, data = {}) => {
  sendToAnalytics({
    type: 'user-interaction',
    action,
    data,
    timestamp: Date.now()
  });
};

// Page view tracking
const trackPageView = (path) => {
  sendToAnalytics({
    type: 'page-view',
    path: path || window.location.pathname,
    timestamp: Date.now()
  });
};

// Analytics sender
const sendToAnalytics = (data) => {
  // For development, just log to console
  console.log('Analytics Event:', data);

  // In production, you would send this to your analytics service
  // Example implementation:
  /*
  if (process.env.NODE_ENV === 'production') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', data.type, data);
    }

    // Custom analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(console.error);
  }
  */
};

// Initialize analytics
const initAnalytics = () => {
  initPerformanceMonitoring();
  initErrorTracking();
  trackPageView();

  // Track route changes
  if (window.history && window.history.pushState) {
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      originalPushState.apply(this, arguments);
      trackPageView();
    };

    window.addEventListener('popstate', () => {
      trackPageView();
    });
  }
};

export {
  initAnalytics,
  trackUserInteraction,
  trackPageView,
  sendToAnalytics
}; 