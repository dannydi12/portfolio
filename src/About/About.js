import React, { useContext } from 'react';
import './About.css'
import ScaleText from 'react-scale-text';
import widthContext from '../widthContext';

function About() {
  const width = useContext(widthContext);
  return (
    <section className='about-section'>
      <header>
        <ScaleText maxFontSize={100} widthOnly={true}>
          <h2 className='title underline'>About</h2>
        </ScaleText>
      </header>
      <div className='row'>
        <div className='column'>
          <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool. When I'm not online, I can be found writing songs and acting on TV.</p>
          <p>Look {width.isMobile ? 'below' : 'to the right'} to see the languages I know. But don't worry I also speak human languages like English and French.</p>
        </div>
        <div className='column'>
          {!width.isMobile && <p className='underline'>Things I play nice with:</p>}
          <ul className='grouped-list'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Git</li>
            <li>AJAX</li>
            <li>Node.js</li>
            <li>Postgres</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;