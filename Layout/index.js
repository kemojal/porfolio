import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import styles from '../styles/Home.module.css';
import { GlobalStyles } from '../styles/global';
import { useDarkMode } from '../styles/useDarkMode';
import { lightTheme, darkTheme } from '../styles/theme';

import Navbar from '../components/Nav';
import Settings from '../components/Settings';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  opacity: ${({ fade }) => (fade ? '0.5' : '1')};
`;
export default function Layout({children}) {
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
            {children}
          {/* {isMobile ? <BgPatternsMobile /> : <BgPatternsDesktop />} */}
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
            ©2023 Kemo Jallow. All rights reserved
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
