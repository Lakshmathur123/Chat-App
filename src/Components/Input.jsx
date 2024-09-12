import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type here...' />
      <div className='send'>
        <FontAwesomeIcon icon={faPaperclip} />
        <input type="file" id='file' style={{ display: 'none' }} />
          <label htmlFor="file">
          <FontAwesomeIcon icon={faImage} />
        </label>
        <button>send</button>
      </div>
    </div>
  );
}

export default Input;
