import React, { useState, useRef} from 'react'
import styled from 'styled-components';
import SectionTitle from '../SectionTitle'
import ProjectCard from '../ProjectCard'
import { Data } from '../../utils/Data'
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

const ProjectsSection  = styled(motion.section)`
    width: 100vw;
    padding-bottom: 5rem;
    margin-top: 150px ;
    background-color:#0A3CB7;
    @media (min-width: 768px) {
        padding: 0 8rem;
        padding-bottom: 12rem;
    
    }
`

const MyProjects = () => {
    const [featureProjects, setFeaturedProjects] = useState([])

    const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };
  const fadeOut = {
    opacity: 0,
    y: 0,
    x: 300,
  };

  const animationName = intersection && intersection.intersectionRatio < 0.5 ? fadeOut : fadeIn;
    return (
        <ProjectsSection id="projects" ref={myRef}>
            <SectionTitle title ={"Projects"} />
            { 
            Data.map( (p,i)=>(
                <ProjectCard key ={i} {...p}/>
            ))
            }
        </ProjectsSection>
    )
}

export default MyProjects
