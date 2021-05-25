import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem 0;
width: 100%;
span{
    z-index: 50;
    padding-left: 20px;
    /* color: var(--lightTextTitleColor); */
    color: ${({ color }) => (color ? color : "orange")};
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 2.5rem;
    color: white;
}
`
const Circle  = styled.div`
width: 80px;
height: 80px;
left: 30%;
border-radius: 60px;
background: orange;
background: ${({ color }) => (color ? color : "orange")};
border: 2px solid var(--crimson);
background: red;
position: absolute;
z-index: -1;
opacity: 0.2;
@media (min-width: 768px) {
    left: 35%;
}
`
const Line  = styled.div`
width: 120%;
height: 100px;
border-radius: 0px;
background: ${({ color }) => (color ? color : "orange")};
background: crimson;
/* background: radial-gradient(circle,  0%,   100%); */
opacity: 0.03;
position: absolute;
z-index: -1;
@media (min-width: 768px) {
    width: 70%;
}
`
const ProjectTitle = ({title, color}) => {
    return (
        <TitleContainer color={color}>
            <Line/>
            <Circle color={color}/>
            <span>{title}</span>
        </TitleContainer>
    )
}

export default ProjectTitle
