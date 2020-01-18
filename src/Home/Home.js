import React from 'react';
import ScaleText from "react-scale-text";
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <header className='half'>
        <ScaleText widthOnly={true}>
          <h1 className='intro'>Hi<br />it's me<br />Daniel.</h1>
        </ScaleText>
        <p className='tagline'>But I'm also a full stack developer.</p>
      </header>
      <div className='different half'>
          <nav className='big-nav'>
            <ul>
              <li className='big'><Link to='about'>About</Link></li>
              <li className='big'><Link to='about'>Projects</Link></li>
              <li className='big'><Link to='about'>Contact</Link></li>
            </ul>
          </nav>
      </div>
    </main>
  );
}

export default Home;