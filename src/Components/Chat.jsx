import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUserPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {

const [showDropDown, setshowDropDown] = React.useState(false);

const toggleDropdown = () => {
  setshowDropDown(!showDropDown);
}


  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Laksh</span>
        <span>Last Seen: 10 AM</span>
        <div className='chatIcons'>
     <a href=""> <FontAwesomeIcon icon={faCamera} /> </a>  
       <a href="">   <FontAwesomeIcon icon={faUserPlus} /> </a>
        <div className='moreOptions'>
        <a href="#" onClick={toggleDropdown}> <FontAwesomeIcon icon={faEllipsisV} /> </a>

        {showDropDown && (
          <div className='dropdownMenu'>
            <ul>
              <li><a href="#">Profile Info</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Mute Notifications</a></li>
              
            </ul>
          </div>
        )}
        </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;
