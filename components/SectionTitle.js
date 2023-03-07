import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { useIntersection } from 'react-use';

import { motion, useTransform, useViewportScroll } from 'framer-motion';

const TitleContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0;
  justify-content: center;
  z-index: 1000;

  h1 {
    font-size: 36px;
    font-weight: 900 !important;
    color: #fff;
    text-transform: uppercase;
    margin: 0;
  }
  .orange {
    color: #fe1554;
    margin-left: 10px;
  }
  .white {
    color: ${({ theme }) => theme.text};
  }
  /* border: 1px solid red; */
  .behind-text {
    display: none !important;
    color: var(--lightTextTitleColor);
    text-transform: uppercase;

    font-size: 35px;
    letter-spacing: 10px;
    line-height: 0.7;
    position: absolute;
    top: 50%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translateY(-50%);
    color: hsla(0, 0%, 100%, 0.07);
  }
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: calc(50% - 2rem);
    width: 23vw;
    height: 23vw;
    max-width: 100px;
    max-height: 100px;
    transform: rotate(-5deg);
    border-radius: 50%;
    background-color: #c5183810;
    background-color: #1e202310;
    box-shadow: 0 0 0 5px #ffffff10, 0 0 0 10px #ffffff05, 0 0 0 20px #ffffff01;
  }
  @media (min-width: 768px) {
    justify-content: center;
    /* background:  orange; */
    /* margin-top: 2rem; */
    /* padding: 5rem; */
    span {
      padding-top: 0px;
      font-size: 2rem;
    }
    /* &:before{
        content: ' ';
        width: 100px;
        height: 100px;
    } */
  }
`;
const Line = styled.div`
  position: absolute;
  width: 100vw;
  height: 3.5px;
  border-radius: 0px;
  opacity: 1;
  width: 20vw;
  bottom: 0px;
  background-color: var(--crimson);
  background: #1e2023;
  border-radius: 20px;
  box-shadow: 0 0 0 5px #ffffff10, 0 0 0 10px #ffffff05, 0 0 0 20px #ffffff01;
  @media (min-width: 768px) {
    width: 90px;
    height: 5px;
    /* left: 25%;
    top: 45%; */
    bottom: 0px;
    transform: rotate(1deg);
  }
`;

const SectionTitle = ({ title }) => {
  let words = title.split(' ');
  const myRef = useRef(null);
  // const intersection = useIntersection(myRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.2,
  // });
  // const fadeIn = {
  //   opacity: 1,
  //   y: 0,
  //   x: 0,
  // };
  // const fadeOut = {
  //   opacity: 0,
  //   y: 100,
  //   x: 0,
  // };

  // const animationName =
  //   intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;

  const { scrollYProgress } = useViewportScroll();
  const cx = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1.1, 1.5]);
  const tx = useTransform(scrollYProgress, [0, 0.2, 1], [4, 1, 1]);

  return (
    <TitleContainer
      // animate={animationName}

      ref={myRef}
      // transition={{
      //   type: 'spring',
      //   stiffness: 260,
      //   damping: 200,
      //   default: { duration: 0.2 },
      // }}
    >
      {/* <span>{title}</span> */}
      <h1>
        <span className="white">{words[0]}</span>
        <span className="orange">{words[1]}</span>
        {words[2] && <span className="white">{words[2]}</span>}
      </h1>
      <span class="behind-text">WORKS</span>
      {/* <Line /> */}
    </TitleContainer>
  );
};

export default SectionTitle;
