import React from 'react';
import Svg from './Svg';

const SkillIconItem = ({ title, fill, path }) => {
  return (
    <div className="skill-item">
      <Svg fill={fill} path={path} />
      <p>{title}</p>
    </div>
  );
};

export default SkillIconItem;
