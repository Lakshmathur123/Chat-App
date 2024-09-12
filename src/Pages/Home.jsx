import React from 'react'
import SlideBar from '../Components/SlideBar';
import Chat from '../Components/Chat';

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
        <SlideBar />
        <Chat />
        </div>
        
    </div>
  )
}

export default Home;
