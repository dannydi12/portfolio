import React, { useContext } from 'react';
import './ProjectCard.css';
import WordList from '../WordList/WordList';
import widthContext from '../widthContext';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

function ProjectCard(props) {
  const width = useContext(widthContext);
  return (
    <div className='project-card'>
      <img className='project-image' src={props.project.image} alt={props.project.title + ' landing page'} />
      {width.isMobile &&
        <div className='project-wrapper'>
          <ProjectInfo project={props.project} />
        </div>
      }
    </div>
  );
}

export default ProjectCard;