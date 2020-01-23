import React from 'react';
// import STORE from './ProjectsStore';
// import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectList(props) {
  // const projects = STORE.map((project, i) =>
  //   (<ProjectCard
  //     key={i}
  //     title={project.title}
  //     description={project.description}
  //     image={project.image}
  //     languages={project.languages}
  //     repo={project.repo}
  //     live={project.live} />)
  // );

  return (
    <>
      {props.children}
    </>
  );
}

export default ProjectList;