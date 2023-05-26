import styled from "styled-components";
import { motion } from "framer-motion";

const ContactContainer = styled(motion.section)`
  width: 100vw;
  color: white;
  padding-bottom: 8rem;

  background-color: ${({ theme }) => theme.bgContactMe};
  /* background-color: orange; */
  border: 1px solid #0000000F;
  margin-bottom: 5rem;
  /* border-image: linear-gradient(to right bottom, #260B3C, #a053df);
  border-image-slice: 1;
  border-style: solid;
  box-sizing: content-box;
  border-width: 8px; */
  border-top-right-radius: 10rem;
  border-top-left-radius: 40rem;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 40rem;

  @media (min-width: 1025px) {
    padding-bottom: 10rem;
  }
`;
const TextContainer = styled(motion.div)`
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.08rem;
    text-align: center;
    padding: 2rem;
    /* span{
      border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
      background: white;
      color: ${({ theme }) => theme.crimson};
      padding: 0.25rem 0.5rem;
    } */
    @media (min-width: 768px) {
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: 0.08rem;
      text-align: left;
      padding: 0;
    }
  }
  .highlight {
    border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
      /* background: #FE3161; */
      background: white;
      color: ${({ theme }) => theme.crimson};
      /* color: rgb(0, 76, 63); */
      padding: 0.25rem 0.5rem;
  }
  .wrapper{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    place-items: center;
  }
  ul{
    display: grid;
  }
  .service-list{
    display: grid;
    grid-template-columns: 1fr;
    place-items: start;
    /* background-color: #FFFFFF;
    padding: 2rem;
    border-radius: 1rem; */
  }
  li{
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    justify-content: center;
  }
  .service-card{
    padding: 24px;
    border: 1px solid #00000020;
    border-radius: 12px;
    background-color: #ffffff10;
    border-top-right-radius: 10rem;
  border-top-left-radius: 40rem;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 40rem;
  border: 1px solid orange;
  }
  p {
    font-size: 1.2rem;
    text-align: left;
    padding: 0.1rem 2rem;
    /* color: white; */
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    line-height: 2.2rem;
  }
  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
      padding-top: 2rem;
      font-size: 1rem;
      font-weight: 200;
     
    }
    .wrapper{
      max-width: 800px;
      /* grid-template-columns: repeat(2, 1fr); */
    }
    ul{
      grid-template-columns: repeat(2, 1fr);
    }
  }


  }
  &:before {
    content: '';
    position: absolute;
    width: 382px;
    height: 382px;
    bottom: -20%;
    right: 30%;
    z-index: 0;
    background: url('/assets/imgs/sliced-cirlce.svg') no-repeat;
    background-size: 30% 30%;
    background-position: center center;
  }
`;

const ActionBTContainer = styled(motion.div)`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SeeMyWorkBtn = styled(motion.a)`
  height: 45px;
  position: relative;
  margin-top: 2.2em;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* z-index: 50; */
  box-shadow: ${({ theme }) => theme.btnBoxShadow};
  /* font-weight: 900; */
  width: 50vw;
  justify-content: flex-start;
  padding-left: 25px;
  transform: translateX(5vw);
  border-radius: 30px;
  color: ${({ theme }) => theme.btnTextColor};
  background-color: #fd4370;
  background: white;
  color: rgb(0, 76, 63);
  /* background-image: linear-gradient(-90deg,#ff004d,#fd4370);  */
  /* color: var(--lightTextTitleColor); */
  /* color: #0E182B;; */
  will-change: transform;
  transition: transform 450ms;
  transition: all ease-in-out;
  z-index: 1000;
  p {
    z-index: 10;
    /* color: #0E182B; */
  }
  &:hover {
    transition: transform 125ms;
    transform: translateY(-10px) scale(1.1, 1.1);
    p {
      color: var(white);
    }
  }
  @media (min-width: 320px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    margin-left: 0em;
    width: 181px;
    transform: translateX(2vw);
  }
`;
const Circle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid var(--crimson);
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgb(1 76 62 / 13%);
  backdrop-filter: blur(20px);
  /* color: #0E182B; */
  position: absolute;
  right: 5px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${SeeMyWorkBtn}:hover & {
    /* background-color: var(--crimson); */
    background-color: #fd437070;
    background-color: #fd4370;
    /* width: 100%; */
  }
`;

export {
  ContactContainer,
  TextContainer,
  ActionBTContainer,
  SeeMyWorkBtn,
  Circle,
};
