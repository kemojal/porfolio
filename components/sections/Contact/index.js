import { useRef } from 'react';
import { useIntersection } from 'react-use';
import { ContactContainer, TextContainer, ActionBTContainer, SeeMyWorkBtn, Circle  } from './styles';

const Contact = () => {
  const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: -30,
  };

  const fadeOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };
  const titleIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  const titleOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };

  const animationName =
    intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;
  const animationTitle =
    intersection && intersection.intersectionRatio < 0.2 ? titleOut : titleIn;
  return (
    <ContactContainer id='contact' ref={myRef}>
      <TextContainer>
        <h1 animate={animationTitle}>Let's
          <span>work</span> together</h1>
        <p animate={animationName}>
          Have an app or website idea? I'm available for freelance work. I can help you realize your dream software product.
        </p>
      </TextContainer>
      <ActionBTContainer>
        <SeeMyWorkBtn href='mailto:kemo3855@yahoo.com' animate={animationName}>
          <Circle />
          <p>Let's chat</p>
          
        </SeeMyWorkBtn>
      </ActionBTContainer>
    </ContactContainer>
  );
};

export default Contact;
