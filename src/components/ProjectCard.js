import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className="content__card">
      <h2 className="card__title">{props.name}</h2>
      {props.icons.length < 2 ?
        <div className="card__icons">
          <i className={props.icons[0]}></i> 
        </div>
        : 
        <div className="card__icons">
          {props.icons.map((icon,index) => 
            <i key={index} className={icon}></i>
          )}
        </div>
      }
      <span className="card__meta">{props.meta}</span>
      {props.links.length < 2 ?
        <a className="card__link" href={props.links[0]}>View Code</a>
        : 
        <div>
          <a className="card__link" href={props.links[0]}>View Project</a>
          <a className="card__link" href={props.links[1]}>View Code</a>
        </div>
      }
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard;