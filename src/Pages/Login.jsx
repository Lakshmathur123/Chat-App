import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'laksh@123gmail.com' && password === '12345') {
      onLogin();
      navigate('/');
    } else {
      alert('Check the Login details again!')
    }
  };

  
  
  
  
  
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Virtual Chat</span>
            <span className='title'>Register</span>
            <form className='form' onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Sign In</button>
            </form>
            <p className='user'>Don't have an account ? <a href="/register" >Register</a></p>
        </div>
    </div>
  );
};

export default Login;
