import React, { useState } from 'react';
import './Projects.css';
import ScaleText from 'react-scale-text';
import ProjectCard from '../ProjectCard/ProjectCard';
import STORE from './ProjectsStore';

function Projects() {
  const [projectState, setProjectState] = useState({
    currentCategory: 'basic'
  })

  //will need to add filter or object rank for categories before map
  let displayProjects = STORE.map((project, i) =>
    (<ProjectCard key={i} project={project} />)
  );

  return (
    <section className='section projects-section'>
      <header>
        <ScaleText maxFontSize={100} widthOnly={true}>
          <h2 className='title underline'>Projects</h2>
        </ScaleText>
      </header>
      <div className='project-list'>
        {displayProjects}
      </div>
    </section>
  );
}

export default Projects;