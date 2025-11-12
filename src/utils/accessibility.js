// Focus management
export const focusElement = (element) => {
  if (element && typeof element.focus === 'function') {
    element.focus();
  }
};

// Trap focus within a container
export const trapFocus = (container) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

// Create a skip link for keyboard navigation
export const createSkipLink = () => {
  // Remove existing skip link if it exists
  const existingSkipLink = document.getElementById('skip-link');
  if (existingSkipLink) {
    existingSkipLink.remove();
  }

  // Create skip link element
  const skipLink = document.createElement('a');
  skipLink.id = 'skip-link';
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #ff9505;
    color: white;
    padding: 8px;
    z-index: 100;
    transition: top 0.2s;
  `;

  // Add focus styles
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  // Add to document
  document.body.insertBefore(skipLink, document.body.firstChild);
};

// ARIA live regions
export const createLiveRegion = (id = 'aria-live-region') => {
  const existingRegion = document.getElementById(id);
  if (existingRegion) {
    return existingRegion;
  }

  const region = document.createElement('div');
  region.id = id;
  region.setAttribute('aria-live', 'polite');
  region.setAttribute('aria-atomic', 'true');
  region.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `;
  document.body.appendChild(region);
  return region;
};

// Announce changes to screen readers
export const announce = (message, id = 'aria-live-region') => {
  const region = createLiveRegion(id);
  region.textContent = message;
};

// Add CSS for accessibility
const style = document.createElement('style');
style.textContent = `
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #ff9505;
    color: white;
    padding: 8px;
    z-index: 100;
    transition: top 0.3s;
  }

  .skip-link:focus {
    top: 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
document.head.appendChild(style); 