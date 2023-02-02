import React from 'react';

const Svg = ({ title = '', fill, path }) => {
  return (
    <svg role="img" viewBox="0 0 24 24">
      {title && <title>{title}</title>}
      <path fill={`#${fill}`} d={path} />
    </svg>
  );
};

export default Svg;
