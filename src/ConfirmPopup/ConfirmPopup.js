import React from 'react';
import  './ConfirmPopup.css'
import { Link } from 'react-router-dom';
import close from '../../src/images/Close (1).png'

 const ConfirmPopup = ({data, onCancel }) => {
  console.log("data",data)
  const lastThreeDigits = data.slice(-3);
  return (
    <div className="custom-popup">
      <div className="popup-content">
      <button className='close-btnn' onClick={onCancel}><img src={close} alt='close'></img></button>
      <p>OTP sent to your mobile number ends with ******{lastThreeDigits}</p>
      <div className='popup-button'>
      <Link to="/Otp">
      <button >OK</button></Link>
        
      </div>
      </div>
    </div>
  );
};

export default ConfirmPopup