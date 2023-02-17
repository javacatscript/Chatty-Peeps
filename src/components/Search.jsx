import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    // console.log("handle search called");
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch(error) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    // console.log(e.code)
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group (chats in firestore) already exists or not; if not then create a new collection

    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        // create a chat in "chats" collection if no chat exists
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
       
        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          //using firebase method for timestamp
          [combinedId+".date"] : serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId+".userInfo"]:{
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"] : serverTimestamp()
        });
      }
    } catch(error) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="div--search">
      <div className="div--searchForm">
        <input
          type="text"
          placeholder="Search your peep..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {error && <span>Something went wrong...</span>}
      {user && (
        <div className="div--userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="div--userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
