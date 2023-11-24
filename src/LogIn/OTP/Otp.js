import { useTranslation } from 'react-i18next';
import React, { useState, useRef, useEffect } from 'react';
import './Otp.css';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import { useNavigate } from 'react-router-dom';
import refresh from "../../images/Refresh.svg";
import OtpInput from 'react-otp-input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function Otp() {
  const lastInputRef = useRef();
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [otp, setOtp] = useState('');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  const handleInputChange = (index, value, e) => {
    if (inputRefs[index] && inputRefs[index].current) {
      if (value !== '' && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      } else if (value === '' && index > 0 && (e.key === 'Backspace' || e.key === 'Delete')) {
        inputRefs[index - 1].current.focus();
      }
    }
  };
  
  const handleSubmit = async (e) => {
    try {
      const phoneNumber = localStorage.getItem('phoneNumber');
      const response = await axios.post('https://ihaf-backend.vercel.app/verify-otp', {
        otp: otp,
        phoneNumber: phoneNumber,
      });

      const userData = response.data;
      localStorage.setItem('userData', JSON.stringify(userData));

      console.log(userData, 'UserData');
      const verifyResult = { data: { success: true } };

      if (verifyResult.data.success) {
        toast.success('Verify OTP success', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate('/');
        }, 0);
      } else {
        toast.error('Invalid OTP', { position: toast.POSITION.TOP_CENTER });
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      toast.error('Invalid OTP', { position: toast.POSITION.TOP_CENTER });
    }
  };

  const handleKeyDown = async (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      await handleSubmit(e);
    }
  };

  const handleResendClick = async () => {
    try {
      const phoneNumber = localStorage.getItem('phoneNumber');
      const resendResponse = await axios.post('https://ihaf-backend.vercel.app/resend-otp', {
        phoneNumber: phoneNumber,
      });

      if (resendResponse.data.success) {
        toast.info('OTP resent successfully', { position: toast.POSITION.TOP_CENTER });
      } else {
        toast.error('Failed to resend OTP', { position: toast.POSITION.TOP_CENTER });
      }
    } catch (error) {
      console.error('Error during OTP resend:', error);
      toast.error('Failed to resend OTP', { position: toast.POSITION.TOP_CENTER });
    }
  };

  const Register = async (memberID) => {
    try {
      const response = await axios.get(`https://ihaf-backend.vercel.app/get-member-profile/${memberID}`);
      console.log(response.data, 'member');
    } catch (error) {
      console.error('Error during member registration:', error);
    }
  };

  useEffect(() => {
    Register();
  }, []);


  return (
    <div className='otp-main'>
      <Navbar />
      <div className='otp-container'>
        <div className='otp-box-contain'>
          <div className='otp-header'>
            <h2>{t('Otp.1')}</h2>
          </div>
          <div className='otp-p'>
            <p style={{ fontSize: isTamilLanguage ? '15px' : '' }}>{t('Otp.2')}</p>
          </div>
          <div className='opt-h4'>
            <h4>{t('Otp.3')}</h4>
          </div>
          <div className='otp-input-container' >
          <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      className='otp-input'
      isInputNum
    
      renderInput={(props, index) => (
        <input
          {...props}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '16px',
            display: 'flex',
            textAlign: 'center',
            marginLeft: "10px",
            border : "none"
           
          }}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      )}
    />
          </div>
          <div>
            <Stack spacing={2} direction="row">
              <Button variant="contained" className='otp-verify-btn' onClick={handleSubmit} onKeyDown={handleKeyDown}>
                {t('Otp.6')}
              </Button>
            </Stack>
          </div>
          <div className='resent-otp' onClick={handleResendClick}>
            <p >I didn’t receive a OTP resend OTP !</p>
            <div className='resend'>
              <span>{t('Otp.5')}</span>
              <img src={refresh} alt='refresh' width='16px' height='16px' />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Otp;
