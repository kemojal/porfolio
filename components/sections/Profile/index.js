import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useIntersection } from 'react-use';
// import Fade from 'react-reveal/Fade';

import {AboutSection, RelativeDiv, BlobLight, BlobDark, ProfileImageContainer } from './styles'
// import 'animate.css/animate.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';

//import Me from './assets/imgs/me2.svg'
import DoodleBG from '../../svg/DoodleBG';


const Profile = ({ theme }) => {
  const [ loading, setLoading ]  = useState(true);
  const myRef = useRef(null);
  // const intersection = useIntersection(myRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.2,
  //   once: true,
  // });
  // const fadeIn = {
  //   opacity: 1,
  //   y: 0,
  //   x: 0,
  // };

  // const fadeOut = {
  //   opacity: 0,
  //   y: 200,
  //   x: 0,
  // };

  // const animationName =
  //   intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;

  return (
    <AboutSection id="about" ref={myRef}>
      <ProfileImageContainer>
        {/* <ScrollAnimation 
        animateIn='zoomIn' 
        duration={10}
        delay={50}
        animateOut ='fadeInDown' > */}
        {/* {theme === 'dark' && <DoodleBG />} */}
        <img src="/assets/imgs/me4.svg"  onLoad={()=>{setLoading(false)}}/>
      </ProfileImageContainer>
    </AboutSection>
  );
};

export default Profile;
