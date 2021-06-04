import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Image from 'next/image' 
import { motion } from "framer-motion";


const Nav  = styled(motion.nav)`
    position: fixed !important; 
    padding: 0rem 2rem;
    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index:2000;
    top: 0;
    left: 0;
    right: 0;
    background-color: var( --bgLight);
    background-color: ${({ isOpen }) => (isOpen ? "#E33140" : "var( --bgLight)")};
    @media (min-width: 768px) {
        background-color: var( --bgLight);
    }

`
const NavLogo = styled.a`
    padding: 1rem 0;
    color: #DD143C;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`
const Hamburger = styled.div`
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
    box-shadow: 0 2px 4px 0 rgb(136 144 195 / 20%), 0 5px 15px 0 rgb(37 44 97 / 15%);
    div {
        position: relative;
        width:12px;
        height: 14px;
    }
    span {
        position: absolute;
        height: 2px;
        width: 12px;
        background-color: var(--hamburgerSpanColor);
        background-color: ${({ isOpen }) => (isOpen ? "white" : "var(--hamburgerSpanColor)")};
        margin-bottom: 2px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
    .first {
        top: ${({ isOpen }) => (isOpen ? "8px" : "0")};
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
        transition: top 0s 0s,transform .2s ease-in;
    }
    .center {
        top:  6px;
        display:${({ isOpen }) => (isOpen ? "none" : "block")};
    }
    .second{
        top: ${({ isOpen }) => (isOpen ? "8px" : "12px")};
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
        transition: top 0s 0s,transform .2s ease-in;
    }
`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 35%;
    height: 100%;
    top: 0;
    right: 0;
    padding-right: 40px;

    
    @media (max-width: 768px) {
        overflow: hidden; 
        background-color:${({ isOpen }) => (isOpen ? "#E33140" : "crimson")};
        color: white;
        position: absolute;
        top: 5rem; 
        padding-bottom: 1rem;
        padding-top: 0rem;
        z-index: 1000;
        flex-direction: column;
        transform: ${({ isOpen }) => (isOpen ? "translate(0)" : "translateX(100vw)")};
        transition: all 0.2s ease-in;
        transition: transform 0.2s ease-in;
        width: 100vw;
        height: 100vh;
        opacity: ${({ isOpen }) => (isOpen ? "1" : "1")};
        
        
    }
    @media (min-width: 768px) {
        width: 50%;
        background-color: white;
    }
    @media (min-width: 1025px) {
        width: 30%;
    }
`
const MenuLink = styled.a`
    @media (max-width: 768px) {
        padding: 1rem 2rem;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        display:${({ isOpen }) => (isOpen ? "flex" : "none")};
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in;
        transition-delay: 0.4s;
        font-size: 0.9rem;
        border-bottom: 2px solid rgba(0,0,0, 0.1);
    }
    
    &:hover {
        
        .s-name{
            color: white;
            @media (min-width: 768px) {
                color: crimson;
                border-bottom: 2px solid crimson;
            }
        }
        .number{
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
    .number{
        color: #222;
        opacity: 0.4;
        font-size:3rem;
        font-weight:bolder;
        margin-top: ${({ isOpen }) => (isOpen ? "0" : "-100vw")};
        transition-delay: 0.2s;
        @media (min-width: 768px) {
            font-size:1rem;
        }
    }
    .s-name{
        font-size:3.1rem;
        color: rgba(255,255,255, 0.5);
        margin-top: ${({ isOpen, index }) => (isOpen ? "0" : "100vw ")};
        transition-delay: 0.25s;
        @media (min-width: 768px) {
            font-size:1rem;
            color: black;
        }
        
    }
    @media (max-width: 768px) {
        flex-direction: column;
        color: white;
        width: 100%;
        margin: 2px 0px;
    }
`

const MenuTitleBody  = styled.div`
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
`
const nav = () => {

    const [isOpen, setIsOpen] =useState(false);
    const onClick = () => setIsOpen(!isOpen);
    // const [hideNav, setHideNav] = useState(false)

    //handing the navbar scrolling animation
    // useEffect(
    //     ()=>{
    //         function handScroll(){
    //             if(window.scroll > 1260){
    //                 setHideNav(false);
    //             }else{
    //                 setHideNav(true);
    //             }
    //             console.log("scrolling " + window.scrollY)
    //             console.log("animate " + hideNav)
    //         }
    //         window.addEventListener("scroll", handScroll, false);

    //         return () => {
    //             window.removeEventListener("scroll", handScroll, false)
    //         }
    //     }
    // )
    return (
            <Nav 
            isOpen={isOpen}
            // initial={{ opacity: 1 }}
            // animate ={{opacity: hideNav ? 0: 1}}
            // transition={{ opacity: { duration: 0.2 } }}
            >
        <NavLogo>
            <Image 
            src='/assets/imgs/logo.svg' 
            alt="Picture of the author"
            width={45}
            height={45}
        />
        </NavLogo>
        <Hamburger onClick={onClick} isOpen={ isOpen}>
            <div>
                <span className="first" isOpen = { isOpen }/>
                <span className="center" isOpen = { isOpen }/>
                <span className="second" isOpen = { isOpen }/>
            </div>
        </Hamburger>
        <Menu isOpen ={ isOpen}>
            <MenuTitleBody>
            <MenuLink href="#about" isOpen ={ isOpen} index = {1} onClick={onClick}>
                <span className="number" isOpen ={ isOpen}>01.</span>
                <span className="s-name">About</span>
            </MenuLink>
            <MenuLink href="#projects" isOpen ={ isOpen} index = {1} onClick={onClick}>
                <span className="number">02.</span>
                <span className="s-name">Projects</span>
            </MenuLink>
            <MenuLink href="#contact" isOpen ={ isOpen} index = {1} onClick={onClick}>
                <span className="number">03.</span>
                <span className="s-name">Contact</span>
            </MenuLink>
            </MenuTitleBody>
            
        </Menu>
        </Nav>
    )
}

export default nav
