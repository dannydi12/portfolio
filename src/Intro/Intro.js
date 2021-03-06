import React from 'react';
import ScaleText from "react-scale-text";
import './Intro.css';

function Intro() {
  return (
    <>
      <ScaleText maxFontSize={150} widthOnly={true}>
        <h1 className='intro'>Hi<br />it's me<br />Daniel.</h1>
      </ScaleText>
      <p>But I'm also a full stack developer.</p>
    </>
  );
}

export default Intro;