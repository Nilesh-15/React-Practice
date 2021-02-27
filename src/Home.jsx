import React from 'react';
import Common from './Common';
import homeImg from './images/brand-image.png'
const Home = () =>{
  return(
    <>
      <Common
        title="Grow your business with"
        title2="React Js"
        title3="We have the team of great developer"
        visit="/service"
        btnName="Getting Started"
        imgSrc={homeImg}
      />
    </>
  )
}

export default Home;