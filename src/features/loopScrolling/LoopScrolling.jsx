import React from 'react';
import Loop from '../../components/Loop';

import './loop-scrolling.scss';

const LoopScrolling = () => {
  return (
    <div className="loop-container">
      <Loop />
      <Loop second />
    </div>
  );
};

export default LoopScrolling;
