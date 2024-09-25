import React from 'react';

const chatsData = [
  { id: 1, name: 'Laksh', message: 'Hello', lastOnline: '10:00 AM', message: ['Hello'] },
  { id: 2, name: 'ShinChan', message: 'Yo', lastOnline: '10:15 AM', message: [] },
  { id: 3, name: 'Ram', message: 'Hi', lastOnline: '10:30 AM', message: [] },
  { id: 4, name: 'Shyam', message: 'Bye', lastOnline: '10:45 AM', message: [] },
];

const Chats = ({ onChatClick }) => {
  return (
    <div className='chats'>
      {chatsData.map((chat) => (
        <div key={chat.id} className='userChat' onClick={() => onChatClick(chat)}>
          <img src="/images/user person.png" alt={chat.name} />
          <div className='userChatInfo'>
            <span>{chat.name}</span>
            <p>{chat.message}</p>
          </div>
          <p className='lastOnline'>{chat.lastOnline}</p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
