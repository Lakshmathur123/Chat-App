import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPhone, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';
import Input from './Input';

const Chat = ({ selectedChat }) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showCamera, setShowCamera] = React.useState(false);
  const videoRef = React.useRef(null);

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  const openCamera = async (e) => {
    e.preventDefault();
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeCamera = () => {
    setShowCamera(false);
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{selectedChat.name}</span>
        <span>Last Seen: {selectedChat.lastOnline}</span>
        <div className='chatIcons'>
          <a href="#" onClick={openCamera}> 
            <FontAwesomeIcon icon={faCamera} /> 
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <div className='moreOptions'>
            <a href="#" onClick={toggleDropdown}> 
              <FontAwesomeIcon icon={faEllipsisV} /> 
            </a>

            {showDropDown && (
              <div className='dropdownMenu'>
                <ul>
                  <li><a href="#">Profile Info</a></li>
                  <li><a href="#">Search</a></li>
                  <li><a href="#">Mute Notifications</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {showCamera && (
        <div className='cameraModal'>
          <video ref={videoRef} autoPlay playsInline></video>
          <button onClick={closeCamera}>Close Camera</button>
        </div>
      )}

      {selectedChat.messages && selectedChat.messages.length > 0 ? (
        <Messages messages={selectedChat.messages} />
      ) : (
        <div className="noMessages">
          <p>Start messaging with {selectedChat.name}</p>
        </div>
      )}

      <Input />
    </div>
  );
};

export default Chat;
