import React from 'react'
import Message from './Message';


const messagesData = [
  {id: 1, text: 'Hello', sender: 'user', timestamp: 'Just Now'},
  {id: 2, text: 'hi, hows u doin ?', sender: 'other', timestamp: '10:01 AM'},
  {id: 3, text: 'I am good wbu ?', sender: 'user', timestamp: '10:02 AM'},
  {id: 4, text: 'Just good tho', sender: 'other', timestamp: '10:03 AM'},
]

const Messages = () => {
  return (
    <div className='messages'>
        {messagesData.map((message) => (
          <Message key={message.id} text={message.text} sender={message.sender} timestamp={message.timestamp} />
        ))}
    </div>
  )
}

export default Messages;
