import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
       <img src="/user person.png" alt="person" />
       <span>Just Now</span>
      </div>

    <div className='messageContent'>
      <p>Hello</p>
      <img src="/user person.png" alt="person" />
    </div>
    </div>
  )
}

export default Message;
