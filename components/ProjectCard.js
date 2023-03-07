import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  margin: 10px 0;
  position: relative;
  padding: 25px;
  height: auto;
  width: 30%;
  margin: 1rem;
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover{
    height: auto;
    background-color: #e4e4e4;
    .proj__discription{
      color: black;
    }
    .proj__title {
      background-color: #00000010;
      color: white;
    }

  }

  @media (max-width: 992px) {
    max-width: 680px;
    height: 400px;
    width: 95%;
    margin-right: 0px;
    border-radius: 1rem;
    
  }

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 0;
    padding: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 5px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
    margin: 10px 0;
  }
   
  
`;

const PreviewImg = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 300px;
  /* background: white; */
  box-shadow: 4px 13px 30px 1px rgb(253 170 170 / 17%);
  border-radius: 20px;
  overflow: hidden;

  &:after {
    content: "";
    left: 0;
    right: 0;
    bottom: 10px;
    border-bottom-left-radius: 250%;
    border-bottom-right-radius: 250%;
    width: 300%;
    height: 75%;
    -webkit-transform: translate(-10%,30%);
    -ms-transform: translate(-10%,30%);
    transform: translate(-10%,30%);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    background-image: linear-gradient(
180deg
,hsla(0,0%,100%,0) 1%,#fff 37%);
    position: absolute;
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 1;
    border-radius: 0px;
    transition: all 0.3s;
  }
  
  @media screen and (max-width: 768px) {
    width: 90%;
    /* background-color: brown; */
  }
  @media screen and (max-width: 576px) {
    width: 95%;
    position: relative;
    height: auto;
  }
  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 270px;
  }
`;
const SliderContent = styled.div`
padding-top: 20px;
/* background: orange; */
.proj__title {
    padding: 10px 0;
}
.title{
  
}
.sub-title{
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: black;
  font-size: 2rem;
  line-height: 1.6;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: left;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.text};
    background: none;
  -webkit-background-clip: none;
  -webkit-text-fill-color: unset;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 786px) {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 0.8rem;
  }
}
.proj__title {
    background: #FFFFFF10;
    color: ${({ theme }) => theme.text};
  -webkit-background-clip: inherit;
  -webkit-text-fill-color: inherit;
    position: relative;
    font-size: 1.2rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    margin: 0px 0;
    margin-right: 1rem;

    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: .25rem;
    display: inline-block;
    color: ${({ theme }) => theme.text};
}
.proj__discription{
  color: var(--lightNormalTextTitleColor);;
  padding: 0px 0;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 786px) {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.emoji{
    font-size: 20px;
  }
a{
  height: 38px;
  width: 141px;
  padding: 15px 15px;
    font-size: 14px;
    border-radius: 15px;
    position: relative;
    display: flex;
    align-items: center;

    /* box-shadow: 0 0 0 5px #00000010, 0 0 0 10px #00000005, 0 0 0 20px #00000001; */
    border-radius: 30px;
    color: #ffffff90;
    background-color: #fd4370;
    background-image: linear-gradient(-90deg,#ff004d,#fd4370);
    will-change: transform;
    -webkit-transition: -webkit-transform 450ms;
    -webkit-transition: transform 450ms;
    transition: transform 450ms;
    -webkit-transition: all ease-in-out;
    transition: all ease-in-out;
    z-index: 1000;
    
}`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  /* border-radius: 30px; */
  border-radius: 15px;
  border: 2px solid var(--crimson);
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  /* width: 100%; */
  position: absolute;
  /* left: 0; */
  right: 5px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 20px;
  }
`;

const ProjectCard = ({
  title,
  subtitle,
  discription,
  color,
  imgScr,
  isReverse = false,
  githubLink,
}) => {
  return (
    <Card>
        <PreviewImg>
          <img src={imgScr} alt='Picture of the author' />
        </PreviewImg>
      <SliderContent>
        
        <div  class="title">
          <span className='proj__title'> {title}</span>
          <p class="sub-title">{subtitle}</p>
        </div>
        <div className='proj__discription'>
            {discription}
        </div>
          
          <a href='githubLink' className='proj__button'>
          Read more...
          <Circle>
          <span className='emoji'>👉</span>
          {/* <img src='/assets/imgs/arrow_forward.svg' /> */}
        </Circle>
          </a>
        </SliderContent>

    </Card>
  );
};
export default ProjectCard;
