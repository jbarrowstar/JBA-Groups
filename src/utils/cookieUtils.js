import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// Cookie Names
export const COOKIE_NAMES = {
  USER_PREFERENCES: 'user_preferences',
  LAST_VISIT: 'last_visit',
  AUTH_TOKEN: 'auth_token',
  THEME: 'theme',
  LANGUAGE: 'language',
  SESSION_ID: 'session_id',
  VISIT_COUNT: 'visit_count',
  USER_BEHAVIOR: 'user_behavior',
  PAGE_VIEWS: 'page_views',
  TIME_SPENT: 'time_spent',
  LAST_PAGE: 'last_page',
  USER_AGENT: 'user_agent',
  SCREEN_SIZE: 'screen_size',
  REFERRER: 'referrer'
};

// Default cookie options
const DEFAULT_OPTIONS = {
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict'
};

// Basic Cookie Operations
export const setCookie = (name, value, options = {}) => {
  cookies.set(name, value, { ...DEFAULT_OPTIONS, ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, options = {}) => {
  cookies.remove(name, { ...DEFAULT_OPTIONS, ...options });
};

export const hasCookie = (name) => {
  return cookies.get(name) !== undefined;
};

// User Preferences
export const setUserPreferences = (preferences) => {
  setCookie(COOKIE_NAMES.USER_PREFERENCES, JSON.stringify(preferences), {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const getUserPreferences = () => {
  const preferences = getCookie(COOKIE_NAMES.USER_PREFERENCES);
  
  // Explicitly check if the retrieved value is a string and not the problematic '[object Object]'
  if (typeof preferences !== 'string' || preferences === '[object Object]') {
    if (preferences !== undefined) {
        console.warn("Invalid user preferences cookie data found, removing:", preferences);
        removeCookie(COOKIE_NAMES.USER_PREFERENCES);
    }
    return null;
  }

  try {
    return JSON.parse(preferences);
  } catch (error) {
    console.error("Error parsing user preferences cookie:", error);
    // If parsing fails, remove the corrupted cookie
    removeCookie(COOKIE_NAMES.USER_PREFERENCES);
    return null;
  }
};

// Visit Tracking
export const setLastVisit = () => {
  setCookie(COOKIE_NAMES.LAST_VISIT, new Date().toISOString(), {
    maxAge: 365 * 24 * 60 * 60 // 1 year
  });
};

export const getLastVisit = () => {
  return getCookie(COOKIE_NAMES.LAST_VISIT);
};

export const incrementVisitCount = () => {
  const currentCount = parseInt(getCookie(COOKIE_NAMES.VISIT_COUNT) || '0');
  setCookie(COOKIE_NAMES.VISIT_COUNT, (currentCount + 1).toString(), {
    maxAge: 365 * 24 * 60 * 60 // 1 year
  });
  return currentCount + 1;
};

export const getVisitCount = () => {
  return parseInt(getCookie(COOKIE_NAMES.VISIT_COUNT) || '0');
};

// Session Management
export const setSessionId = () => {
  const sessionId = Math.random().toString(36).substring(2);
  setCookie(COOKIE_NAMES.SESSION_ID, sessionId, {
    maxAge: 24 * 60 * 60 // 24 hours
  });
  return sessionId;
};

export const getSessionId = () => {
  return getCookie(COOKIE_NAMES.SESSION_ID);
};

// User Behavior Tracking
export const trackPageView = (page) => {
  const pageViews = JSON.parse(getCookie(COOKIE_NAMES.PAGE_VIEWS) || '{}');
  pageViews[page] = (pageViews[page] || 0) + 1;
  setCookie(COOKIE_NAMES.PAGE_VIEWS, JSON.stringify(pageViews), {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const getPageViews = () => {
  return JSON.parse(getCookie(COOKIE_NAMES.PAGE_VIEWS) || '{}');
};

export const trackTimeSpent = (timeInSeconds) => {
  const currentTime = parseInt(getCookie(COOKIE_NAMES.TIME_SPENT) || '0');
  setCookie(COOKIE_NAMES.TIME_SPENT, (currentTime + timeInSeconds).toString(), {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const getTimeSpent = () => {
  return parseInt(getCookie(COOKIE_NAMES.TIME_SPENT) || '0');
};

export const setLastPage = (page) => {
  setCookie(COOKIE_NAMES.LAST_PAGE, page, {
    maxAge: 24 * 60 * 60 // 24 hours
  });
};

export const getLastPage = () => {
  return getCookie(COOKIE_NAMES.LAST_PAGE);
};

// Device Information
export const setUserAgent = (userAgent) => {
  setCookie(COOKIE_NAMES.USER_AGENT, userAgent, {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const setScreenSize = (width, height) => {
  setCookie(COOKIE_NAMES.SCREEN_SIZE, JSON.stringify({ width, height }), {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const setReferrer = (referrer) => {
  setCookie(COOKIE_NAMES.REFERRER, referrer, {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

// Theme Management
export const setTheme = (theme) => {
  setCookie(COOKIE_NAMES.THEME, theme, {
    maxAge: 365 * 24 * 60 * 60 // 1 year
  });
};

export const getTheme = () => {
  return getCookie(COOKIE_NAMES.THEME) || 'light';
};

// Language Management
export const setLanguage = (language) => {
  setCookie(COOKIE_NAMES.LANGUAGE, language, {
    maxAge: 365 * 24 * 60 * 60 // 1 year
  });
};

export const getLanguage = () => {
  return getCookie(COOKIE_NAMES.LANGUAGE) || 'en';
};

// Cookie Management
export const clearAllCookies = () => {
  Object.values(COOKIE_NAMES).forEach(name => {
    removeCookie(name);
  });
};

export const getCookieConsent = () => {
  const preferences = getUserPreferences();
  return preferences ? preferences.analytics : false;
};

export const setCookieConsent = (consent) => {
  const preferences = getUserPreferences() || {};
  preferences.analytics = consent;
  setUserPreferences(preferences);
};

// Analytics Helper
export const trackUserBehavior = (action, data = {}) => {
  if (!getCookieConsent()) return;

  const behavior = JSON.parse(getCookie(COOKIE_NAMES.USER_BEHAVIOR) || '[]');
  behavior.push({
    action,
    data,
    timestamp: new Date().toISOString()
  });
  
  setCookie(COOKIE_NAMES.USER_BEHAVIOR, JSON.stringify(behavior), {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const getUserBehavior = () => {
  return JSON.parse(getCookie(COOKIE_NAMES.USER_BEHAVIOR) || '[]');
}; 