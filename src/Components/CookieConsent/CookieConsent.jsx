import React, { useState, useEffect } from 'react';
import { 
  setCookie, 
  getCookie, 
  COOKIE_NAMES,
  setUserPreferences,
  getUserPreferences 
} from '../../utils/cookieUtils';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    const consent = getCookie(COOKIE_NAMES.USER_PREFERENCES);
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      consentDate: new Date().toISOString()
    };
    setUserPreferences(allPreferences);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    setUserPreferences({
      ...preferences,
      consentDate: new Date().toISOString()
    });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggle = (type) => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
      {!showSettings ? (
        <div className="cookie-banner">
          <div className="cookie-content">
            <h3>Cookie Settings</h3>
            <p>
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. Please select which cookies you consent to.
            </p>
            <div className="cookie-buttons">
              <button 
                className="btn-secondary"
                onClick={() => setShowSettings(true)}
              >
                Customize
              </button>
              <button 
                className="btn-primary"
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cookie-settings">
          <div className="settings-content">
            <h3>Cookie Preferences</h3>
            <div className="cookie-options">
              <div className="cookie-option">
                <div className="option-header">
                  <h4>Necessary Cookies</h4>
                  <span className="required">Required</span>
                </div>
                <p>Essential for the website to function properly.</p>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="cookie-option">
                <div className="option-header">
                  <h4>Analytics Cookies</h4>
                </div>
                <p>Help us understand how visitors interact with our website.</p>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handleToggle('analytics')}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="cookie-option">
                <div className="option-header">
                  <h4>Marketing Cookies</h4>
                </div>
                <p>Used to track visitors across websites for marketing purposes.</p>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handleToggle('marketing')}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="cookie-option">
                <div className="option-header">
                  <h4>Preference Cookies</h4>
                </div>
                <p>Remember your settings and preferences for a better experience.</p>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={() => handleToggle('preferences')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="settings-buttons">
              <button 
                className="btn-secondary"
                onClick={() => setShowSettings(false)}
              >
                Back
              </button>
              <button 
                className="btn-primary"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent; 