import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
       <img src="/images/user person.png" alt="person" />
       <span>Just Now</span>
      </div>

    <div className='messageContent'>
      <p>Hello</p>
     
    </div>
    </div>
  )
}

export default Message;
