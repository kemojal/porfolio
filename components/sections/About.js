import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
// import Fade from 'react-reveal/Fade';

// import 'animate.css/animate.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';

//import Me from './assets/imgs/me2.svg'
import DoodleBG from './../svg/DoodleBG';

const AboutSection = styled(motion.section)`
  position: relative;
  
  width: 90vw;
  height: 90vw;
  transform: translateX(5vw);
 
  padding-top: 6rem;
  
  border-top-left-radius: 300px;
  border-bottom-left-radius: 300px;
  border-radius: 300px;
  
  backdrop-filter: blur(20px);
  margin-top: 80px;
  padding-top: 0px;
  margin-top: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media (max-width: 767px) {
    overflow-y: visible;
  }
  @media (min-width: 768px) {
    width: 40%;
    border-radius: 0;
    margin-top: 0;
    z-index: 999;
    height: 100%;
    /* background-color:transparent;  */
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    border-radius: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0px;
    /* position: absolute; */
   
   box-shadow: none;
   border-radius: 0px;
   /* background-color: red; */
   
  }
`;
const RelativeDiv = styled.div`
  position: relative;
`;
const BlobLight = styled.div`
  position: absolute;
  width: 800px;
  height: 400px;
  left: -1em;
  top: -2em;
  z-index: 0;
  display: flex;
  opacity: var(--lightBlobOpacity);
  overflow: hidden;
`;
const BlobDark = styled.div`
  position: absolute;
  width: 800px;
  height: 400px;
  left: 8em;
  top: -2em;
  z-index: 0;
  display: flex;
  opacity: var(--darkBlobOpacity);
  overflow: hidden;
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 100vw;
  margin-left: 0px;
  margin-top: 0px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  /* border-top-right-radius: 0;
  border-bottom-right-radius: 0; */
  /* background-color: #02081514; */
  /* background-color: crimson; */
  overflow: hidden;
  overflow: visible;
  width: 100%;
  height: 100%;


  background-color: #0000000f;;
  background-color: transparent;
  padding-bottom: 25px;
  background-color: red;
  background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,0.055081407563025264) 0%, rgba(255,255,255,0) 100%);
box-shadow: ${({ theme }) => theme.btnBoxShadow};
  position: relative;
  /* overflow: hidden; */

  &:after { 
    content: "";
    /* height: 400px; */
    left: 0;
    right: 0;
    bottom: 0px;
    /* top: 20px; */
    border-bottom-left-radius: 250%;
    border-bottom-right-radius: 250%;  
    /* background-color: orange;  */
    /* width: 100%; */
    /* width: 70%; */
    height: 35%;
    width: 90%;
    /* transform: translate(-10%,39%); */
    /* transform: translate(20%,39%); */
    transform: translate(5%,40%);
    transition: all 0s ease-in-out;
    background-image:${({ theme }) => theme.bgGradient};;
    /* background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 1%,#fff 37%); */

    position: absolute;
  }

  @media (min-width: 768px) {
    width: 465px;
    height: 465px;
    padding-bottom: 40px;
    
  }
  /* position: absolute;
  bottom: 120px;
  right: 0px;
 top: 0; */
  img {
    width: 100%;
    width: 100%;
    @media (min-width: 768px) {
      width: 100%;
    }
  }
  /* &:before {
    content: '';
    background: url(/assets/imgs/blob.svg) no-repeat center center;
    background-size: 100% 100%;
    width: 150%;

    height: 150%;
    display: block;
    @media (min-width: 768px) {
      display: none;
      width: 220%;
      height: 150%;
      transform: translate(-30%, -25%);
    }
    position: absolute;
    z-index: -1;
    transform: translate(-10%, -15%);
  } */

  @media (min-width: 768px) {
  
     &:after { 
     width: 70%;
     transform: translate(20%,39%);
  } 
  }
`;
const About = ({theme}) => {
  const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
    once: true,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  const fadeOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };

  const animationName =
    intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;

  return (
    <AboutSection id='about' ref={myRef}>
      <ProfileImageContainer>
        {/* <ScrollAnimation 
        animateIn='zoomIn' 
        duration={10}
        delay={50}
        animateOut ='fadeInDown' > */}
        {/* {theme === 'dark' && <DoodleBG />} */}
        <img src='/assets/imgs/me4.svg' />

        {/* <Image
          src='/assets/imgs/me3.svg'
          alt='Picture of the author'
          width='800px'
          height='800px'
          // layout='fill'
          priority={true}
        />  */}
        {/* <Image
          src='/assets/imgs/me2.svg'
          alt='Picture of the author'
          width='300px'
          height='300px'
          priority={true}
        /> */}
        {/* </ScrollAnimation> */}
      </ProfileImageContainer>
    </AboutSection>
  );
};

export default About;
