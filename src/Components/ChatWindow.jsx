import React from 'react';

const ChatWindow = ({ chat }) => {
  return (
    <div className='chatWindow'>
      <div className='chatHeader'>
        <h2>{chat.name}</h2>
        <p>Last Online: {chat.lastOnline}</p>
      </div>
     <div className='messagesContainer'>
        <p>{chat.message}</p>
      </div>
         <div className='chatInput'>
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
