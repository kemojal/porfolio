import * as React from 'react';
import styled from 'styled-components';

const SVGContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 200px;
  overflow: hidden;
`;
const Svg = styled.svg`
  aspect-ratio: 16/9;
  width: 100vw;
  position: absolute;
  bottom: 0;
  fill: #e44351;
  @media (max-width: 500px) {
    aspect-ratio: 16/9;
    height: 700px;
    width: auto;
  }
`;
const PathDesktop = styled.path`
  visibility: visible !important;
  /* d: path(
    'M0 613l30 31.7c30 31.6 90 95 150 104.1 60 9.2 120-35.8 180-51.5 60-15.6 120-2 150 4.9l30 6.8v252H0z'
  ) !important; */
`;
const PathMobile = styled.path`
  visibility: visible !important;
`;
function Wave(props) {
  return (
    <SVGContainer>
      <Svg
        viewBox='0 0 960 540'
        width={960}
        height={540}
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        {...props}
      >
        <PathDesktop
          d='M0 445l22.8 4.2c22.9 4.1 68.5 12.5 114.2 4.5s91.3-32.4 137-47.4 91.3-20.6 137.2-9.1c45.8 11.5 91.8 40.1 137.6 51.6 45.9 11.5 91.5 5.9 137.2 4.4 45.7-1.5 91.3 1.1 137-7.9s91.3-29.6 114.2-40L960 395v146H0z'
          fill='#e44351'
        />
        {/* <PathMobile
        d='M0 613l30 31.7c30 31.6 90 95 150 104.1 60 9.2 120-35.8 180-51.5 60-15.6 120-2 150 4.9l30 6.8v252H0z'
        id='showOnMobile'
        fill='#e44351'
      /> */}
      </Svg>
    </SVGContainer>
  );
}

export default Wave;
