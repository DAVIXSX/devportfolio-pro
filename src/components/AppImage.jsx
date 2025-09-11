import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {
  const base = import.meta.env.BASE_URL || '/';
  const resolvedSrc = typeof src === 'string' && src.startsWith('/')
    ? base + src.replace(/^\//, '')
    : src;

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = base + "assets/images/no_image.png";
      }}
      {...props}
    />
  );
}

export default Image;
