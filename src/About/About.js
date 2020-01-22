import React, { useContext } from 'react';
import './About.css'
import ScaleText from 'react-scale-text';
import widthContext from '../widthContext';
import Avatar from 'avataaars';
import WordList from '../WordList/WordList';

function About() {
  const width = useContext(widthContext);
  return (
    <section className='about-section section'>
      <div className='row'>
        <div className='column'>
          <header>
            <ScaleText maxFontSize={100} widthOnly={true}>
              <h2 className='title underline'>About</h2>
            </ScaleText>
          </header>
          {/* <Avatar
            avatarStyle='Transparent'
            topType='ShortHairShortWaved'
            accessoriesType='Blank'
            hairColor='Brown'
            facialHairType='Blank'
            clotheType='Hoodie'
            clotheColor='Blue03'
            eyeType='Happy'
            eyebrowType='FlatNatural'
            mouthType='Smile'
            skinColor='Light'
          /> */}
          {/* <p>That's me! Well not really...</p> */}
          <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool. When I'm not online, I can be found writing songs and acting on TV.</p>
          <p className='underline'><br></br>Things I play nice with:</p>
          <WordList words={['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React', 'Git', 'AJAX', 'Node', 'Postgres']} />
          <p>But don't worry, I also speak human languages like English and French.</p>
        </div>
        <div className='column'></div>
      </div>


    </section>
  );
}

export default About;