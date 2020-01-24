import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
// import About from './About/About';
// import Landing from './Landing/Landing';
// import Projects from './Projects/Projects';
import widthContext from './widthContext';
import WordList from './WordList/WordList';
import Avatar from 'avataaars';

function App() {
  return (
    <main>
      <header className='landing'>
        <div className='landing-container'>
          <h1>Hi, it's me. Daniel.</h1>
          <p>But I'm also a web developer</p>
          <Avatar
            avatarStyle='Transparent'
            topType='ShortHairShortWaved'
            accessoriesType='Blank'
            hairColor='Brown'
            facialHairType='Blank'
            clotheType='Hoodie'
            clotheColor='Blue03'
            eyeType='Happy'
            eyebrowType='DefaultNatural'
            mouthType='Smile'
            skinColor='Light'
          />
        </div>
      </header>
      <section className='about-section'>
        <div className='wrapper'>
          <h2>About Me</h2>
          <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool. When I'm not online, I can be found writing songs and acting on TV.</p>
          <p className='underline'><br></br>Things I speak:</p>
          <WordList words={['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React', 'Git', 'AJAX', 'Node', 'Postgres']} />
          <p>But don't worry, I also speak human languages like English and French.</p>
        </div>
      </section>
      <section className='projects-section'>

      </section>
    </main >
  );
}

export default App;