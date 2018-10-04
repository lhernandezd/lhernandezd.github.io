import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className="content__card">
      <h2 className="card__title">Portfolio</h2>
      <div className="card__icons">
        <i className="fab fa-react"></i>
        <i className="fab fa-css3-alt"></i>
      </div>
      <span className="card__meta">React, React-router, HTML, CSS, Js</span>
      <a className="card__link" href="https://github.com/lhernandezd/react-timer">View Project</a>
      <a className="card__link" href="https://github.com/lhernandezd/react-timer">View Code</a>
      <p>Single wep page application which includes my personal information and some projects.</p>
    </div>
  )
}

export default ProjectCard;