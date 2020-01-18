import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Nav from './Nav/Nav';
import Intro from './Intro/Intro';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  return (
    <main>
      <header className='half'>
        <Intro />
      </header>
      {!isMobile && <section className='different half'> 
        <Nav /> 
      </section>}
    </main>
  );
}

export default App;