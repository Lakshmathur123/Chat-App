import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type here...' />
      <div className='send'>
      <a href="">  <FontAwesomeIcon icon={faPaperclip} />
        <input type="file" id='file' style={{ display: 'none' }} /> </a>
        <a href=""> <label htmlFor="file">
          <FontAwesomeIcon icon={faImage} /> 
        </label></a>
        <button>send</button>
      </div>
    </div>
  );
}

export default Input;
