import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ZoomMeeting() {
  const [isCodeCopied, setIsCodeCopied] = useState(false);

  const [selectedMeetUrl, setSelectedMeetUrl] = useState('');
  const [selectedMeetCardUrl, setSelectedMeetCardUrl] = useState('');
  const isValidUrl = /^https?:\/\/\S+$/.test(selectedMeetUrl);
  useEffect((meet) => {
    // Fetch data from the API when the component mounts
    fetch('https://ihaf-backend.vercel.app/get-meet')
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setSelectedMeetUrl(data.data[0].meetUrl);
          setSelectedMeetCardUrl(data.data[0].meetCardUrl);
        }
      })
      .catch((error) => console.error(error));
      console.log(meet, "photos===")
  }, []);
  console.log (selectedMeetUrl, "link===")

  // const handleCopyCodeClick = () => {
  //   const tempInput = document.createElement('input');
  //   document.body.appendChild(tempInput);
  //   tempInput.value = selectedMeetUrl;
  //   tempInput.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(tempInput);

  //   setIsCodeCopied(true);

  //   setTimeout(() => {
  //     setIsCodeCopied(false);
  //   }, 1000);
  // };

  return (
    <div className='Meeting-con-main'>
      <div className='zoom-meet-design-cont'>
        {selectedMeetCardUrl && (
          <img
            className='zoom-meet-design'
            alt='Meeting Card'
            src={selectedMeetCardUrl}
          />
        )}
      </div>
      <div className='zoom-meeting-cont'>
          <div className='zoom-meet-code'>
            Zoom meeting code :
          </div>
          <div className={`code-text }`} >

            {isValidUrl ? (
            <Link to={selectedMeetUrl} target='_blank'>{selectedMeetUrl}</Link> ) : (<p>No meeting !</p>)
            }
          
          </div>
       
      </div>
    </div>
  );
}

export default ZoomMeeting;
