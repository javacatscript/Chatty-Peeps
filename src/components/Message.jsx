import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {

  console.log(message);
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  const ref = useRef();

  // handle scroll whenever a new msg is sent using useRef hook
  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message])

  return (
    <div ref={ref} className={`div--message ${message.senderId === currentUser.uid && "sender"}`}>

        <div className="div--messageInfo">
            <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
            <span>Just now</span>
        </div>
        <div className="div--messageContent">
            <p>{message.text}</p>
            {message.img && <img src={message.img}alt="" />}
        </div>
    </div>
  )
}

export default Message;