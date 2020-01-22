import React from 'react';
import './WordList.css';

function WordList(props) {
  return (
    <ul className='word-list'>
      {props.words.map((word, i) => <li key={i}>{word}</li>)}
    </ul>
  );
}

export default WordList;