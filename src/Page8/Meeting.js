import React, { useState } from 'react';
import "./Meeting.css"
import { useTranslation } from 'react-i18next';

function Meeting() {
  const { t, i18n } = useTranslation()
  const isTamilLanguage = i18n.language === 'ta'

  const [value, setValue] = useState('1');
  const [isCodeCopied, setIsCodeCopied] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsCodeCopied(false); 
  };

  const handleCopyCodeClick = () => {
    const zoomMeetingCode = 'Your Zoom meeting code here'; 
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = zoomMeetingCode;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setIsCodeCopied(true);

    setTimeout(() => {
      setIsCodeCopied(false);
    }, 1000);
  };

  const [memberOpen,setMemberOpen] =useState(0)

  const handleClick = (index) =>{
    setMemberOpen(index)
  }

  return (
    <div className='Meeting-container'>

        <div className='Meeting-con-M'>
        <div className= {`${memberOpen === 0 ? 'meeting-events' : 'meeting-eve'}`} onClick={()=>handleClick(0)}>
          <p >Zoom meeting</p>
           </div>
        <div className={`${memberOpen === 1 ? 'meeting-events' : 'meeting-eve'}`} onClick={()=>handleClick(1)}>
          <p  className=''>Events</p>
          </div>
        </div>
        
        {memberOpen === 0 &&
          <div className='Meeting-con-main'>
            <div className='zoom-meet-design-cont'>
              <div className='zoom-meet-design'>Zoom meeting design card from admin</div>
            </div>
            <div className='zoom-meeting-cont'>
              <p className='zoom-meet-code'>
                Zoom meeting code :
                <span title='Click to copy'
                  className={`code-text ${isCodeCopied ? 'copied' : ''}`}
                  onClick={handleCopyCodeClick}
                >
                  Your Zoom meeting code here
                </span>
              </p>
              {isCodeCopied && <p className='copied-message'>Code copied!</p>}
            </div>
          </div>
}
    
{memberOpen === 1 &&
           <div className='mmeting-tab-2'>
              <div className='metting-tab2-cont'>
               
                  <p className='tab2-cont'>{t('hello.30')}</p>
                    
                  <p className='tab2-cont'>{t('hello.30')}</p>
             
              </div>
              <div className='metting-tab2-cont'>
           
                  <p className='tab2-cont'>{t("hello.30")}</p>
            
          
                  <p className='tab2-cont'>{t("hello.30")}</p>
      
              </div>
           </div>
}
 
    </div>
  )
}

export default Meeting;
