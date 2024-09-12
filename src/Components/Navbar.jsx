import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Virtual Chat</span>
      <div className='user'>
        <img src="/images/user person.png" alt="user image" />
        <span>Laksh</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar;
