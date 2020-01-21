import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div>
      <img className='project-image' src={props.image} alt={props.title + ' landing page'} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <ul>
        {props.languages.map((language, i) => <li key={i}>{language}</li>)}
      </ul>
      <div>
        <a href={props.live}>
          Live
        </a>
        <a href={props.repo}>
          Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;