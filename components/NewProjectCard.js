import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useIntersection } from 'react-use';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  margin: 10px 0;
  width: 95%;
  position: relative;
  max-width: 800px;
  background: orange;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    max-width: 680px;
    height: 400px;
    
  }

  @media (max-width: 768px) {
    /* min-height: 500px; */
    height: auto;
    margin: 180px auto;
    padding-bottom: 0;



    padding: 10px;
    padding-bottom: 20px;
    padding-top: 200px;
    /* &:nth-child(1) { 
      margin-top: 180px;
    } */
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
    margin: 10px 0;
  }
   &:nth-child(1) { 
      margin-top: 180px;
      background: blue;
    } 
`;

const SwiperSlide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: black;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SliderImg = styled.div`
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  /* background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); */
  /* box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2); */
  box-shadow: 4px 13px 30px 1px rgb(253 170 170 / 17%);
  border-radius: 20px;
  transform: translateX(-80px);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 1;
    border-radius: 20px;
    transition: all 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); */
    border-radius: 20px;
    opacity: 0.2;
  }
  @media screen and (max-width: 768px) {
    transform: translateY(-50%);
    width: 90%;
    background-color: white;
  }
  @media screen and (max-width: 576px) {
    width: 95%;
    position: absolute;
    top: -120%;
    height: auto;
  }
  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 270px;
  }
`;
const SliderContent = styled.div`
/* background: orange; */
transform: translateY(-50%);
.blog-slider__title {
    padding: 10px 0;
}
.blog-slider__title {
    padding: 10px 0;
}
a{
  background: #ff000047;
  color: red;
  padding: 5px 15px;
    font-size: 12px;
    border-radius: 15px;
}`;

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
      <SwiperSlide>
        <SliderImg>
          <img src={imgScr} alt='Picture of the author' />
        </SliderImg>
        <SliderContent>
          <span className='blog-slider__code'>26 December 2019</span>
          <div className='blog-slider__title'>{title}</div>
          <div className='blog-slider__text'>
            {discription}
          </div>
          <a href='githubLink' className='blog-slider__button'>
            READ MORE
          </a>
        </SliderContent>
      </SwiperSlide>
    </Card>
  );
};
export default ProjectCard;
