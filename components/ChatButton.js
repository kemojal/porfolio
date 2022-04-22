import React from 'react'
import styled from 'styled-components'
import Chat from './icons/Chat'

const ChatBtn = styled.div`
 position: fixed;
 bottom: 10px;
 z-index: 10;;
background-color: #ff6b00 !important;
height: 60px !important;
    width: 60px !important;
`
const ChatButton = () => {
  return (
    <ChatBtn>
        <Chat/>
    </ChatBtn>
  )
}

export default ChatButton