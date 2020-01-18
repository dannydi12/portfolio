import React from 'react';
import './About.css'
import ScaleText from 'react-scale-text';
import Avatar from 'avataaars';

function About() {
  return (
    <section className='about-section'>
      <div className='row'>
        <div className='column'>
          <header>
            <ScaleText maxFontSize={100} widthOnly={true}>
              <h2 className='title'>About</h2>
            </ScaleText>
          </header>
          <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool. When I'm not online, I can be found writing songs and acting on TV.</p>
          <p>I speak HTML, CSS, Javascript, and React oh, also English and French</p>
        </div>
        <div className='column'>
          <Avatar
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
          />
          <p>That's me! Well not really...</p>
        </div>
      </div>
    </section>
  );
}

export default About;