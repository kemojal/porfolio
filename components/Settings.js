import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

//import GearIcon  from '/assets/imgs/gear.svg';
import DarkIcon from './svg/DarkIcon';
import LightIcon from './svg/LightIcon';

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   40% {
//     opacity: 1;
//   }
//   60% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `

// const flash = keyframes`
//   from {
//       opacity: 0;
//       }

//       to {
//       opacity: 1;
//       }
// `;

const ToggleThemeContainer = styled(motion.div)`
  position: fixed;
  /* background-color: brown; */
  background: ${({ theme }) => theme.text};
  /* width: 100px;
 height: 100px; */
  /* bottom: 2rem;
 left: 2rem; */
  top: 0.5rem;
  /* right: 5rem; */
  right: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 3000;

  @media (min-width: 768px) {
    /* right: 2rem; */
    right: 23px;
    top: 1.56rem;
  }

  @media (min-width: 1200px) {
    right: calc(((100% - 1100px) / 2) - 70px);
  }
`;
const GearButton = styled.button`
  border: none;
  /* width: 44px;
height: 44px; */
  width: 32px;
  height: 32px;

  width: 60px;
  height: 32px;

  cursor: pointer;
  overflow: hidden;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  outline: 0px;
  font-size: 100%;
  line-height: 1.15;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 49px;
  padding: 1.5px;
  /* border: 1px solid ${({ theme }) => theme.themeToggleButtonBorder}; */
  background-color: transparent;

  background-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,.07)' : `rgba(255, 255, 255, 0.11)`};

  /* box-shadow: inset 0px -1px 1px ${({ theme }) =>
    theme.navShadowColor} !important; */
  position: relative;
  .icon-container {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    /* background-color: orange; */
  }
  .left {
    background-color: ${({ theme }) =>
      theme === 'light' ? 'white' : `transparent`};
  }
  .right {
    background-color: ${({ theme }) =>
      theme === 'light' ? `transparent` : 'white'};
  }
  &:hover {
    outline: none;
    /* transform: rotate(180deg); */
    /* background-color: green; */
  }
  &:focus {
    outline: 0 !important;
    /* border: none; */
  }
  &:before {
    transition: transform 0.2s ease-in-out;
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
    content: '';
    /* background-color: #fff; */
    box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%);
  }
`;

const Effect = styled.div`
  position: absolute;
  left: ${({ theme }) => (theme === 'light' ? '4px' : `40px`)};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  background: white;
  background: #00000030;
  backdrop-filter: blur(20px);
  pointer-events: none;
  opacity: 1;
  z-index: -1;
  transition: all 0.1s ease-out;
  /* animation: ${(props) =>
    props.animate &&
    css`
      ${fadeIn} 0.2s linear 3
    `}; */
`;

const Settings = ({ theme, toggleTheme }) => {
  /* const [doAnimate, setDoAnimate] = useState(false); */
  return (
    <ToggleThemeContainer>
      <GearButton theme={theme} onClick={toggleTheme}>
        <div className="icon-container left">
          <LightIcon />
        </div>
        <div className="icon-container right">
          <DarkIcon />
        </div>

        {/* {theme === 'light' ? <LightIcon/> : <DarkIcon /> } */}

        <Effect theme={theme} />
      </GearButton>
    </ToggleThemeContainer>
  );
};

export default Settings;
