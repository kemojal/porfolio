import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkMode';
import { GlobalStyles } from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';

import Navbar from '../components/Nav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import MyProjects from '../components/sections/MyProjects';
import MoreProjects from '../components/sections/MoreProjects';
import Contact from '../components/sections/Contact';
import Services from '../components/sections/Services';
import Socials from '../components/Socials';
import Settings from '../components/Settings';

import Skills from '../components/sections/Skills';

const Combined = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  padding-bottom: 20px;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    backdrop-filter: blur(20px);
    width: 100%;
    max-width: 1200px;
    height: 900px;
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

  const [scrollPRounded, setScrollPRounded] = useState();

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

    //scroll progress bar
    window.onscroll = () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      setScrollPRounded(scrollPercentRounded);
    };
  }, []);

  let isMobile = width <= 768;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContainer fade={fade}>
        <Head>
          <title>Kemo Jallow - A Full Stack Developer</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="I’m a Taiwan-based Software engineer who specializes in building web
  and mobile apps (and occasionally designing) exceptional digital
    experiences. Currently, working at home and social distancing."
          />

          <meta
            content="Kemo Jallow - A Full Stack Developer"
            property="og:title"
          />
          <meta name="og:url" content="https://kemojallow-one.vercel.app/" />
          <meta
            content="description' content='I’m a Taiwan-based Software engineer who specializes in building web
  and mobile apps (and occasionally designing) exceptional digital
    experiences. Currently, working at home and social distancing."
          ></meta>
          <meta
            name="theme-color"
            content="#ecd96f"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#fd4370"
            media="(prefers-color-scheme: dark)"
          ></meta>
          <link rel="icon" href="/logo.ico" />
        </Head>

        <main className={styles.main}>
          {/* {isMobile ? <BgPatternsMobile /> : <BgPatternsDesktop />} */}
          <Combined>
            <Hero />
            <About theme={theme} />
          </Combined>

          <MyProjects />
          <MoreProjects />
          <Services />
          <Skills />
          <Contact />
          <Socials />
          <Settings theme={theme} toggleTheme={themeToggler} />
          <Navbar />
          {/* <div
        className="pb"
        style={{
          background: `linear-gradient(to right, #498 ${scrollPRounded}%, #eee ${scrollPRounded}%)`
        }}
      ></div> */}
        </main>
        {/* <Mouse /> */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            ©2021 Kemo Jallow. All rights reserved
          </p>
          <div className={styles.footerNav}>
            <div>About</div>
            <div>Project</div>
            <div>Contact</div>
          </div>
        </footer>
      </AppContainer>
    </ThemeProvider>
  );
}
