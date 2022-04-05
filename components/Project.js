import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useIntersection } from 'react-use';
import { motion } from 'framer-motion';
const MoreProjectContainer = styled(motion.div)`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  /* flex-shrink: 0; */
  /* flex-basis: 0; */
  background-color: #f8f8f8;
  background-color: ${({ theme }) => theme.moreCardBg};
  justify-content: space-between;
  /* border-bottom: 1px solid #e8e8e8; */
  /* background: #f8f8f8; */
  &:hover {
    background-color: white;
    padding: 20px 80px;
    h1 {
      color: black;
      /* border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%; */
      /* background: #fe3161; */
    }
  }
  @media screen and (min-width: 776px) {
    width: calc( 30% - 10px);
    margin: 10px 10px;
    border-radius: 3px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 15px;
    /* background: orange; */
    
    &:hover {
    background-color: white;
    padding: 20px 15px;
  }
  }
`;
const MoreProjectNum = styled(motion.div)`
  width: 100%;
  border-right: 1px solid #e8e8e8;
  flex-grow: 0.2;
  flex-basis: 0;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #8f8e8e;
  opacity: 0.5;

  span {
    /* background: #fe3161; */
    padding: 0.2rem 0.5rem;
    border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
    background: #fd316150;
    color: #fd3161;
  }
`;
const MoreProjectBody = styled(motion.div)`
  width: 100%;
  flex-grow: 0.8;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2rem;
    text-align: center;
    color: white;
    padding: 1rem 1rem;
  }
  p {
    margin-top: 20px;
    font-size: 1.2rem;
    padding: 1rem 0.2rem;
    padding-top: 0;
    letter-spacing: 0.05rem;
    text-align: left;
    color: #909090;
  }
  .info {
    flex-grow: 0.8;
    flex-basis: 0;
  }
  .link {
    border-top: 1px solid #e8e8e8;
    border-top: 1px solid red;
    background-color: #EA3C5C;
    width: 100%;
    flex-grow: 0.2;
    flex-basis: 0;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem;
      font-size: 14px;
    }
  }
  @media (min-width: 768px) {
    flex-direction: column;
    h1 {
      font-size: 1rem;
      text-align: left;
      /* color: #8f8e8e; */
      padding: 0.5rem 0.5rem;
      font-size: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.text};;
    /* color: #8f8e8e; */
    padding: 0.8rem 0rem;
    max-width: 180px;
      /* width: 100%; */
    }
    .link {
      border-top: none;
      border-radius: 10px;
      font-size: 12px;
      padding: 2px 8px;
      cursor: pointer;
    }
    p{
      font-size: 0.8rem;
      font-weight: normal;
    }
  }
`;
const MoreProject = ({ num, title, githubLink, discription }) => {
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
    <MoreProjectContainer ref={myRef}>
          <MoreProjectNum animate={animationName}>
              <span>{num}</span>
      </MoreProjectNum>
      <MoreProjectBody animate={animationTitle}>
        <div className='info'>
          <h1>{title}</h1>
          <p>{discription}</p>
        </div>

        <div className='link'>
          <Link href={githubLink}>
            <a target='_blank'>
              VIEW PROJECT
              <Image
                className='ionicon'
                src={'/assets/imgs/logo-github.svg'}
                alt='Picture of the author'
                width='32px'
                height='32px'
                priority={true}
              />
            </a>
          </Link>
        </div>
      </MoreProjectBody>
    </MoreProjectContainer>
  );
};

export default MoreProject;
