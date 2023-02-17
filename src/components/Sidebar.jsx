import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

export const Sidebar = () => {
  return (
    <div className='div--sidebar'>
        <Navbar />
        <div> 
        <Search />
        <Chats />
        </div>
    </div>
  )
}
