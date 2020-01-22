import React, { useContext } from 'react';
import './ProjectCard.css';
import WordList from '../WordList/WordList';
import widthContext from '../widthContext';

function ProjectCard(props) {
  const width = useContext(widthContext);
  return (
    <div className='project-card'>
      <img className='project-image' src={props.image} alt={props.title + ' landing page'} />
     <div className='project-wrapper'>
        <h5 className='project-title'>{props.title}</h5>
        <p>{props.description}</p>
        <WordList words={props.languages} />
        <div className='project-links'>
          <a className='underline' target='_blank' href={props.live}>
            Live
          </a>
          <a className='underline' target='_blank' href={props.repo}>
            Repo
        </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;