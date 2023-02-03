import React from 'react';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  return (
    <div className='div--chat'>
        <div className="div--chatInfo">
            <span>John</span>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat;