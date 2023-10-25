import { useTranslation } from 'react-i18next'
import React, { useState, useRef } from 'react';
import "./Otp.css"
import Navbar from '../../NavBar/Navbar'
import { Link } from 'react-router-dom';
function Otp() {
    const { t,i18n } = useTranslation();
    const isTamilLanguage = i18n.language === 'ta';
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  
    const handleInputChange = (index, value) => {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
  
      if (value !== '' && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    };
    // const handleKeyDown = (index, event) => {
    //     // Move to the previous input field on backspace
    //     if (event.key === 'Backspace' && index > 0) {
    //       inputRefs[index - 1].current.focus();
    //     }
    //   };
  return (
    <div className='otp-main'>
        <Navbar/>
        <div className='otp-container'>
            <div className='otp-box-contain'>
                <div className='otp-header' >
                    <h2 >{t('Otp.1')}</h2>
                </div>
                <div className='otp-p' >
                    <p style={{ fontSize: isTamilLanguage ? '15px' : '' }}>{t('Otp.2')}</p>
                </div>
                <div className='opt-h4'>
                    <h4>{t('Otp.3')}</h4>
                </div>
                <div className="otp-input-container">
      {otpValues.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleInputChange(index, e.target.value)}
          ref={inputRefs[index]}
          className="otp-input"
        />
      ))}
    </div>
    <div><button className='otp-verify-btn'>{(t('Otp.6'))}</button></div>
    <div className='resent-otp'><Link>{t('Otp.5')}</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Otp