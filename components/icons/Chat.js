import * as React from "react"

const Chat = (props) => (
  <svg width={34} height={31} aria-hidden="true" fill="none" {...props}>
    <path
      clipRule="eventodd"
      d="m8.615 22.485-5.258-.553A2.631 2.631 0 0 1 1 19.315V6.441a2.632 2.632 0 0 1 2.357-2.617l26.736-2.81A2.631 2.631 0 0 1 33 3.632v18.494a2.634 2.634 0 0 1-2.907 2.617l-15.2-1.598c-1.453 3.586-4.867 5.894-9.219 6.397a.484.484 0 0 1-.336-.866c1.87-1.423 3.029-3.31 3.277-6.19Z"
      stroke="#fff"
      strokeWidth={2}
    />
    <circle cx={17} cy={13} r={2} fill="#fff" />
    <circle cx={25} cy={13} r={2} fill="#fff" />
    <circle cx={9} cy={13} r={2} fill="#fff" />
  </svg>
)

export default Chat
