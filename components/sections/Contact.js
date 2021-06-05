import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

const ContactContainer = styled(motion.section)`
  width: 100vw;
  background-color: #e33140;
  color: white;
  padding-bottom: 8rem;
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
  color: white;
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.08rem;
    text-align: center;
    padding: 2rem;
    @media (min-width: 768px) {
      font-size: 6rem;
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
    color: white;
    font-weight: 300;
    line-height: 2.2rem;
  }
  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
      padding-top: 5rem;
      font-size: 1.5rem;
      font-weight: 200;
      width: 30%;
    }
  }

  /* the circle */
  &:before {
    content: '';
    position: absolute;
    width: 382px;
    height: 382px;
    bottom: -10%;
    left: 20%;
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
  color: white;
  p {
    z-index: 10;
    color: white;
  }
  &:hover {
    p {
      color: var(white);
    }
  }
`;
const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid var(--crimson);
  background-color: #fd4370;
  background-color: black;
  position: absolute;
  left: 0;
  ${SeeMyWorkBtn}:hover & {
    /* background-color: var(--crimson); */
    width: 100%;
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
        <h1 animate={animationTitle}>Let's work together</h1>
        <p animate={animationName}>
          Have an app or website idea? I'm available for freelance work.
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
