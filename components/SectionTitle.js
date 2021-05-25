import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-top:6rem;
    span{
        color: green;
        padding-left: 10px;
        color: var(--lightTextTitleColor);
        font-weight: 800;
        line-height: 18px;
        letter-spacing: 3px;
        font-size: 1.5rem;
        padding-top:0rem;
        text-transform: uppercase
    }
    @media (min-width: 768px) {
        justify-content: center;
        margin-top: 2rem;
        padding:5rem;
        span{
            padding-top: 10px;
            font-size: 6rem;
            color: #000000;
        }
    }
`
const Line  = styled.div `
    position: absolute;
    width: 100vw;
    height: 55px;
    border-radius:0px;
    opacity: 0.5;
    left: 0px;
    background-color: var(--crimson);
    background: #FF5700;
    background: #2D89F5; /*radial-gradient(circle, #FF5700 0%,  #FF0056 100%); */
    @media (min-width: 768px) {
        width: 50%;
        height: 60px;
        background: #2D89F5;
        left: 25%;
        top: 35%;
        transform: rotate(3deg);
    }
    `


const SectionTitle = ({title}) => {
    return (
        <TitleContainer>
          <Line/>
          <span>{title}
          </span>
          
        </TitleContainer>
    )
}

export default SectionTitle
