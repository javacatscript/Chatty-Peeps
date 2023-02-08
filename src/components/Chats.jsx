import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

// this component displays all the active user chats on the left side 

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    //fetching chats using useEffect hook
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      //clearing the unsub function call
      return () => {
        unsub();
      };
    };

    // if user exists then call getChats()
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // dispatching an action once a new user is clicked 
  const handleSelect = (user) => {
    dispatch({type:"change_user", payload: user})
  } 
  

  return (
    <div className="div--chats">
      {Object.entries(chats)?.sort((a,b) => b[1].date-a[1].date).map((chat) => (
        <div className="div--userChat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="div--userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
