import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackTimeSpent,
  setLastPage,
  setUserAgent,
  setScreenSize,
  setReferrer,
  incrementVisitCount,
  setLastVisit,
  getLastVisit,
  trackUserBehavior
} from '../utils/cookieUtils';

const useUserTracking = () => {
  const location = useLocation();
  const startTime = useRef(Date.now());
  const lastPage = useRef(location.pathname);

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname);
    setLastPage(location.pathname);

    // Track time spent on previous page
    if (lastPage.current !== location.pathname) {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      trackTimeSpent(timeSpent);
      startTime.current = Date.now();
    }

    // Track user behavior
    trackUserBehavior('page_view', {
      path: location.pathname,
      from: lastPage.current
    });

    // Update last page reference
    lastPage.current = location.pathname;

    // Set device information
    setUserAgent(navigator.userAgent);
    setScreenSize(window.innerWidth, window.innerHeight);
    setReferrer(document.referrer);

    // Track visit
    const lastVisit = getLastVisit();
    if (!lastVisit) {
      incrementVisitCount();
    }
    setLastVisit();

    // Cleanup function
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      trackTimeSpent(timeSpent);
    };
  }, [location]);

  // Track user interactions
  const trackInteraction = (action, data = {}) => {
    trackUserBehavior(action, {
      ...data,
      path: location.pathname
    });
  };

  return {
    trackInteraction
  };
};

export default useUserTracking; 