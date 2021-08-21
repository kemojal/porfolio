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
`;
function Wave(props) {
  return (
    <Svg
      viewBox='0 0 960 540'
      width={960}
      height={540}
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      {...props}
    >
      <path
        d='M0 445l22.8 4.2c22.9 4.1 68.5 12.5 114.2 4.5s91.3-32.4 137-47.4 91.3-20.6 137.2-9.1c45.8 11.5 91.8 40.1 137.6 51.6 45.9 11.5 91.5 5.9 137.2 4.4 45.7-1.5 91.3 1.1 137-7.9s91.3-29.6 114.2-40L960 395v146H0z'
        fill='#e44351'
      />
    </Svg>
  );
}

export default Wave;
