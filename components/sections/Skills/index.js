import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Marquee } from '../../Marquee'
import BehanceIcon from '../../icons/BehanceIcon';
import BootstrapIcon from '../../icons/BootstrapIcon';
import ChromeIcon from '../../icons/ChromeIcon';
import CssIcon from '../../icons/CssIcon';
import DribbleIcon from '../../icons/DribbleIcon';
import FirebaseIcon from '../../icons/FirebaseIcon';
import Github from '../../icons/Github';
import FlutterIcon from '../../icons/FlutterIcon';
import GitIcon from '../../icons/GitIcon';
import JsIcon from '../../icons/JsIcon';
import MongoDBIcon from '../../icons/MongoDBIcon';
import NodejsIcon from '../../icons/NodeIcon';
import ReactIcon from '../../icons/ReactIcon';
import ReduxIcon from '../../icons/ReduxIcon';
import SassIcon from '../../icons/SassIcon';
import SketchIcon from '../../icons/SketchIcon';
import StackIcon from '../../icons/StackIcon';
import TailwindIcon from '../../icons/TailwindIcon';
import Vscode from '../../icons/Vscode';
import VueIcon from '../../icons/VueIcon';
import SectionTitle from '../../SectionTitle';

const SkillContainer = styled.div`
  padding-bottom: 4rem;
  padding-top: 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.bgService}; */
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    /* max-width: 1100px; */
  }
  .tool-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
    width: 100%;
    flex-wrap: wrap;
    position: relative;
    
  .tool-gradient-overlay {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#121212),
      color-stop(18%, rgba(18, 18, 18, 0)),
      color-stop(83%, rgba(18, 18, 18, 0)),
      to(#121212)
    );
    background-image: linear-gradient(
      180deg,
      #121212,
      rgba(18, 18, 18, 0) 18%,
      rgba(18, 18, 18, 0) 83%,
      #121212
    );
  }
  svg {
    transform: scale(1.5);
    margin: 50px 60px;
    fill: #ea4766 !important;
    background-color: ${({ theme }) => theme.bgServiceIcons};
    box-shadow: ${({ theme }) => theme.btnBoxShadow};
    border-radius: 50%;
  }
  @media screen and (max-width: 776px) {
    svg {
      transform: scale(1.5);
      margin: 30px 30px;
    }
  }
`;

const Skills = () => {



const iconComponents = [
  { component: BehanceIcon },
  { component: BootstrapIcon },
  { component: ChromeIcon },
  { component: CssIcon },
  { component: DribbleIcon },
  { component: FirebaseIcon },
  { component: Github },
  { component: FlutterIcon },
  { component: GitIcon },
  { component: JsIcon },
  { component: MongoDBIcon },
  { component: NodejsIcon },
  { component: ReactIcon },
  { component: ReduxIcon },
  { component: SassIcon },
  { component: SketchIcon },
  { component: StackIcon },
  { component: TailwindIcon },
  { component: Vscode },
  { component: VueIcon },
];



  /* const size = 100; */
  /* const { scrollYProgress } = useViewportScroll(); */
  /* const x = useTransform(scrollYProgress, [0, 1], [500, 0]); */
  /* const rx = useTransform(scrollYProgress, [0, 1], [360, 0]); */
  return (
    <SkillContainer>
      <div className="container">
        <SectionTitle title={`Skills & Tools`} />
        <div className="tool-container">
        <Marquee list={iconComponents} time={80} />
        </div>
      </div>
    </SkillContainer>
  );
};

export default Skills;
