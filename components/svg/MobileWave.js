import * as React from 'react';
import styled from 'styled-components';

const SvgContainter = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: orange;
`;
const Svg = styled.svg`
  aspect-ratio: 16/9;
  width: 100vw;
  position: absolute;
  bottom: 0;
  fill: #e44351;
  @media (max-width: 500px) {
    aspect-ratio: 9/16;
    height: 1000px;
    width: auto;
  }
`;
const PathDesktop = styled.path`
  visibility: visible !important;
  d: path(
    'M0 613l30 31.7c30 31.6 90 95 150 104.1 60 9.2 120-35.8 180-51.5 60-15.6 120-2 150 4.9l30 6.8v252H0z'
  ) !important;
`;
const PathMobile = styled.path`
  visibility: visible !important;
`;
function MobileWave(props) {
  return (
    <svg
      viewBox='0 0 540 960'
      width={540}
      height={960}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0 613l30 31.7c30 31.6 90 95 150 104.1 60 9.2 120-35.8 180-51.5 60-15.6 120-2 150 4.9l30 6.8v252H0z'
        fill='#06F'
      />
    </svg>
  );
}

export default MobileWave;
