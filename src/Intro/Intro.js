import React from 'react';
import ScaleText from "react-scale-text";
import './Intro.css';

function Intro() {
  return (
    <>
      <ScaleText widthOnly={true}>
        <h1 className='intro'>Hi<br />it's me<br />Daniel.</h1>
      </ScaleText>
      <p className='tagline'>But I'm also a full stack developer.</p>
    </>
  );
}

export default Intro;