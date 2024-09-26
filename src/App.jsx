import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [selectedChat, setSelectedChat] = React.useState(null); // Holds the selected chat data

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat); // Update selected chat when clicked
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={isAuthenticated ? (
            <Home selectedChat={selectedChat} onChatClick={handleChatClick} />
          ) : (
            <Navigate to="/login" replace />
          )}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />
        <Route path='/profile' element={<Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}
