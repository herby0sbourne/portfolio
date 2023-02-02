import React from 'react';

import allIcons from 'simple-icons';
import SkillIconItem from './SkillIconItem';

const iconSlugs = [
  'html5',
  'css3',
  'sass',
  'javascript',
  'typescript',
  'react',
  'nodedotjs',
  'express',
  'prisma',
  'mongodb',
  'firebase',
  'graphql',
  // 'apollographql',
  'vercel',
  'jest',
  'docker',
  'git',
  'github',
];

const iconTags = iconSlugs.map((slug) => ({
  id: slug,
  simpleIcon: allIcons.Get(slug),
}));

const SkillIcon = () => {
  return (
    <>
      {iconTags.map(({ id, simpleIcon }) => {
        const { title, hex, path } = simpleIcon;
        return <SkillIconItem key={id} title={title} fill={hex} path={path} />;
      })}
    </>
  );
};

export default SkillIcon;
