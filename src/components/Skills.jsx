import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import PROJECTS from '../data/projests';
import SkillCard from './SkillCard';

const tags = ['All', 'React', 'Node.Js', 'UX/UI', 'Mobile App'];

const Skills = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterProjects, setFilterProjects] = useState([]);
  const [toShow, setToShow] = useState(2);

  useEffect(() => {
    setProjects(PROJECTS);
  }, []);

  useEffect(() => {
    const filteredProjects = projects.filter((monster) => {
      return monster.tags.includes(activeFilter);
    });

    setFilterProjects(filteredProjects);
  }, [projects, activeFilter]);

  return (
    <section className="skills" id="projects">
      <div className="container">
        <h2>My Experience Portfolio</h2>
        <div className="skills-filter">
          {tags.map((tag) => {
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`select skill-tag ${activeFilter === tag ? 'active' : ''}`}
              >
                {tag}
              </button>
            );
          })}
        </div>
        {/*  */}
        <div className="work">
          {filterProjects.slice(0, toShow).map((project, idx) => {
            return (
              <motion.div
                key={project.title + idx}
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                // whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                // transition={{ duration: 0.3, ease: 'easeInOut', staggerChildren: 0.5 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
              >
                <SkillCard {...project} />
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={() => setToShow((prevState) => prevState + 2)}
          className="load-more"
        >
          <span className="text">Show More</span>
        </button>
      </div>
    </section>
  );
};

export default Skills;
