import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import './App.css';
import About from './About/About';
import Landing from './Landing/Landing';

function App() {
  // const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  return (
    <main>
      <Landing />
      <About />
    </main>
  );
}

export default App;