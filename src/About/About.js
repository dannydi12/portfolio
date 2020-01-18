import React from 'react';
import './About.css'
import ScaleText from 'react-scale-text';

function About() {
  return (
    <section className='about-section'>
      <header>
        <ScaleText maxFontSize={100} widthOnly={true}>
          <h2 className='title'>About</h2>
        </ScaleText>
      </header>
      <div className='row'>
        <div className='column'>
          <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool. When I'm not online, I can be found writing songs and acting on TV.</p>
        </div>
        <p className='column'>I speak HTML, CSS, Javascript, and React
oh, also English and French</p>
      </div>
    </section>
  );
}

export default About;