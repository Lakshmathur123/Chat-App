import React from 'react'
import SlideBar from '../Components/SlideBar';
import Chat from '../Components/Chat';

const Home = () => {

  const [selectedChat, setSelectedChat] = React.useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  }


  return (
    <div className='home'>
        <div className='container'>

        <SlideBar onChatClick={handleChatClick}/>
        {selectedChat ? (
          <Chat chat={selectedChat} /> 
        ) : (
          <div className='noChatSelected'>
            <p>Select a chat to start messaging</p>
          </div>
        )}
        </div>
        
    </div>
  );
};

export default Home;
