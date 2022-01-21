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
  /* height: 60%; */
  position: relative;
  /* width: 80vw;
  height: 80vw; */
  width: 100vw;
  height: 100vw;
  /* transform: translateX(calc(50vw - 40vw)); */

  /* padding: 2rem; */
  padding-top: 6rem;
  /* background-color: crimson; */
  /* background-color: #ed143de0; */
  /* background-color: transparent; */
  border-top-left-radius: 300px;
  border-bottom-left-radius: 300px;
  border-radius: 300px;
  /* border-radius: 0; */
  /* background: linear-gradient(-180deg, #1D1F21, #DD143C); */
  /* background-color: #ffffff04; */
  /* opacity: 0.72; */
  backdrop-filter: blur(20px);
  margin-top: 80px;
  padding-top: 0px;
  margin-top: 180px;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  /* overflow-x: hidden; */
  /* box-shadow: 0 0 0 10px #ffffff10, 0 0 0 20px #ffffff05, 0 0 0 40px #ffffff01; */
  /* position: absolute; */
  @media (max-width: 767px) {
    overflow-y: visible;
  }
  @media (min-width: 768px) {
    width: 40%;
    border-radius: 0;
    margin-top: 0;
    z-index: 999;
    /* background-color:transparent;  */
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    border-radius: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0px;
    position: absolute;
   
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
  /*background-color :#ffda2905; */
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
    width: 200%;
    height: 35%;
    transform: translate(-10%,30%);
    transition: all 0.2s ease-in-out;
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
    width: 120%;
    @media (min-width: 768px) {
      width: 100%;
    }
  }
  &:before {
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
      <ProfileImageContainer animate={animationName}>
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
