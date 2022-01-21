import * as React from "react"
import styled, { keyframes } from 'styled-components';

const pathAnim = keyframes`
    10% {
      stroke="orange"
    
    }
    25% {
      stroke="blue"
        
    }
    50% {
      stroke="green"
        
    }
    100% {
      stroke="brown"
    }
`;
const SVGWrapper = styled.div`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 svg{
   width: 100vw; 
   height: 100%; 
 }
 g{
   animation-name: ${pathAnim};
  animation-duration: 6s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
 }
`
function BgPatternsDesktop(props) {
  return (
    <SVGWrapper>
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1920}
      height={1080}
      preserveAspectRatio="none"
      {...props}
    >
      <g
        mask='url("#SvgjsMask1042")'
        fill="none"
        stroke="rgba(194, 51, 51, 0.08)"
        stroke="rgba(255, 255, 255, 0.04)"
        strokeWidth={2}
      >
        <path d="M154.29 0C220.24 22.29 210.25 91.27 270 91.27c67.04 0 62.83-65.9 137.87-91.27C467.83-20.27 473.93 0 540 0h540c64.28 0 99.42-42.96 128.57 0 62.46 92.04 3.15 151.6 54.64 270 19.23 44.22 44.15 55.23 86.79 55.23 39.32 0 41.52-24.02 77.14-55.23 99.38-87.08 92.35-95.63 192.86-181.34 57.8-49.29 54.9-66.05 123.75-88.66 66.15-21.72 73.13 0 146.25 0 113.22 0 116.25-10.8 226.45 0 24.8 2.43 39.78 3.11 43.55 26.47 18.01 111.64 0 121.77 0 243.53v270c0 96.92 56.34 157.4 0 193.85-78.66 50.9-137-31.56-270-19.14-137 12.8-134.19 38.56-270 69.58-72.82 16.63-147.27 8-147.27 25.71 0 18.29 89.06-.18 147.27 46.29 110.91 88.53 190.98 155.89 190.98 223.71 0 44.03-95.49 0-190.98 0-81.56 0-108.35 43.36-163.12 0-80.23-63.52-63.03-213.75-106.88-213.75-40.87 0 7.34 158.41-62.56 213.75-65.1 51.54-103.72 0-207.44 0H270c-135 0-202.5 67.5-270 0s0-135 0-270V540 270C0 135-49.09 85.91 0 0c28.05-49.09 85.24-23.34 154.29 0" />
        <path d="M540 172.5c-29.62 0-58.5 50.26-58.5 97.5 0 40.51 28.93 78 58.5 78 29.94 0 60.52-37.42 60.52-78 0-47.17-30.63-97.5-60.52-97.5M810 738c-48.84 0-85.71 29.13-85.71 72 0 62.36 29.64 138.46 85.71 138.46 79.89 0 186.21-81.9 186.21-138.46 0-48.67-99.09-72-186.21-72" />
        <path d="M33.75 0C155.13 83.77 152.84 91.99 270 186.34c50.47 40.65 56.8 34.95 99 83.66 92.8 107.12 84.57 228 171 228 87.52 0 174.04-109.22 176.9-228C720.04 139.78 526.36 74.36 552 0c20.91-60.64 129 0 258 0 120.94 0 140.46-28.17 241.88 0 33.58 9.33 15.36 37.05 28.12 75 32.64 97.05 1.31 120.69 62.68 195 73.63 89.15 105.46 131.93 207.32 131.93 93.95 0 95.42-61.98 184.29-131.93 46.13-36.31 39.21-44.74 85.71-80.6C1748.54 90.26 1751.67 93.09 1884.38 0c2.29-1.61 2.81 0 5.62 0 4.36 0 4.97-2.2 8.71 0 131.26 77.21 165.48 59.82 261.29 158.82 34.84 36 0 55.59 0 111.18v270c0 53.65 38.21 96.64 0 107.31-96.79 27.05-136.25-39.26-270-31.87-136.25 7.53-134.41 33.71-270 61.7-134.41 27.75-134.22 44.23-270 49.78-134.22 5.49-135.84-8.08-270-27.69C944.16 679.38 930.76 619.1 810 648c-110.67 26.49-120.29 64.03-192.86 162-62.43 84.28-23.07 112.61-77.14 202.5-27.13 45.11-35.24 54.99-85.26 67.5-84.98 21.24-92.37 0-184.74 0-135 0-202.5 67.5-270 0s0-135 0-270c0-102-23.07-111.71 0-204 10.68-42.71 67.5-31.79 67.5-66 0-36.87-55.88-29.68-67.5-76.15-22.13-88.53 0-96.93 0-193.85C0 135-15 120 0 0c1.88-15 20.13-9.4 33.75 0" />
        <path d="M846.82 1080c0-53.51 131.18-190 233.18-190 77.15 0 125.12 128.71 125.12 190 0 33.71-62.56 0-125.12 0-116.59 0-233.18 41.49-233.18 0M1597.5 1080c0-9.71 10.66-30.86 22.5-30.86 12.58 0 26.34 21.5 26.34 30.86 0 6.07-13.17 0-26.34 0-11.25 0-22.5 5.72-22.5 0M0 231.43c52.95 0 135 23.53 135 38.57 0 14.63-76.41 20.77-135 20.77-8.91 0 0-10.39 0-20.77 0-19.28-14.55-38.57 0-38.57M810 211.3C757.36 211.3 702 72.61 702 0c0-33.04 54 0 108 0 50.63 0 101.25-31.88 101.25 0 0 73.77-49.27 211.3-101.25 211.3M220.91 540c53.43-81.61 16.91-196.36 49.09-196.36 33.9 0 55.77 94.14 83.08 196.36 35 130.96 68.12 154.82 41.54 270-14.96 64.82-62.31 45-124.62 90-124.62 90-122.77 95.7-249.23 180-8.54 5.7-20.03 9.64-20.77 0-9.64-125.36 0-135 0-270 0-27-16.43-33.92 0-54 94.02-114.92 139.34-91.43 220.91-216M751.3 540c0-53.98 10.31-135 58.7-135 77.39 0 192.86 93.03 192.86 135 0 34.53-97.35 18-192.86 18-30.27 0-58.7 4.52-58.7-18M1104.55 540c0-35.68 124.61-24.44 245.45-61.36 136.89-41.83 151.17-113.69 270-96.14 88.86 13.13 145.38 102.11 145.38 157.5 0 38.36-72.6 15.44-145.38 30-134.91 26.98-137.27 60.81-270 53.08-124.99-7.27-245.45-46.54-245.45-83.08M2025 540c0-55.46 96.83-162 135-162 29.33 0 0 81 0 162 0 10.38 8.91 20.77 0 20.77-58.59 0-135 15.15-135-20.77" />
        <path d="M1000.23 1080c0-18.31 44.88-65 79.77-65 26.39 0 42.8 44.03 42.8 65 0 11.53-21.4 0-42.8 0-39.89 0-79.77 14.19-79.77 0" />
      </g>
      <defs>
        <mask id="prefix__SvgjsMask1042">
          <path fill="#fff" d="M0 0h1920v1080H0z" />
        </mask>
      </defs>
    </svg>
      </SVGWrapper>
  )
}

export default BgPatternsDesktop;