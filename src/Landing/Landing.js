import React, { useEffect } from 'react';
import Intro from '../Intro/Intro';
import Nav from '../Nav/Nav';
import { useMediaQuery } from 'react-responsive';
import './Landing.css';

function Landing() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  return (
    <header>
      <div className='half'>
        <Intro />
      </div>
      {!isMobile && <div className='different half'>
        <Nav />
      </div>}
    </header>
  );
}

export default Landing;