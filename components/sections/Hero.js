import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const textAnim = keyframes`
    0% {
        color: #E92945;
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
`;

const spinWords = keyframes`
    10% {
      color: #FD4270;
      transform: translateY(-100%) 
    }
    20% {
      color: #FD4270;
      transform: translateY(-100%) 
    }
    40% {
      color: white;
      transform: translateY(-200%)
    }
    60% {
      color: white;
      transform: translateY(-200%)
    }
    80% {
      color: #61DAFB;
      transform: translateY(0%) 
    }
    100% {
      color: #61DAFB;
        transform: translateY(0%) 
    }
`;

const HeroContainer = styled(motion.section)`
  position: relative;
  width: 100vw;

  @media (min-width: 768px) {
    width: 60%;
    padding-left: 150px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
  }
`;

const MainContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  padding: 2rem;
  padding-top: 5.5rem;
  /* background-color: rgb(247 79 115 / 4%);
  background-color: rgb(0 251 239 / 4%); */

  /* background: linear-gradient(
180deg
, rgba(0,251,239,0.04) 0%, rgba(30,32,35,0.02) 50%);
    backdrop-filter: blur(20px);
    border-radius: 5%; */

  border-radius: 5%;
  @media (min-width: 768px) {
    padding-top: 7.5rem;
  }

  &:before {
    content: '';
    background: url(/assets/imgs/hero-blob.svg) no-repeat center center;
    background: url(/assets/imgs/hero-blob-dark-mobile.svg) no-repeat center
      center;
    background-size: 110% 100%;
    width: 118%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    transform: translate(-30%, -10);
    transform: translate(-10%, -12%);

    @media (min-width: 768px) {
      background: url(/assets/imgs/hero-blob-dark.svg) no-repeat center center;
      background-size: 100% 100%;
      width: 130%;
      height: 140%;
      display: block;
      position: absolute;
      z-index: -1;
      transform-origin: 100% -100%;
      transform: translate(-18%, -5%) rotate(0deg);
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

    @media (min-width: 320px) {
      font-size: 1.2rem;
      padding-top: 0.2rem;
      line-height: 1.5em;
      text-align: justify;
    }
    @media (min-width: 768px) {
      font-size: 1rem;
      /* background-color: orange; */
      padding-right:  150px;
      padding-top: 1.5rem;
      /* font-size: 1.2rem; */
  
    }
  }
`;
const DeveloperName = styled(motion.h1)`
  color: var(--lightTextTitleColor);
  color: ${({ theme }) => theme.text};
  font-size: 5.5rem;
  letter-spacing: 0.04em;
  font-family: 'Inter', sans-serif;
  text-align: left;
  font-size: 19vw;
  line-height: 1;
  font-weight: 800;
  padding-top: 0.2em;
  letter-spacing: -0.03em;

  background: -webkit-linear-gradient(-90deg, #FD4470, #FE567B
    );
    background: -webkit-linear-gradient(-180deg, #FFB800,#fd4370
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 320px) {
    font-size: 15vw;
  }
  @media (min-width: 768px) {
    font-size: 5.2rem;
    letter-spacing: 0em;
    padding: 10px 0;
  }
  .orange {
    color: var(--crimson);
  }
  .surname {
    color: ${({ theme }) => theme.crimson};
    background: -webkit-linear-gradient(#FD4470, #FE567B
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
`;
const Phrase = styled(motion.h1)`
  color: var(--lightTextTitleColor);
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  /* line-height: 4rem; */
  height: 4rem;
  /* padding-top: 0.5em; */
  box-sizing: content-box;
  display: flex;
  align-items: center;

  .words {
    overflow: hidden;
    color: yellow;
    height: 100%;
    margin-left: 10px;
    /* border: 1px solid red; */
  }
  @media (min-width: 320px) {
    font-size: 1.8rem;
    height: 2.4rem;
    padding: 10px 0;
    padding-top: 30px;
    /* background-color: #00000010; */
    padding-top: 30px ;
    /* border-radius: 51% 9% 40% 10% / 29% 32% 18% 71%; */

  }
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 7rem;
    letter-spacing: 0.1em;
    padding-top: 0.2em;
  }

  .phraseText {
    color: ${({ theme }) => theme.textPhraseColor};
  }
  .emp {
    padding-left: 0.5rem;
    text-decoration: underline;
    text-decoration-color: crimson;
  }
`;
const AnimatedWord = styled.span`
  display: flex;
  align-items: center;
  /* border: 1px solid orange; */
  padding-left: 0px;
  height: 100%;
  /* animation-duration: 1.5s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
 
  transition: all 0.1s ease-in; */
  animation-name: ${spinWords};
  animation-duration: 6s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  /* transition: ease-in; */
`;
const SeeMyWorkBtn = styled.a`
  /* width: 181px; */
  height: 45px;
  position: relative;
  margin-top: 2.2em;
  /* margin-left: 4em;
  margin-left: calc(50% - 90.5px); */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 50;
  /* border-radius: 30px; */
  /* box-shadow: 0 0 0 5px #ffffff10, 0 0 0 10px #ffffff05, 0 0 0 20px #ffffff01; */
  box-shadow: ${({ theme }) => theme.btnBoxShadow};

  /* width: 90vw; */
  width: 50vw;
  justify-content: flex-start;
  padding-left: 25px;
  transform: translateX(5vw);
  /* border-radius: 10px; */

  border-radius: 30px;

  color: ${({ theme }) => theme.btnTextColor};
  background-color: #fd4370;
  /* background-image: linear-gradient(-90deg,#FFB800,#fd4370); */
  background-image: linear-gradient(-90deg,#ff004d,#fd4370); 
  /* background-image: url('/imgs/Frame.png'); */

/* #FF2C55,#fd4370 */
  /* box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%); */
  will-change: transform;
  transition: transform 450ms;
  transition: all ease-in-out;
  z-index: 1000;
  p {
    z-index: 10;
  }
  &:hover {
    transition: transform 125ms;
    transform: translateY(-10px) scale(1.1, 1.1);
    p {
      color: var(white);
    }
  }
  @media (min-width: 320px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    margin-left: 0em;
    width: 181px;
    transform: translateX(2vw);
  }
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  /* border-radius: 30px; */
  border-radius: 15px;
  border: 2px solid var(--crimson);
  border: 1px solid rgba(255, 255, 255, 0.05);
  /* border: 2px solid #242424; */
  background-color: #44444470;
  background-color: #2a2a2a;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  /* width: 100%; */
  position: absolute;
  /* left: 0; */
  right: 5px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* will-change: transform;
    transition: transform 450ms; */
  ${SeeMyWorkBtn}:hover & {
    /* background-color: var(--crimson); */
    /* width: 100%; */
    background-color: #fd437070;
    background-color: #fd4370;
    /* transition: transform 125ms;
    transform: translateY(-10px); */
  }
  img {
    width: 20px;
  }
`;
const Hero = () => {
  const [word, setWord] = useState(0);
  const words = ['Web', 'iOS', 'Android'];
  const colors = ['red', 'blue', 'green'];
  const [animate, setAnimate] = useState(false);
  const discription = `I’m a Taiwan-based Software engineer who specializes in building web
  and mobile apps (and occasionally designing) exceptional digital
    experiences. Currently, working at home and social distancing.`;

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
    }, 10000);
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
          {/* <SkeletonTheme color='#0A3CB710' highlightColor='#0A3CB715'>
            <p>
              <Skeleton count={2} height={70} />
            </p>
            
          </SkeletonTheme> */}
          kemo <span className='surname'>Jallow</span>
          <span className='orange'>.</span>
        </DeveloperName>
        <Phrase>
          <span className='phraseText'>I build things for </span>
          {/* <AnimatedWord className={`emp ${colorName}`}>
            {words[word]}
          </AnimatedWord> */}
          <div className='words'>
            <AnimatedWord className='word'>Web</AnimatedWord>
            <AnimatedWord className='word'>iOS</AnimatedWord>
            <AnimatedWord className='word'>Android</AnimatedWord>
          </div>
        </Phrase>
        {discription ? (
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
            {discription}
          </motion.p>
        ) : (
          <SkeletonTheme color='#0A3CB710' highlightColor='#0A3CB715'>
            <p>
              <Skeleton count={4} height={28} />
            </p>
          </SkeletonTheme>
        )}
      </MainContainer>

      <SeeMyWorkBtn href='#projects'>
        <Circle />
        <p>See my work</p>
        <Circle>
          <img src='/assets/imgs/arrow_forward.svg' />
        </Circle>
      </SeeMyWorkBtn>
    </HeroContainer>
  );
};

export default Hero;
