import React from 'react'

const Navbar = () => {
  return (
    <div className='div--navbar'>
        <span className="span--logo">Chatty Peeps</span>
        <div className="div--user">
            <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user-profile" />
            <span>John</span>
            <button>Logout</button>
        </div>

    </div>
  )
}

export default Navbar;