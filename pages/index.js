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

export default function Home() {
  
  return (
    <div className={styles.container}>
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

      <footer className={styles.footer}>
      ©2021 Kemo Jallow{' '}
      </footer> 
    </div>
  )
}
