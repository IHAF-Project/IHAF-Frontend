import React from 'react';
import  './ConfirmPopup.css'
import { Link } from 'react-router-dom';

 const ConfirmPopup = ({ memberId, onConfirm, onCancel }) => {
  return (
    <div className="custom-popup">
      <div className="popup-content">
      <p>OTP sent to your mobile number</p>
      <div className='popup-button'>
      <Link to="/Otp">
      <button onClick={onConfirm}>YES</button></Link>
        <button onClick={onCancel}>NO</button>
      </div>
      </div>
    </div>
  );
};

export default ConfirmPopup