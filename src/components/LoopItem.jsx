import React from 'react';
import './loop-item.scss';
import Svg from './Svg';

const LoopItem = ({ title, fill, path }) => {
  return (
    <div className="loop-item">
      <Svg title={title} fill={fill} path={path} />
    </div>
  );
};

export default LoopItem;
