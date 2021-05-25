import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const AboutSection = styled.section`
    /* height: 60%; */
    position: relative;
    width: 100vw; 
    padding: 2rem;
    padding-top: 6rem;
    @media (min-width: 768px) {
        width: 40vw;
  } 
`
const RelativeDiv  = styled.div`
    position: relative;
`
const BlobLight  = styled.div`
position: absolute;
width:800px;
height:400px;
left: -1em;
top: -2.0em;
z-index: 0;
display: flex;
opacity: var(--lightBlobOpacity);
overflow: hidden;
`
const BlobDark  = styled.div`
    position: absolute;
    width:800px;
    height:400px;
    left: 8em;
    top: -2.0em;
    z-index: 0;
    display: flex;
    opacity: var(--darkBlobOpacity);
    overflow: hidden;
`

const ProfileImageContainer = styled.div`
position: relative;
border-radius: 100vw;
margin-left: 0px;
margin-top: 0px;
z-index: 50;

&:before {
    content: '';
    background: url(/assets/imgs/blob.svg) no-repeat center center;
    background-size: 100% 100%;
    width: 150%;
    height: 150%;
    display: block;
    @media (min-width: 768px) {
        display: none;
        width: 220%;
        height: 150%;
        transform: translate(-30%, -25%);
    }
    position: absolute;
    z-index: -1;
    transform: translate(-10%, -15%);
}

`
const About = () => {
    return (
        <AboutSection>
            {/* <RelativeDiv>
             <BlobLight>
            <Image 
            src='/assets/imgs/blob.svg' 
            alt="Picture of the author"
            width='1000px'
            height='840px'
            />
            </BlobLight>
            </RelativeDiv> */}
            {/* <RelativeDiv>
            <BlobDark>
            <Image 
            src='/assets/imgs/blobDark.svg' 
            alt="Picture of the author"
            width='1000px'
            height='840px'
            />
            </BlobDark> 
            </RelativeDiv> */}
            <ProfileImageContainer>
            <Image 
            src='/assets/imgs/profile.svg' 
            alt="Picture of the author"
            width='380px'
            height='380px'
            priority={true}
            /> 
            </ProfileImageContainer>
        </AboutSection>
    )
}

export default About
