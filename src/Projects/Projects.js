import React, { useState } from 'react';
import './Projects.css';
import ScaleText from 'react-scale-text';
import ProjectCard from '../ProjectCard/ProjectCard';
import STORE from './ProjectsStore';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

function Projects() {
  const [projectState, setProjectState] = useState({
    currentProject: 1,
    currentCategory: 'basic'
  })

  //will need to add filter or object rank for categories before map
  let displayProjects = STORE.map((project, i) =>
    (<ProjectCard
      key={i}
      project={project}
      setProjectState={setProjectState} />)
  );

  return (
    <section className='section projects-section'>
      <div className='row'>
        <div className='column'>
          <header>
            <ScaleText maxFontSize={100} widthOnly={true}>
              <h2 className='title underline'>Projects</h2>
            </ScaleText>
          </header>
          <b />
          <div className='project-preview'>
            <ProjectInfo project={STORE[projectState.currentProject]} />
          </div>
        </div>
        <div className='column'>
          {displayProjects}
        </div>
      </div>
    </section>
  );
}

export default Projects;