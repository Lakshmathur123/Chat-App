import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUserPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Laksh</span>
        <div className='chatIcons'>
        <FontAwesomeIcon icon={faCamera} />
          <FontAwesomeIcon icon={faUserPlus} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;
