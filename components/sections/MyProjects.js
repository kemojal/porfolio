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
  /* background-color:#0A3CB7; */
  /* background-color:#fd3838; */
  /* background-color: #C51838; */
  /* background-color: #F4F6F9; */
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: -5vw;
    left: -20px;
    width: 110vw;
    /* height: 15vw; */
    height: 0vw;
    transform: rotate(-5deg);
    border-radius: 0%;
    background-color: #c51838;
    /* background-color: #F4F6F9; */
    /* border-top: 1px solid #0000000d; */
    /* background-color: #FFE53B; */
  }
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
    /* border-top: 1px solid #C51838; */
    /* background-color: #FFE53B; */
  }
  /* background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%); */
  @media (min-width: 768px) {
    /* padding: 0 8rem; */
    /* padding-bottom: 12rem; */
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
    /* background-color: orange */
`
const ProjContainer = styled.div`
  /* background-color: orange; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #E5E5E5; */
  
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
        {Data.slice(0,6).map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </ProjContainer>
      
    </ProjectsSection>
  );
};

export default MyProjects;
