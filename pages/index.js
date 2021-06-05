import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import MyProjects from '../components/sections/MyProjects';
import MoreProjects from '../components/sections/MoreProjects';
import Contact from '../components/sections/Contact';
import Services from '../components/sections/Services';
import Socials from '../components/Socials';
import Mouse from '../components/Mouse';
import styled from 'styled-components';

const Combined = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  opacity:${({ fade }) => (fade ? "0.5" : "1")};
`
export default function Home() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const touchstart = ()=>{
        setFade(true);
    }
    const touchend = ()=>{
      setFade(false);
  }
    document.body.addEventListener('touchstart', touchstart, false);
    document.body.addEventListener('touchstart', touchend, false);
  
    return () => {
      document.body.removeEventListener('touchstart', touchstart, false);
      document.body.removeEventListener('touchend', touchend, false);
    }
  });
  
  return (
    <AppContainer fade ={fade} >
      <Head>
        <title>Kemo Jallow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="I am kemo" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <Combined>
          <Hero/>
          <About/>
        </Combined> 
        <MyProjects/>
        <MoreProjects/>
        {/* <Services/> */}
        <Contact/>
        {/* <Socials/> */}
        <Nav/>
      </main>
      <Mouse/>      <footer className={styles.footer}>
      <p className={styles.footerText}>©2021 Kemo Jallow</p>
      </footer> 
    </AppContainer>
  )
}
