import React, { useContext } from 'react';
import './ProjectCard.css';
import WordList from '../WordList/WordList';
import widthContext from '../widthContext';

function ProjectCard(props) {
  const width = useContext(widthContext);
  return (
    <div className='project-card'>
      <img className='project-image' src={props.project.image} alt={props.project.title + ' landing page'} />
      <div className='project-wrapper'>
        <h5 className='project-title'>{props.project.title}</h5>
        <p>{props.project.description}</p>
        <WordList words={props.project.languages} />
        <div className='project-links'>
          <a className='underline' target='_blank' rel="noopener noreferrer" href={props.project.live}>Live</a>
          <a className='underline' target='_blank' rel="noopener noreferrer" href={props.project.repo}>Repo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;