import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import About from './About/About';
import Landing from './Landing/Landing';
import widthContext from './widthContext';

function App() {
  return (
    <main>
      <widthContext.Provider value={{ isMobile: useMediaQuery({ query: '(max-width: 1000px)' }) }}>
        <Landing />
        <About />
      </widthContext.Provider>
    </main>
  );
}

export default App;