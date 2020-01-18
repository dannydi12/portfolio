import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Nav from './Nav/Nav';
import Intro from './Intro/Intro';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  return (
    <main>
      <header>
        <div className='half'>
          <Intro />
        </div>
        {!isMobile && <div className='different half'>
          <Nav />
        </div>}
      </header>
      
    </main>
  );
}

export default App;