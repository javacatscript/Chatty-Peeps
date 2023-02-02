import React from 'react';
import Img from "../images/img.png";
import Paperclip from "../images/paperclip.png";

const Input = () => {
  return (
    <div className='div--input'>
        <input type="text" placeholder='Type here...' />
        <div className="div--send">
            <img src={Paperclip} alt="" />
            <input type="file" id="input--file"style={{display: "none"}}/>
            <label htmlFor="input--file">
                <img src={Img} alt="" />
            </label>
            <button>Send</button>
        </div>  
    </div>
  )
}

export default Input;