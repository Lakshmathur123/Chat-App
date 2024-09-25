import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';

const Input = () => {

  const [file, setFile] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log('Selected File:' , event.target.files);
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    console.log('Selected Image:' , event.target.files);
  }  
  


  return (
    <div className='input'>
      <input type="text" placeholder='Type here...' />
      <div className='send'> 
        <input type="file" id='file' style={{display: 'none'}} onChange={handleFileChange} />
       <label htmlFor='file'>
        <FontAwesomeIcon icon={faPaperclip} />
      </label> 
      <input type="file" id='image' accept='image/*' style={{display: 'none'}} onChange={handleImageChange} />
        <label htmlFor="image">
          <FontAwesomeIcon icon={faImage} /> 
        </label>
        <button>send</button>
      </div>
    </div>
  );
}

export default Input;
