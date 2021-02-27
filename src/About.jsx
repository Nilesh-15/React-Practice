import React from 'react';
import Common from './Common';
import aboutImg from './images/about.png'
const About = () =>{
  return(
    <>
      <Common
        title="Welcome to"
        title2="About"
        title3="We have the team of great developer"
        visit="/contact"
        btnName="Contact Now"
        imgSrc={aboutImg}
      />
    </>
  )
}

export default About;