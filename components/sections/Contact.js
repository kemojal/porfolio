import React from 'react'
import styled from 'styled-components';

const ContactContainer = styled.section`
width: 100vw;
background-color: black;
color: white;
padding-bottom: 5rem;
`
const TextContainer = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    @media (min-width: 768px) {
        padding: 5rem 0;
    }
    h1{
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: 0.08rem;
        text-align: center;
        padding: 2rem;
        @media (min-width: 768px) {
            font-size: 6rem;
            font-weight: bold;
            letter-spacing: 0.08rem;
            text-align: left;
            padding: 0;
        }
    }
    p{
        font-size: 1.2rem;
        text-align: center;
        padding: 0.1rem 2rem;
        color: #8F8E8E;
        font-weight: 300;
        line-height: 2.2rem;
        
    }
    @media (min-width: 768px) {
            p{
                font-size: 1.5rem;
                padding-top: 5rem;
                font-size: 1.5rem;
                font-weight: 200;
                width : 30% ;
            }
        }
`

const ActionBTContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SeeMyWorkBtn  = styled.div`
    width: 181px;
    height: 60px;
    position: relative;
    margin-top: 2.2em;
    margin-left: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 50;
    color: var(--lightTextTitleColor);
    p{
        z-index: 10;
        color: white;
        
    }
    &:hover {
        p{
            color: var(white);
        }
    }
`
const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 2px solid var(--crimson);
    background-color: #fd4370;
    position: absolute;
    left: 0;
    ${SeeMyWorkBtn}:hover & {
        /* background-color: var(--crimson); */
        width: 100%;
    }
`
const Contact = () => {
    return (
        <ContactContainer>
            <TextContainer>
                <h1>Let's work together</h1>
                <p>Have an app or website idea?
                I'm available for freelance work.
                </p>
            </TextContainer>
            <ActionBTContainer>
            <SeeMyWorkBtn>
                <Circle/>
                <p>See My Work</p>
            </SeeMyWorkBtn>
            </ActionBTContainer>
        </ContactContainer>
    )
}

export default Contact
