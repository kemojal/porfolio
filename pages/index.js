import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkMode';
import { GlobalStyles } from "../styles/global";
import { lightTheme, darkTheme } from '../styles/theme';

import Nav from '../components/Nav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import MyProjects from '../components/sections/MyProjects';
import MoreProjects from '../components/sections/MoreProjects';
import Contact from '../components/sections/Contact';
import Services from '../components/sections/Services';
import Socials from '../components/Socials';
import Settings from '../components/Settings';

import Mouse from '../components/Mouse';
import Wave from '../components/svg/Wave';
// import BgPatternsMobile from '../components/svg/BgPatternsMobile.js';
// import BgPatternsDesktop from '../components/svg/BgPatternsDesktop.js';

const Combined = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  padding-bottom: 20px;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    /* background-color: #39fee208; */
    backdrop-filter: blur(20px);
    width: 100%;
    max-width: 1200px;

    height: 900px;
    /* background-color: red; */
  }
  @media (max-width: 767px) {
    /* overflow: hidden; */
    
    
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  opacity: ${({ fade }) => (fade ? '0.5' : '1')};
`;
export default function Home() {
  const [fade, setFade] = useState(false);

  //check device type
  //const [width, setWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState();

  //toggle dark/ light mode
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // const themeMode = darkTheme;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    const touchstart = () => {
      setFade(true);
    };
    const touchend = () => {
      setFade(false);
    };
    document.body.addEventListener('touchstart', touchstart, false);
    document.body.addEventListener('touchstart', touchend, false);

    return () => {
      document.body.removeEventListener('touchstart', touchstart, false);
      document.body.removeEventListener('touchend', touchend, false);
    };

    //check device resize event
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <AppContainer fade={fade}>
        <Head>
          <title>Kemo Jallow</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='description' content='I am kemo' />
          <meta name="theme-color" 
      content="#ecd96f" 
      media="(prefers-color-scheme: light)"/>
<meta name="theme-color" 
      content="#fd4370" 
      media="(prefers-color-scheme: dark)"></meta>
          <link rel='icon' href='/logo.ico' />
        </Head>

        <main className={styles.main}>
          <Combined>
            {/* {isMobile ? <BgPatternsMobile /> : <BgPatternsDesktop />} */}

            <Hero />
            <About theme={theme}/>
          </Combined>
          <MyProjects />
          <MoreProjects />
          <Services/>
          <Contact />
          <Socials />
          <Settings theme={theme} toggleTheme={themeToggler} />
          <Nav />
        </main>
        <Mouse />
        <footer className={styles.footer}>
          <p className={styles.footerText}>©2021 Kemo Jallow. All rights reserved
          </p>
          <div className={styles.footerNav}>
            <div>About</div>
            <div>Project</div>
            <div>Contact</div>
          </div>
          {/* <Wave /> */}
        </footer>
      </AppContainer>
    </ThemeProvider>
  );
}
