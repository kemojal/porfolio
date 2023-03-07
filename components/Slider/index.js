import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Slide } from './slide';

const HeroSlider = ({ height, autoplay, controller, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(controller.initialSlide);

  useEffect(() => {
    let intervalId;

    const handleAutoplay = () => {
      intervalId = setInterval(() => {
        setCurrentSlide(prev => (prev === slides.length ? 1 : prev + 1));
      }, controller.slidingDelay + controller.slidingDuration);
    };

    if (autoplay) {
      handleAutoplay();
    }

    return () => clearInterval(intervalId);
  }, [autoplay, controller.slidingDelay, controller.slidingDuration, slides.length]);

  const handleSlideClick = nextSlide => {
    if (currentSlide === nextSlide) return;

    controller.onBeforeSliding(currentSlide, nextSlide);

    setTimeout(() => {
      setCurrentSlide(nextSlide);
      controller.onSliding(nextSlide);
    }, controller.slidingDelay);

    setTimeout(() => {
      controller.onAfterSliding(nextSlide);
    }, controller.slidingDelay + controller.slidingDuration);
  };

  return (
    <SliderContainer height={height}>
      <SliderWrapper transform={`translateX(-${(currentSlide - 1) * 100}%)`}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            className={currentSlide === index + 1 ? 'active' : ''}
            title={slide.title}
            description={slide.description}
            coverImage={slide.coverImage}
            url={slide.url}
            isActive={currentSlide === index + 1}
            onClick={() => handleSlideClick(index + 1)}
          />
        ))}
      </SliderWrapper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: ${props => props.height};
  border-bottom: 1px solid #0000000d;
`;

const SliderWrapper = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${props => props.transform};
`;

export default HeroSlider;
