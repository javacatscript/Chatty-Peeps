import React, { useContext } from 'react';
import {signOut} from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='div--navbar'>
        <span className="span--logo">Chatty Peeps</span>
        <div className="div--user">
            <img src={currentUser.photoURL} alt="user-profile" />
            <span>{currentUser.displayName}</span>
            <img className='logout' src="https://cdn-icons-png.flaticon.com/512/7175/7175236.png" alt="" 
            onClick={() => signOut(auth)} />
        </div>

    </div>
  )
}

export default Navbar;