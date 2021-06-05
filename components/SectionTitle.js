import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

const TitleContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 1.2rem;
  z-index: 1000;
  span {
    color: green;
    padding-left: 10px;
    color: var(--lightTextTitleColor);
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 3px;
    font-size: 1.5rem;
    padding-top: 0rem;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
    padding: 5rem;
    span {
      padding-top: 10px;
      font-size: 6rem;
      color: #000000;
    }
  }
`;
const Line = styled.div`
  position: absolute;
  width: 100vw;
  height: 85px;
  border-radius: 0px;
  opacity: 1;
  left: 0px;
  background-color: var(--crimson);
  background: #ff5700;
  background: #ffdc7c; /*radial-gradient(circle, #FF5700 0%,  #FF0056 100%); */
  @media (min-width: 768px) {
    width: 50%;
    height: 20px;
    background: orange;
    left: 25%;
    top: 45%;
    transform: rotate(1deg);
  }
`;

const SectionTitle = ({ title }) => {
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

  return (
    <TitleContainer
      animate={animationName}
      ref={myRef}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 200,
        default: { duration: 0.2 },
      }}
    >
      <Line />
      <span>{title}</span>
    </TitleContainer>
  );
};

export default SectionTitle;
