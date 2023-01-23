import React from 'react';
import allIcons from 'simple-icons';
import LoopItem from './LoopItem';

const iconSlugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'prisma',
  'firebase',
  'vercel',
  'jest',
  'docker',
  'git',
  'github',
  'sass',
];

const iconTags = iconSlugs.map((slug) => ({
  id: slug,
  simpleIcon: allIcons.Get(slug),
}));

const Loop = ({ second = false }) => {
  return (
    <div className={`loop ${second === true ? 'loop2' : ''}`}>
      {iconTags.map(({ id, simpleIcon }) => {
        const { title, hex, path } = simpleIcon;
        return <LoopItem key={id} title={title} fill={hex} path={path} />;
      })}
    </div>
  );
};

export default Loop;
