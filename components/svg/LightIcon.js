import * as React from "react"

const LightIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    className="block text-white60"
    {...props}
  >
    <path
      d="M13 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-13.895a.684.684 0 0 1-.684-.684V.684a.684.684 0 0 1 1.368 0v2.737a.684.684 0 0 1-.684.684zm6.319 2.576a.726.726 0 0 1 0-1.026l2.053-2.053a.726.726 0 1 1 1.026 1.026l-2.053 2.053a.726.726 0 0 1-1.026 0zM21.895 13a.684.684 0 0 1 .684-.684h2.737a.684.684 0 0 1 0 1.368h-2.737a.684.684 0 0 1-.684-.684zm-2.576 6.319a.726.726 0 0 1 1.026 0l2.053 2.053a.726.726 0 1 1-1.027 1.026l-2.052-2.053a.726.726 0 0 1 0-1.026zM13 21.895a.684.684 0 0 1 .684.684v2.737a.684.684 0 0 1-1.368 0v-2.737a.684.684 0 0 1 .684-.684zm-6.319-2.576a.726.726 0 0 1 0 1.026l-2.053 2.053a.726.726 0 1 1-1.026-1.026l2.053-2.053a.726.726 0 0 1 1.026 0zM4.105 13a.684.684 0 0 1-.684.684H.684a.684.684 0 0 1 0-1.368h2.737a.684.684 0 0 1 .684.684zm2.576-6.319a.726.726 0 0 1-1.026 0L3.602 4.628a.726.726 0 1 1 1.026-1.026l2.053 2.053a.726.726 0 0 1 0 1.026z"
      fill="currentColor"
    />
  </svg>
)

export default LightIcon
// import * as React from 'react';

// function LightIcon(props) {
//   return (
//     <svg
//       width={28}
//       height={28}
//       viewBox='0 0 25 25'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//       {...props}
//     >
//       <path
//         d='M12.406 17.762a5 5 0 100-10 5 5 0 000 10z'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='31.420391082763672px 31.420391082763672px'
//         style={{
//           transformOrigin: '12.4058px 12.7625px',
//         }}
//       />
//       <path
//         d='M12.406 1.763v2'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2px 2px'
//         style={{
//           transformOrigin: '12.4058px 2.76251px',
//         }}
//       />
//       <path
//         d='M12.406 21.762v2'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2px 2px'
//         style={{
//           transformOrigin: '12.4058px 22.7625px',
//         }}
//       />
//       <path
//         d='M4.626 4.982l1.42 1.42'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2.008183240890503px 2.008183240890503px'
//         style={{
//           transformOrigin: '5.33598px 5.69248px',
//         }}
//       />
//       <path
//         d='M18.766 19.122l1.42 1.42'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2.008183240890503px 2.008183240890503px'
//         style={{
//           transformOrigin: '19.4756px 19.8325px',
//         }}
//       />
//       <path
//         d='M1.406 12.762h2'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2px 2px'
//         style={{
//           transformOrigin: '2.40576px 12.7625px',
//         }}
//       />
//       <path
//         d='M21.406 12.762h2'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2px 2px'
//         style={{
//           transformOrigin: '22.4058px 12.7625px',
//         }}
//       />
//       <path
//         d='M4.626 20.543l1.42-1.42'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2.008183240890503px 2.008183240890503px'
//         style={{
//           transformOrigin: '5.33598px 19.8325px',
//         }}
//       />
//       <path
//         d='M18.766 6.402l1.42-1.42'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='2.008183240890503px 2.008183240890503px'
//         style={{
//           transformOrigin: '19.4756px 5.69248px',
//         }}
//       />
//       <path
//         d='M0 0s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0z'
//         stroke='currentColor'
//         strokeWidth={0}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeDasharray='0px 60.659881591796875px'
//         style={{
//           transformOrigin: '12.2109px 12.3922px',
//         }}
//       />
//     </svg>
//   );
// }

// export default LightIcon;
