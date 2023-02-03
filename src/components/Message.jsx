import React from 'react';

const Message = () => {
  return (
    <div className='div--message sender'>

        <div className="div--messageInfo">
            <img src="https://images.pexels.com/photos/15127638/pexels-photo-15127638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>Just now</span>
        </div>
        <div className="div--messageContent">
            <p>Hello</p>
            <img src="https://images.pexels.com/photos/15127638/pexels-photo-15127638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Message;