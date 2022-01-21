import * as React from 'react';

function DoodleBG(props) {
  return (
    <svg
      viewBox='0 0 1000 1000'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      style={{
        width: '700px',
        height: '700px',
        position: 'absolute',
      }}
    >
      <defs>
        <filter id='prefix__a'>
          <feTurbulence result='TURBULENCE' baseFrequency={0.073} seed={1} />
          <feDisplacementMap in='SourceGraphic' in2='TURBULENCE' scale={20} />
        </filter>
        <filter id='prefix__b'>
          <feOffset dx={30} result='OFFSET-1' />
        </filter>
        <filter id='prefix__d'>
          <feOffset dx={20} result='OFFSET-2' />
        </filter>
        <filter id='prefix__e'>
          <feOffset dy={50} result='OFFSET-3' />
        </filter>
        <mask id='prefix__c'>
          <path fill='#fff' d='M0 0h1000v1000H0z' />
          <circle cx={770} cy={498} r={9} filter='url(#prefix__a)' />
          <circle cx={391} cy={485} r={5} filter='url(#prefix__a)' />
          <circle cx={350} cy={718} r={9} filter='url(#prefix__a)' />
          <circle cx={208} cy={670} r={11} filter='url(#prefix__a)' />
          <g filter='url(#prefix__b)' mask='url(#prefix__c)'>
            <path
              fill='none'
              strokeWidth={11}
              stroke='#000'
              d='M840.5 667.5q-118.157 170.688-323 137'
              filter='url(#prefix__a)'
            />
          </g>
          <g
            filter='url(#prefix__d)'
            mask='url(#prefix__c)'
            transform='scale(.6)'
          >
            <path
              fill='none'
              strokeWidth={7}
              stroke='#000'
              d='M840.5 667.5q-121.28 163.323-323 137'
              filter='url(#prefix__a)'
            />
          </g>
          <g filter='url(#prefix__e)'>
            <path
              fill='none'
              strokeWidth={9}
              stroke='#000'
              d='M254.5 637Q157.986 485.824 231 322'
              filter='url(#prefix__a)'
            />
          </g>
          <g filter='url(#prefix__e)'>
            <path
              fill='none'
              strokeWidth={6}
              stroke='#000'
              d='M499.5 145.5q218.944.05 346.5 178'
              filter='url(#prefix__a)'
            />
          </g>
        </mask>
      </defs>
      <g mask='url(#prefix__c)'>
        <path
          filter='url(#prefix__a)'
          fill='#ffffff10'
          d='M840.5 667.5Q693 835 517.5 804.5T254.5 637Q167 500 231 322t268.5-176.5Q704 147 846 323.5t-5.5 344z'
        />
      </g>
    </svg>
  );
}

export default DoodleBG;
