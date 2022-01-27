import React from 'react'
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';
import MoreProject from '../Project'

import { OthersData } from '../../utils/Data'

const MoreProjectsContainer = styled.section`
width: 100vw;
margin-top: 60px;
/* background:  orange; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

/* @media screen and (min-width: 776px) {
margin-top: 0px;
} */
`

const Wrapper  = styled.div`
    margin-top: 40px;
    width: 100%;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MoreProjectDiv = styled.div`
    padding-top: 20px;
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 50px;
    background-color: #F8F8F8;
    background-color: #F8F8F8;
    justify-content: center;
    @media screen and (min-width: 776px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`
const MoreProjects = () => {
    return (
        <MoreProjectsContainer>
            <SectionTitle title ={"More projects"} />
            <Wrapper >
                <MoreProjectDiv>
                    {
                        OthersData.slice(0,9).map(({title, discription, githubLink}, i)=>
                            (
                                <MoreProject 
                                num= {(i < 10  )? `0${i+1}` : `${i+1}`} 
                                title = {title}
                                discription={discription} 
                                githubLink = {githubLink}
                                />
                            )
                        )
                    }
                </MoreProjectDiv>
            </Wrapper>
        </MoreProjectsContainer>
    )
}

export default MoreProjects
