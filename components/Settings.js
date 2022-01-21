import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

//import GearIcon  from '/assets/imgs/gear.svg';
import DarkIcon from './svg/DarkIcon';
import LightIcon from './svg/LightIcon';

const ToggleThemeContainer = styled(motion.div)`
 position: fixed;
 /* background-color: brown; */
 background: ${({ theme }) => theme.text};
 /* width: 100px;
 height: 100px; */
 /* bottom: 2rem;
 left: 2rem; */
 top: 1.1rem;
 right: 5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color:transparent;
 z-index: 3000;

 @media (min-width: 768px) {
    right: 2rem;
    top: 1.55rem;
  }
`
const GearButton = styled.button`
border: none;
/* width: 44px;
height: 44px; */
width: 32px;
height: 32px;
cursor: pointer;
border: none;
border-radius: 50%;
background-color: transparent;
outline: 0px;
font-size: 100%;
line-height: 1.15;
display: flex;
align-items: center;
justify-content: center;
backdrop-filter: blur(20px);
transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
border-radius: 10px;
    padding: 6.5px;
    border: 1px solid ${({ theme }) => theme.themeToggleButtonBorder};
    background-color: transparent;

  /* box-shadow: inset 0px -1px 1px ${({ theme }) => theme.navShadowColor} !important; */
  &:hover{
      outline: none;
      /* transform: rotate(180deg); */
      /* background-color: green; */
  }
  &:focus {
    outline: 0 !important;
    /* border: none; */
}
&:before {
    transition: transform .2s ease-in-out;
    /* will-change: transform; */
    /* width: 36px; */
    /* height: calc(100% - 8px); */
    position: absolute;
    /* left: 4px; */
    /* top: 4px; */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    border-radius: 9999px;
    content: "";
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%);
}
`


const Settings = ({theme,  toggleTheme }) => {
    return (
        <ToggleThemeContainer >
            <GearButton onClick={toggleTheme}>
                {theme === 'light' ? <LightIcon/> : <DarkIcon /> }

            </GearButton>
        </ToggleThemeContainer>
    )
}

export default Settings
