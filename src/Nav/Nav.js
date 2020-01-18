import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='big-nav'>
      <ul>
        <li><Link to='about'>About</Link></li>
        <li><Link to='about'>Projects</Link></li>
        <li><Link to='about'>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;