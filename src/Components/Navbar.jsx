import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [showDropDown, setshowDropDown] = React.useState(false);

const toggleDropdown = () => {
  setshowDropDown(!showDropDown);
}

  return (
    <div className='navbar'>
      <span className='logo'>Virtual Chat</span>
      <div className='user'>
        <img src="/images/user person.png" alt="user image" />
        <span>Laksh</span>
        
        <div className='moreOptions'>
        <a href="#" onClick={toggleDropdown}> <FontAwesomeIcon icon={faEllipsisV} /> </a>

        {showDropDown && (
          <div className='dropdownMenu'>
            <ul>
              <li><a href="#">New Group</a></li>
              <li><a href="#">Starred messages</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
