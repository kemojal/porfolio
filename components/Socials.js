import React from 'react'
import styled from 'styled-components';
// import github from '../public/assets/imgs/logo-github.svg';
import Image from 'next/image';

// /assets/imgs/blob.svg
const SocialContainer  = styled.div`
    /* display: none; */
    
    @media (min-width: 768px) {
        position: fixed;
        height: 100vh;
        z-index: 1000;
        top: 0;
        left: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: black;
        padding: 0 2rem;
    }
`
const Icons  = styled.div`
    width: 50px;
    padding: 20px 0;
    height: 40%;
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:before {
            content: '';
            height: 100vh;
            border-bottom: solid 1px #8F8E8E;
            opacity: 1;
            position: absolute;
            left: 50%;
            top: 10%;
            z-index: 0;
        }
`

const Icon = styled.div`
            background-color: white;
            /* background-color: ${({ theme }) => theme.socialIconBg}; */
            background-color: ${({ theme }) => theme.bgServiceIcons};
            border: 1px solid #292B2E80;
            backdrop-filter: blur(20px);
            box-shadow: ${({ theme }) => theme.btnBoxShadow};
            /* box-shadow:
    inset 0 0 2.5px #fff,     
    inset 1px 0 4px #f0f,   
    inset -1px 0 4px #0ff, 
    inset 1px 0 15px #f0f,  
    inset -1px 0 15px #0ff,
    0 0 2.5px #fff,            
    -0.5px 0 4px #f0f,       
    0.5px 0 4px #0ff;    */
            width: 32px;
            height: 32px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            padding: 4px;
            opacity: 0.8;
            cursor: pointer;
            &:hover{
                opacity: 1;
                padding-bottom: 10px;
                /* background-color: red; */
            }
            
`
const EmailContainer =  styled.div`
    position: relative;
    /* background-color: pink; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    span{
        font-weight: lighter;
        color: #8F8E8E;
        font-size: 1rem;
        position: absolute;
        top: 30%;
        right: -20%;
        transform-origin: 50% 300%; 
        /* transform: translate(50%, 50%); */
        transform: rotate(90deg);
        &:before {
            content: '';
            width: 30vh;
            border-bottom: solid 1px #8F8E8E;
            opacity: 0.3;
            position: absolute;
            left: -170%;
            top: 50%;
            z-index: -1;
        }
        
        &:after {
            content: '';
            width: 58vh;
            border-bottom: solid 1px #8F8E8E;
            opacity: 0.3;
            position: absolute;
            left: 110%;
            top: 50%;
            z-index: -1;
        }
        
    }
`
const Socials = () => {
    return (
        <SocialContainer>
            <Icons>
                <Icon>
                    <Image 
                        className="social-icon"
                        quality={100}
                        src={'/assets/imgs/logo-instagram.svg'}
                        alt="Picture of the author"
                        width='16px'
                        height='16px'
                        priority={true}
                    />
                </Icon>
                <Icon>
                    <Image 
                        src={'/assets/imgs/logo-youtube.svg'}
                        alt="Picture of the author"
                        width='16px'
                        height='16px'
                        priority={true}
                    />
                </Icon>
                <Icon>
                    <Image 
                        src={'/assets/imgs/logo-twitter.svg'}
                        alt="Picture of the author"
                        width='16px'
                        height='16px'
                        priority={true}
                        />
                </Icon>
                <Icon>
                    <Image 
                        src={'/assets/imgs/logo-github.svg'}
                        alt="Picture of the author"
                        width='16px'
                        height='16px'
                        priority={true}
                        />
                </Icon>
            </Icons>
            {/* <EmailContainer>
                <span>
                kemo3855@gmail.com
                </span>
            </EmailContainer> */}
        </SocialContainer>
    )
}

export default Socials
