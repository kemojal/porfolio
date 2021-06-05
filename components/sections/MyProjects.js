import React, { useState} from 'react'
import styled from 'styled-components';
import SectionTitle from '../SectionTitle'
import ProjectCard from '../ProjectCard'
import { Data } from '../../utils/Data'
import { motion } from 'framer-motion';

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

    
    return (
        <ProjectsSection id="projects">
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
