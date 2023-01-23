import React from 'react';
import './loop-item.scss';

const LoopItem = ({ title, fill, path }) => {
  return (
    <div className="loop-item">
      <svg role="img" viewBox="0 0 24 24">
        <title>{title}</title>
        <path fill={`#${fill}`} d={path} />
      </svg>
    </div>
  );
};

export default LoopItem;
