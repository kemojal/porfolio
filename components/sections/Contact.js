import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

const ContactContainer = styled(motion.section)`
  width: 100vw;
  color: white;
  padding-bottom: 8rem;

background-color: ${({ theme }) => theme.bgContactMe};

  @media (min-width: 1025px) {
    padding-bottom: 10rem;
  }
`;
const TextContainer = styled(motion.div)`
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* color: white; */
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.08rem;
    text-align: center;
    padding: 2rem;
    span{
      border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
      /* background: #FE3161; */
      background: white;
      color: ${({ theme }) => theme.crimson};
      /* color: rgb(0, 76, 63); */
      padding: 0.25rem 0.5rem;
    }
    @media (min-width: 768px) {
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: 0.08rem;
      text-align: left;
      padding: 0;
    }
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    padding: 0.1rem 2rem;
    /* color: white; */
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    line-height: 2.2rem;
  }
  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
      padding-top: 5rem;
      font-size: 1rem;
      font-weight: 200;
      width: 30%;
    }
  }


  }
  &:before {
    content: '';
    position: absolute;
    width: 382px;
    height: 382px;
    bottom: -20%;
    right: 30%;
    z-index: 0;
    background: url('/assets/imgs/sliced-cirlce.svg') no-repeat;
    background-size: 30% 30%;
    background-position: center center;
  }
`;

const ActionBTContainer = styled(motion.div)`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SeeMyWorkBtn = styled(motion.a)`
   height: 45px;
  position: relative;
  margin-top: 2.2em;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* z-index: 50; */
  box-shadow: ${({ theme }) => theme.btnBoxShadow};
  /* font-weight: 900; */
  width: 50vw;
  justify-content: flex-start;
  padding-left: 25px;
  transform: translateX(5vw);
  border-radius: 30px;
  color: ${({ theme }) => theme.btnTextColor};
  background-color: #fd4370;
  background: white;
  color:  rgb(0, 76, 63);
  /* background-image: linear-gradient(-90deg,#ff004d,#fd4370);  */
  /* color: var(--lightTextTitleColor); */
  /* color: #0E182B;; */
  will-change: transform;
  transition: transform 450ms;
  transition: all ease-in-out;
  z-index: 1000;
  p {
    z-index: 10;
    /* color: #0E182B; */
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
const Circle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid var(--crimson);
  border: 1px solid rgba(255, 255, 255, 0.05);
  /* background-color: #fd4370;
  background-color: #FFFFFF; */
  /* background-color: rgba(255, 255, 255, 0.05); */
  background-color: rgb(1 76 62 / 13%);
  backdrop-filter: blur(20px);
  /* color: #0E182B; */
  position: absolute;
  right: 5px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${SeeMyWorkBtn}:hover & {
    /* background-color: var(--crimson); */
    background-color: #fd437070;
    background-color: #fd4370;
    /* width: 100%; */
  }
`;
const Contact = () => {
  const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: -30,
  };

  const fadeOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };
  const titleIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  const titleOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };

  const animationName =
    intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;
  const animationTitle =
    intersection && intersection.intersectionRatio < 0.2 ? titleOut : titleIn;
  return (
    <ContactContainer id='contact' ref={myRef}>
      <TextContainer>
        <h1 animate={animationTitle}>Let's
          <span>work</span> together</h1>
        <p animate={animationName}>
          Have an app or website idea? I'm available for freelance work. I can help you realize your dream software product.
        </p>
      </TextContainer>
      <ActionBTContainer>
        <SeeMyWorkBtn href='mailto:kemo3855@yahoo.com' animate={animationName}>
          <Circle />
          <p>Let's chat</p>
        </SeeMyWorkBtn>
      </ActionBTContainer>
    </ContactContainer>
  );
};

export default Contact;
