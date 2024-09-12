import * as React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';


export default function App() {

  const [isAuthenticated , setIsAutheticated] = React.useState(false);

  const handleLogin = () => {
    setIsAutheticated(true);
  };


  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={isAuthenticated ? (<Home />) : (<Navigate to="/login" replace />)}/>
    <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />
    
  </Routes>
    
  </BrowserRouter>

  );
}
