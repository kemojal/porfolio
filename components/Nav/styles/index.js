import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  position: fixed;
  padding: 0rem 2rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  max-height: 64px;
  background-color: rgba(255, 255, 255, 0.72);
  background-color: ${({ theme }) => theme.bgNav};
  background-color: ${({ isOpen }) =>
    isOpen ? '#E33140' : `${({ theme }) => theme.bgNav}`};
  background-color: ${({ theme }) => theme.bgNav};
  box-shadow: inset 0px -1px 1px ${({ theme }) => theme.navShadowColor};
  /* box-shadow: ${({ theme }) => theme.navShadowColor} !important; */
  transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1200px;
  }
  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.bgNav};
    backdrop-filter: blur(20px);
    min-height: 60px;

    .container {
      display: flex;
      width: 100%;
    }
  }
`;
export const FluidContainer = styled.div`
  width: 100vw;
  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.bgNav};
    backdrop-filter: blur(20px);
    max-width: 1200px;
  }
`;
export const NavLogo = styled.a`
  padding: 1rem 0;
  padding: 0.5rem 0;
  color: #dd143c;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  &:before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.bgNavLogo};
    width: 50px;
    height: 50px;
  }
  @media (max-width: 767px) {
    ::before {
      content: '';
      width: 35px;
      height: 35px;
      left: 3px;
    }
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  /* padding: 15px 15px; */
  /* background-color: pink; */
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(136 144 195 / 20%),
    0 5px 15px 0 rgb(37 44 97 / 15%);

  box-shadow: 0 0 0 5px #ffffff10, 0 0 0 10px #ffffff05, 0 0 0 20px #ffffff01;

  width: 32px;
  height: 32px;
  border-radius: 10px;

  div {
    position: relative;
    width: 12px;
    height: 14px;
  }
  span {
    position: absolute;
    height: 2px;
    width: 14px;
    background-color: var(--hamburgerSpanColor);
    background-color: ${({ isOpen }) =>
      isOpen ? 'var(--hamburgerSpanColor)' : 'var(--hamburgerSpanColor)'};
    margin-bottom: 2px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(229, 232, 236);
  }
  .first {
    top: ${({ isOpen }) => (isOpen ? '8px' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
    transition: top 0s 0s, transform 0.2s ease-in;
  }
  .center {
    top: 6px;
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }
  .second {
    top: ${({ isOpen }) => (isOpen ? '8px' : '12px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
    transition: top 0s 0s, transform 0.2s ease-in;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 35%;
  height: 100%;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    overflow: hidden;
    background-color: ${({ isOpen }) => (isOpen ? '#E33140' : 'crimson')};
    background-color: ${({ theme }) => theme.bgNav};
    background-color: #212325;
    background-color: ${({ theme }) => theme.NavModalBgColor};
    backdrop-filter: blur(20px);
    box-shadow: inset 0px -1px 1px ${({ theme }) => theme.navShadowColor};
    color: white;
    position: absolute;
    top: 5rem;
    padding-bottom: 1rem;
    padding-top: 5rem;
    /* z-index: 1000; */
    flex-direction: column;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-15vh)' : 'translateY(-75vh)'};
    transition: all 0.2s ease-in;
    /* transition: transform 0.2s ease-in; */
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100vw;
    height: 65vh;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '1')};

    box-shadow: ${({ theme }) => theme.NavModalShadow};
  }
  @media (min-width: 768px) {
    width: 50%;
    background-color: white;
    background-color: transparent;
    padding-right: 40px;
  }
  @media (min-width: 1025px) {
    width: 40%;
    background-color: transparent;
  }
`;
export const MenuLink = styled.a`
  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease-in;
    transition-delay: 0.4s;
    font-size: 0.9rem;
    /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
  }

  &:hover {
    .s-name {
      color: white;
      color: ${({ theme }) => theme.text};
      @media (min-width: 768px) {
        color: crimson;
        border-bottom: 2px solid crimson;
      }
    }
    .number {
      color: #222;
      opacity: 1;
      @media (min-width: 768px) {
        color: #000;
        opacity: 1;
      }
    }
  }
  span {
    padding-left: 0.2rem;
  }
  .number {
    color: #222;
    color: ${({ theme }) => theme.crimson};
    opacity: 0.4;
    font-size: 3rem;
    font-weight: bolder;
    margin-top: ${({ isOpen }) => (isOpen ? '0' : '-100vw')};
    transition-delay: 0.2s;
    color: rgb(32, 38, 45);

    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0px;

    @media (min-width: 768px) {
      font-size: 1rem;
      display: none;
    }
  }
  .s-name {
    font-size: 3.1rem;

    margin-top: ${({ isOpen, index }) => (isOpen ? '0' : '100vw ')};
    transition-delay: 0.25s;

    /* color: rgb(32, 38, 45); */
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0px;
    @media (min-width: 768px) {
      font-size: 1rem;
      color: ${({ theme }) => theme.text};
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    color: white;
    width: 100%;
    margin: 2px 0px;
  }
`;

export const MenuTitleBody = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    padding-right: 40px;
    align-items: center;
  }
`;
export const SayHelloMenu = styled.div`
  width: 100%;
  padding: 5px 2rem;
  border-top: 1px solid #0000001a;
  color: black;
  h3 {
    color: #00000029;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
  p {
    padding: 4px 0;
    font-size: 1rem;
    color: #000000a3;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
