import React from 'react'
import Message from './Message';


const messagesData = [
  {id: 1, text: 'Hello', sender: 'user', timestamp: 'Just Now'},
  {id: 2, text: 'hi, hows u doin ?', sender: 'other', timestamp: '10:01 AM'},
  {id: 3, text: 'I am good wbu ?', sender: 'user', timestamp: '10:02 AM'},
  {id: 4, text: 'Just good tho', sender: 'other', timestamp: '10:03 AM'},
]

const Messages = ({ messages }) => {
  return (
    <div className='messages'>
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
};

export default Messages;
