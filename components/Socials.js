import React from 'react'
import styled from 'styled-components';
// import github from '../public/assets/imgs/logo-github.svg';
import Image from 'next/image';

// /assets/imgs/blob.svg
const SocialContainer  = styled.div`
    /* display: none; */
    display: flex;
    position: fixed;
    z-index: 1000;
    height: 25vh;
        bottom: 5px;
        left: 5px;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0.72); */
  /* background-color: ${({ theme }) => theme.bgNav}; */
  /* box-shadow: inset 0px -1px 1px ${({ theme }) => theme.navShadowColor} !important;  */
    border-radius: 10px;
    transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    
    @media (min-width: 768px) {
        height: 100vh;
        top: 0;
        left: 0px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: black;
        padding: 0 2rem;
    }
`
const Icons  = styled.div`
 display: flex;
 color: black;
 justify-content: space-between;
    align-items: center;
    width: 50px;
    flex-direction: column;
    height: 80%;
@media (min-width: 768px) {
    
    padding: 20px 0;
    height: 40%;
    flex-direction: column;
    cursor: pointer;

}
   
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
            @media (max-width: 767px) {
                width: 25px;
            height: 25px;
            box-shadow: ${({ theme }) => theme.btnBoxShadow};
            border-width: 1px;
            }
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
const iconsData = [
    { social: 'instagram', icon: '/assets/imgs/logo-instagram.svg', altText: 'Picture of the author' },
    { social: 'youtube', icon: '/assets/imgs/logo-youtube.svg', altText: 'Picture of the author' },
    { social: 'twitter', icon: '/assets/imgs/logo-twitter.svg', altText: 'Picture of the author' },
    { social: 'github', icon: '/assets/imgs/logo-github.svg', altText: 'Picture of the author' }
  ];
const Socials = () => {
    
    return (
        <SocialContainer>
            <Icons>
                
                {iconsData.map((iconData) => (
          <Icon key={iconData.social}>
            <Image 
              className="social-icon"
              quality={100}
              src={iconData.icon}
              alt={iconData.altText}
              width='16px'
              height='16px'
              priority={true}
            />
          </Icon>
        ))}
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
