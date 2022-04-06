import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
// import ProjectCard from '../ProjectCard'
import ProjectCard from '../ProjectCard';
import { Data } from '../../utils/Data';
import { motion } from 'framer-motion';

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
  /* &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    width: 110vw;
    height: 0vw;
    height: 25px;
    height: 117px;
    width: 100px;
    transform: rotate(-5deg);
    border-radius: 0%;
    background-color: #c51838;
    
  } */
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
`
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

`
const MyProjects = () => {
  const [featureProjects, setFeaturedProjects] = useState([]);

  return (
      <ProjectsSection id='projects'>
          <SectionTitle title={'My work'} />
      <Spacer />
      <ProjContainer>
        {Data.slice(0,3).map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </ProjContainer>
      <button className="see-more-btn">See More </button>
    </ProjectsSection>
  );
};

export default MyProjects;
