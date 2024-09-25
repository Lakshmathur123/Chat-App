import * as React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';


export default function App() {

  const [isAuthenticated , setIsAutheticated] = React.useState(false);
  const [selectedChat, setSelectedChat] = React.useState(null);

  const handleLogin = () => {
    setIsAutheticated(true);
  };

  const handleChatClick = (chat) => {
    selectedChat(chat);
  }

  


  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={isAuthenticated ? (<Home selectedChat={selectedChat} handleChatClick={handleChatClick} />) : (<Navigate to="/login" replace />)}/>
    <Route path="/login" element={<Login onLogin={handleLogin} />} />
    <Route path="/register" element={<Register onRegister={handleLogin} />} />
    <Route path='/profile' element={<Profile /> } />
    
  </Routes>
    
  </BrowserRouter>
  

  );
}
