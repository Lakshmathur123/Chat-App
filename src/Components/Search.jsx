import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
      <input type="text" placeholder='Search here..' />
      </div>
      <div className='userChat'>
        <img src="/images/user person.png" alt="user" />
        <div className='userChatInfo'>
          <span>Laksh</span>
        </div>
      </div>
    </div>
  )
}

export default Search;
