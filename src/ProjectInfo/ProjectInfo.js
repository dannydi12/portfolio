import React from 'react';
import WordList from '../WordList/WordList';

function ProjectInfo(props) {
  return (
    <>
      <h5 className='project-title'>{props.project.title}</h5>
      <p>{props.project.description}</p>
      <WordList words={props.project.languages} />
      <div className='project-links'>
        <a className='underline' target='_blank' rel="noopener noreferrer" href={props.project.live}>Live</a>
        <a className='underline' target='_blank' rel="noopener noreferrer" href={props.project.repo}>Repo</a>
      </div>
    </>
  );
}

export default ProjectInfo;