import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Scroll = keyframes`
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        transform: translateY(52px)
    }
`;
const Inactive = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 0;
        transform: translateY(52px)
    }
`;
const MouseContainer = styled.div`
  width: 120px;
  height: ${({ hideMouse }) => (hideMouse ? "200px" : "120px")};;
  border-radius: 100px;
  border: 10px solid rgba(0, 0, 0,0.2);
  background-color: rgba(0, 0, 0,0.2);
  position: fixed;
  z-index: 10000;
  top: 50vh;
  opacity:${({ hideMouse }) => (hideMouse ? "1" : "0")};
  transition: all 0.1s ease-in;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0,0.9);
    margin-left: -8px;
    top: 20px;
    border-radius: 10px;
    animation-duration: 2s;
    animation-delay: 0.5s;
    animation-iteration-count: infinite; 
    animation-name: ${Scroll}; /*${({ hideMouse }) => (hideMouse ? "${Scroll}" : "Inactive")};*/
    z-index: 1000;
    position: absolute;
    left: 50%;
  }
`;
const Mouse = () => {
    const [hideMouse, setHideMouse] = useState(false);

    useEffect(() => {
        const touchstart = ()=>{
            setHideMouse(true);
        }
        const touchend = ()=>{
            setHideMouse(false);
      }
        document.body.addEventListener('touchstart', touchstart, false);
        document.body.addEventListener('touchstart', touchend, false);
      
        return () => {
          document.body.removeEventListener('touchstart', touchstart, false);
          document.body.removeEventListener('touchend', touchend, false);
        }
        
    });
    const touch = ()=>{
        console.log('touch started');
    }
    return (<MouseContainer 
        
        hideMouse ={hideMouse}
        />);
};

export default Mouse;
