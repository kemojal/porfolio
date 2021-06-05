import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes }  from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

const textAnim = keyframes`
    0% {
        opacity: 1
        transform: translateY(0px)
    }
    25% {
        opacity: 0;
        transform: translateY(52px)
    }
    50% {
        opacity: 0;
        transform: translateY(52px)
    }
    100% {
        opacity: 1
        transform: translateY(0px)
    }
`

const HeroContainer = styled(motion.section)`
  position: relative;
  width: 100vw;
  @media (min-width: 768px) {
    width: 60vw;
    padding-left: 250px;
    height: 100vh;
  }
`;

const MainContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  padding: 2rem;
  padding-top: 6.5rem;
  @media (min-width: 768px) {
    padding-top: 7.5rem;
  }

  &:before {
    content: '';
    background: url(/assets/imgs/hero-blob.svg) no-repeat center center;
    background-size: 110% 100%;
    width: 108%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    transform: translate(-30%, -10);
    transform: translate(-10%, -15%);

    @media (min-width: 768px) {
      background-size: 100% 100%;
      width: 150%;
      height: 120%;
      display: block;
      position: absolute;
      z-index: -1;
      transform-origin: 100% -100%;
      transform: translate(-18%, -4%);
      /* transform: rotate(5deg);  */
    }
  }
  p {
    padding-top: 1rem;
    font-size: 1rem;
    letter-spacing: -0.02em;
    font-weight: 300;
    color: var(--lightNormalTextTitleColor);
    line-height: 1.8em;
    @media (min-width: 768px) {
      padding-top: 1.5rem;
      font-size: 1.2rem;
    }
  }
`;
const DeveloperName = styled(motion.h1)`
  color: var(--lightTextTitleColor);
  font-size: 6.5rem;
  letter-spacing: 0.04em;
  font-family: 'Inter', sans-serif;
  text-align: left;
  font-size: 19vw;
  line-height: 1;
  font-weight: 800;
  padding-top: 0.2em;
  letter-spacing: -0.03em;
  @media (min-width: 768px) {
    font-size: 5.5rem;
    letter-spacing: 0em;
  }
  .orange {
    color: var(--crimson);
  }
`;
const Phrase = styled(motion.h1)`
  color: var(--lightTextTitleColor);
  font-size: 3rem;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  line-height: 4rem;
  padding-top: 0.5em;
  @media (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 7rem;
    letter-spacing: 0.1em;
    padding-top: 0.2em;
  }

  .phraseText {
    color: var(--lightTextPhraseColor);
  }
  .emp {
    padding-left: 0.5rem;
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0.2);
  }
`;
const AnimatedWord = styled.span`
    animation-duration: 1.5s;
    animation-delay: 5s;
    animation-iteration-count: infinite; 
    animation-name: ${textAnim};
    transition: all 0.1s ease-in;
`;
const SeeMyWorkBtn = styled.a`
  width: 181px;
  height: 60px;
  position: relative;
  margin-top: 2.2em;
  margin-left: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 50;
  color: var(--lightTextTitleColor);
  p {
    z-index: 10;
  }
  &:hover {
    p {
      color: var(white);
    }
  }
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid var(--crimson);
  background-color: #fd4370;
  position: absolute;
  left: 0;
  ${SeeMyWorkBtn}:hover & {
    /* background-color: var(--crimson); */
    width: 100%;
  }
`;
const Hero = () => {
  const [word, setWord] = useState(0);
  const words = ['the Web', 'iOS', 'Android'];
  const colors = ['red', 'blue', 'green'];
  const [animate, setAnimate] = useState(false);

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
    y: 100,
    x: 0,
  };

  const animationName =
    intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setWord((word) => (word < 2 ? word + 1 : 0));
      setAnimate(!animate);
      setAnimate(false);
    }, 5000);
    return () => clearInterval(interval);
  });

  const colorName = colors[word];
  // console.log(colorName);
  return (
    <HeroContainer ref={myRef}>
      <MainContainer animate={animationName}>
        <p>Hey, I'm</p>
        <DeveloperName
          initial={fadeOut}
          animate={fadeIn}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            default: { duration: 0.4 },
          }}
        >
          kemo Jallow
          <span Jallow class='orange'>
            .
          </span>
        </DeveloperName>
        <Phrase>
          <span className='phraseText'>I build things for </span>
          <AnimatedWord className={`emp ${colorName}`} >
            {words[word]}
          </AnimatedWord>
        </Phrase>
        <motion.p
          initial={fadeOut}
          animate={fadeIn}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            default: { duration: 0.4 },
          }}
        >
          I’m a Taiwan-based Software engineer who specializes in building web
          and mobile apps (and occasionally designing) exceptional digital
          experiences. Currently, working at home and social distancing.
        </motion.p>
      </MainContainer>

      <SeeMyWorkBtn href='#projects'>
        <Circle />
        <p>See My Work</p>
      </SeeMyWorkBtn>
    </HeroContainer>
  );
};

export default Hero;
