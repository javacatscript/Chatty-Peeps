import React from 'react'

const Search = () => {
  return (
    <div className='div--search'>
        <div className="div--searchForm">
            <input type="text" placeholder='Find your peep' />
        </div>
        <div className="div--userChat">
            <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="div--userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search;