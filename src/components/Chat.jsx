import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import Input from './Input';
import Messages from './Messages';

// this is the chat window component on the right side 

const Chat = () => {

  const {data} = useContext(ChatContext);
  return (
    <div className='div--chat'>
        <div className="div--chatInfo">
            <span>{data.user?.displayName}</span>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat;