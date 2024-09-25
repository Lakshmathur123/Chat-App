import React from 'react'

const Message = ({text, sender, timestamp}) => {
  return (
    <div className={`message ${sender === 'user' ? 'owner' : ''}`}>
      <div className='messageInfo'>
        <img src="/images/user person.png" alt="person" />
        <span>{timestamp}</span>
      </div>

      <div className='messageContent'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Message;
