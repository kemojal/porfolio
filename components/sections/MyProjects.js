import React, { useState} from 'react'
import styled from 'styled-components';

import SectionTitle from '../SectionTitle'
import ProjectCard from '../ProjectCard'

import { Data } from '../../utils/Data'

const ProjectsSection  = styled.section`
    width: 100vw;
    padding: 0 2rem;
    padding-bottom: 5rem;
    margin-top: 150px ;
    background-color: #0A3CB7;
    

    /* height: 600px; */
    @media (min-width: 768px) {
        padding: 0 8rem;
        padding-bottom: 12rem;
    
    }
`


const MyProjects = () => {
    const [featureProjects, setFeaturedProjects] = useState([])
    return (
        <ProjectsSection id="projects">
            <SectionTitle title ={"Projects"}/>
            { 
            Data.map( (p,i)=>(
                <ProjectCard key ={i} {...p}/>
            ))
            }
        </ProjectsSection>
    )
}

export default MyProjects
