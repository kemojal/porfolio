import React from 'react'
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';
import MoreProject from '../Project'

import { OthersData } from '../../utils/Data'

const MoreProjectsContainer = styled.section`
 width: 100vw;
 /* background-color: rgba(0, 255, 0,0.2); */
`
const MoreProjectDiv = styled.div`
    padding-top: 20px;
`
const MoreProjects = () => {
    return (
        <MoreProjectsContainer>
            <SectionTitle title ={"More Projects"} />
            <MoreProjectDiv>
                {
                    OthersData.map(({title, discription, githubLink}, i)=>
                       
                        (
                            <MoreProject 
                            num= {`0${i}`} 
                            title = {title}
                            discription={discription} 
                            githubLink = {githubLink}
                            />
                        )
                    )
                }
            </MoreProjectDiv>

        </MoreProjectsContainer>
    )
}

export default MoreProjects
