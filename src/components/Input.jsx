import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db, storage } from '../firebase';
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async () => {

    if(img){
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img:downloadURL,
              }),
            });
          });
        }
      );
    } else{
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"] : {
        text
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"] : {
        text
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  }

  return (
    <div className='div--input'>
        <input type="text" placeholder='Type here...' onChange={e => setText(e.target.value)} 
        value={text}
        />
        <div className="div--send">
            <img src="https://cdn-icons-png.flaticon.com/512/3756/3756614.png" alt="" />
            <input type="file" id="input--file"style={{display: "none"}} onChange={e => setImg(e.target.files[0])}/>
            <label htmlFor="input--file">
                <img src="https://cdn-icons-png.flaticon.com/512/1206/1206399.png" alt="" />
            </label>
            <img className="send" src="https://cdn-icons-png.flaticon.com/512/2161/2161491.png" alt="" onClick={handleSend}/>
        </div>  
    </div>
  )
}

export default Input;