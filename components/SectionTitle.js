import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-top:1.2rem;
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
    height: 85px;
    border-radius:0px;
    opacity: 1;
    left: 0px;
    background-color: var(--crimson);
    background: #FF5700;
    background: #ffdc7c; /*radial-gradient(circle, #FF5700 0%,  #FF0056 100%); */
    @media (min-width: 768px) {
        width: 50%;
        height: 20px;
        background: orange;
        left: 25%;
        top: 45%;
        transform: rotate(1deg);
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
