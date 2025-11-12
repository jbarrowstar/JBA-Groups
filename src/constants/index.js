// Company Information
export const COMPANY_INFO = {
  name: 'JBA Groups',
  phone: '+91 9108474111',
  email: 'info@jbas.co.in',
  address: {
    street: '#11/3, Bhattarahalli village',
    area: 'Bidarahalli hobli',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560036',
    country: 'India'
  }
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/jbagroups',
  instagram: 'https://www.instagram.com/jbagroups',
  linkedin: 'https://www.linkedin.com/company/jba-groups'
};

// Navigation Links
export const NAV_LINKS = {
  home: '/',
  about: '/about',
  jbas: '/jbas',
  jbvision: '/jbvision',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  termsAndConditions: '/terms-and-conditions'
};

// Form Validation Rules
export const VALIDATION_RULES = {
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^[0-9]{10}$/,
    message: 'Please enter a valid 10-digit phone number'
  },
  required: {
    message: 'This field is required'
  }
};

// Animation Durations
export const ANIMATION_DURATIONS = {
  short: 0.3,
  medium: 0.5,
  long: 0.8
};

// Breakpoints
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280
};

// API Endpoints
export const API_ENDPOINTS = {
  contact: 'https://formspree.io/f/YOUR_FORM_ID',
  // Add other API endpoints here
};

// Theme Colors
export const COLORS = {
  primary: '#ff9505',
  secondary: '#d5b31c',
  success: '#25d366',
  error: '#dc3545',
  background: '#ffffff',
  text: '#333333',
  textLight: '#666666'
}; 