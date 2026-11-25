import React from 'react';

function AppImage({ src, alt = '', className = '', ...props }) {
  const base = import.meta.env.BASE_URL || '/';
  const resolvedSrc = typeof src === 'string' && src.startsWith('/')
    ? `${base}${src.replace(/^\//, '')}`
    : src;

  const handleError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) return;
    event.currentTarget.dataset.fallbackApplied = 'true';
    event.currentTarget.src = `${base}assets/images/no_image.png`;
  };

  return <img src={resolvedSrc} alt={alt} className={className} onError={handleError} {...props} />;
}

export default AppImage;
