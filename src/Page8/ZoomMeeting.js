import React, { useState, useEffect } from 'react';

function ZoomMeeting() {
  const [isCodeCopied, setIsCodeCopied] = useState(false);
  const [meetData, setMeetData] = useState([]);
  const [selectedMeetUrl, setSelectedMeetUrl] = useState('');
  const [selectedMeetCardUrl, setSelectedMeetCardUrl] = useState('');

  useEffect((meet) => {
    // Fetch data from the API when the component mounts
    fetch('https://ihaf-backend.vercel.app/get-meet')
      .then((response) => response.json())
      .then((data) => {
        setMeetData(data.data);
        if (data.data.length > 0) {
          setSelectedMeetUrl(data.data[0].meetUrl);
          setSelectedMeetCardUrl(data.data[0].meetCardUrl);
        }
      })
      .catch((error) => console.error(error));
      console.log(meet, "photos===")
  }, []);

  const handleCopyCodeClick = () => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = selectedMeetUrl;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setIsCodeCopied(true);

    setTimeout(() => {
      setIsCodeCopied(false);
    }, 1000);
  };

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
        <p className='zoom-meet-code'>
          Zoom meeting code :
          <span
            className={`code-text ${isCodeCopied ? 'copied' : ''}`}
            onClick={handleCopyCodeClick}
          >
            {selectedMeetUrl}
          </span>
        </p>
        {isCodeCopied && window.alert("link copied")}
      </div>
    </div>
  );
}

export default ZoomMeeting;
