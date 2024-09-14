import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
      <input type="text" placeholder='Search here..' />
      <a href=""> <FontAwesomeIcon icon={faSearch} className='searchIcon' /></a>
      </div>
      <div className='userChat'>
        <img src="/images/user person.png" alt="user" />
        <div className='userChatInfo'>
          <span>Laksh</span>
         <p>Hello</p>
        </div>
        <p className='lastOnline'>10:00 AM</p>
      </div>
    </div>
  )
}

export default Search;
