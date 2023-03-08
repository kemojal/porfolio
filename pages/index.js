import React, { useState, useEffect } from 'react';

import { useDarkMode } from '../styles/useDarkMode';
import { lightTheme, darkTheme } from '../styles/theme';


import Hero from '../components/sections/Hero';
import Profile from '../components/sections/Profile';
import MyProjects from '../components/sections/MyProjects';
// import MoreProjects from '../components/sections/MoreProjects';
import Contact from '../components/sections/Contact';
import Services from '../components/sections/Services';
import Socials from '../components/Socials';
import styled from 'styled-components';

import Skills from '../components/sections/Skills';

import Layout from './../Layout'

const Combined = styled.div`
  display: flex;
  flex-direction: column;
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


  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  

  return (
    <Layout>
          <Combined>
            <Hero />
            <Profile theme={theme} />
          </Combined>

          <MyProjects />
          {/* <MoreProjects /> */}
          <Services />
          <Skills />
          <Contact />
          <Socials />
    </Layout>
  );
}
