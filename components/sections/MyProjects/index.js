import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import SectionTitle from '../SectionTitle';
// import ProjectCard from '../ProjectCard'

// import { Data } from './../../utils/Data';
import { Data } from '../../../utils/Data';
import ProjectCard from '../../ProjectCard';
import SectionTitle from '../../SectionTitle';

const ProjectsSection = styled(motion.section)`
  width: 100vw;
  padding: 2rem 0;
  margin-top: 150px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: -50vw;
    left: 49.5vw;
    width: 1vw;
    height: 55vw;
    border-radius: 50%;
    transform: rotate(0deg);
    border-radius: 0%;
    background-color: #c51838;
    background-color: #c51838;
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 0%,
      #c51838 51%,
      rgba(255, 255, 255, 0) 100%
    );
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
      background: url( ${({ theme }) => theme.body === '#fff' ? '/assets/imgs/hero-blob-light.svg' : '/assets/imgs/hero-blob-dark.svg'}) no-repeat center center;
      background-size: 100% 100%;
      width: 80%;
      height: 80%;
      display: block;
      position: absolute;
      z-index: 0;
      top: 5rem;
      transform-origin: 100% -100%;
      transform: translate(0%,0%) rotate(0deg);
      opacity: 0.8;
    }
  }

  .see-more-btn {
    margin-top: 10px;
    /* height: 38px; */
    width: 90%;
    max-width: 370px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 141px; */
    padding: 15px 15px;
    font-size: 14px;
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 0 5px #00000010, 0 0 0 10px #00000005, 0 0 0 20px #00000001;
    border-radius: 3px;
    color: #ffffff90;
    background-color: #313131;
    /* background-image: linear-gradient(-90deg,#ff004d,#fd4370); */
  }

  @media (min-width: 768px) {
    margin-top: -150px;

    &:after {
      content: ' ';
      display: none;
    }
  }
`;
const Spacer = styled.div`
  height: 80px;
  width: 50px;
`;
const ProjContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 992px) {
    /* max-width: 90vw; */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 0;
    overflow: hidden;
    width: 100vw;
    max-width: 1200px;
  }
`;
const MyProjects = () => {
  const [featureProjects, setFeaturedProjects] = useState([]);
  const [n, setNested] = useState(3);

  const toggleSeeMore = () => {
    if (n < Data.length) {
      setNested(Data.length);
    } else {
      setNested(3);
    }
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle title={'My work'} />
      <Spacer />
      <ProjContainer>
        {Data.slice(0, n).map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </ProjContainer>
      <button className="see-more-btn" onClick={toggleSeeMore}>
        See {n < Data.length ? 'More' : 'Less'} Projects
      </button>
    </ProjectsSection>
  );
};

export default MyProjects;
