import React from 'react';
import ScaleText from 'react-scale-text';

function Projects() {
  return (
    <section className='section projects-section'>
      <div className='row'>
        <div className='column'>
          <header>
            <ScaleText maxFontSize={100} widthOnly={true}>
              <h2 className='title underline'>Projects</h2>
            </ScaleText>
          </header>
        </div>
        <div className='column'>

        </div>
      </div>
    </section>
  );
}

export default Projects;