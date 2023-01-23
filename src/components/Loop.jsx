import React from 'react';
import allIcons from 'simple-icons';
import LoopItem from './LoopItem';

const iconSlugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

const iconTags = iconSlugs.map((slug) => ({
  id: slug,
  simpleIcon: allIcons.Get(slug),
}));

const Loop = () => {
  return (
    <div className="loop">
      {iconTags.map(({ id, simpleIcon }) => {
        const { title, fill, path } = simpleIcon;

        return <LoopItem key={id} title={title} fill={fill} path={path} />;
      })}

      {/* <div className="loop-item">1</div>
      <div className="loop-item">2</div>
      <div className="loop-item">3</div>
      <div className="loop-item">4</div>
      <div className="loop-item">5</div>
      <div className="loop-item">6</div>
      <div className="loop-item">7</div>
      <div className="loop-item">8</div>
      <div className="loop-item">9</div>
      <div className="loop-item">10</div> */}
    </div>
  );
};

export default Loop;
