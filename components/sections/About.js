import React, {useRef} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
// import Fade from 'react-reveal/Fade';

// import 'animate.css/animate.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';

const AboutSection = styled(motion.section)`
  /* height: 60%; */
  position: relative;
  width: 100vw;
  padding: 2rem;
  padding-top: 6rem;
  @media (min-width: 768px) {
    width: 40vw;
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
const About = () => {
  const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
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

  const animationName = intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;

  return (
    <AboutSection id='about' ref={myRef}>
      <ProfileImageContainer animate={animationName}>
        {/* <ScrollAnimation 
        animateIn='zoomIn' 
        duration={10}
        delay={50}
        animateOut ='fadeInDown' > */}
        <Image
          src='/assets/imgs/profile.svg'
          alt='Picture of the author'
          width='380px'
          height='380px'
          priority={true}
        />
        {/* </ScrollAnimation> */}
      </ProfileImageContainer>
    </AboutSection>
  );
};

export default About;
