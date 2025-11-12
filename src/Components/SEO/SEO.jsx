import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../../constants';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/logo.png',
  ogType = 'website',
  structuredData = null 
}) => {
  const defaultTitle = `${title} | ${COMPANY_INFO.name}`;
  const defaultDescription = 'JBA Groups - Leading Construction and IT Solutions Provider in Bangalore';
  const defaultKeywords = 'JBA Groups, Construction, IT Solutions, Bangalore, Real Estate, Infrastructure';

  useEffect(() => {
    // Update title
    document.title = defaultTitle;

    // Update meta tags
    const metaTags = {
      description: description || defaultDescription,
      keywords: keywords || defaultKeywords,
      'og:title': defaultTitle,
      'og:description': description || defaultDescription,
      'og:type': ogType,
      'og:image': ogImage,
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': defaultTitle,
      'twitter:description': description || defaultDescription,
      'twitter:image': ogImage
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData || {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": COMPANY_INFO.phone,
        "contactType": "customer service",
        "email": COMPANY_INFO.email
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address.street,
        "addressLocality": COMPANY_INFO.address.city,
        "addressRegion": COMPANY_INFO.address.state,
        "postalCode": COMPANY_INFO.address.pincode,
        "addressCountry": COMPANY_INFO.address.country
      }
    });
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.title = COMPANY_INFO.name;
      const metaTags = document.querySelectorAll('meta[name], meta[property]');
      metaTags.forEach(tag => tag.remove());
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, structuredData]);

  return null;
};

export default SEO; 