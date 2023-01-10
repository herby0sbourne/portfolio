import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { techStacksArrays } from '../utils';

const SkillCard = ({ title, img, gitHub, viewLik, tags, techStacks }) => {
  const techArray = techStacksArrays(techStacks, 3);

  return (
    <div className="work-card">
      <div className="card-img">
        <img src={img} alt={title} />
        <div className="main-tag">React</div>
      </div>
      <div className="project-link">
        <a href={gitHub} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a href={viewLik} target="_blank" rel="noreferrer">
          <AiFillEye />
        </a>
      </div>
      <div className="card-info">
        <h4 className="text-title">{title}</h4>
        <div className="card-footer">
          <div className="tech-stack">
            {techArray.map((techs) => {
              return (
                <ul key={techs}>
                  {techs.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
