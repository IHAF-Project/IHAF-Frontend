import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import './Otp.css';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import the library
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the styles

import 'react-toastify/dist/ReactToastify.css';
 
function Otp() {

  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [otp, setOtp] = useState('');
  
  const navigate = useNavigate();
  const [resendTimer, setResendTimer] = useState(30);
 

 
  const handleSubmit = async (e) => {
    try {
      const phoneNumber = localStorage.getItem('phoneNumber');
      const response = await axios.post('https://ihaf-backend.vercel.app/verify-otp', {
        otp: otp,
        phoneNumber: phoneNumber,
      });

      const userData = response?.data;
      localStorage.setItem('userData', JSON.stringify(userData));

      console.log(userData, 'UserData');
      const verifyResult = { data: { success: true } };

      if (verifyResult.data.success) {
        toast.success('Verify OTP success', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      
        // Extracting old_id from localStorage
        const storedData = JSON.parse(localStorage.getItem('userData'));
        const old_id = storedData?.data?._id || storedData?._id;
        console.log('old_id: ' + old_id);
        const isDeleted = storedData?.data?.isDeleted || storedData?.isDeleted;
      
        if (isDeleted === true) {
          confirmAlert({
            title: 'Reactivate account!',
            message: 'Do you want to reactivate the account?',
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                  // Reactivate account
                  const activateAccount = async () => {
                    try {
                      const activateResponse = await fetch(`https://ihaf-backend.vercel.app/reactivate-account/${old_id}`, {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      });
      
                      if (activateResponse.status === 200) {
                        const newData = await activateResponse.json();
                        const getResponse = newData?.data?.regularMember[0];
                        console.log(getResponse, 'activate');
      
                        // Update local storage with new data
                        localStorage.setItem('userData', JSON.stringify(getResponse));
                        navigate('/')
                      }
                    } catch (error) {
                      console.log(error.message);
                    }
                  };
      
                  // Call the reactivation function
                  activateAccount();
                 
                },
              },
              {
                label: 'No',
                onClick: () => {
                  console.log('Member reactivation canceled');
                  setTimeout(() => {
                    navigate('/login'); // Navigate to login page
                  }, 0);
                },
              },
            ],
          });
        }
      
        // Navigate to home page after 4 seconds
        setTimeout(() => {
          navigate('/');
        }, 4000);
      }
       else {
        toast.error('Invalid OTP', { position: toast.POSITION.TOP_CENTER });
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      toast.error('Invalid OTP', { position: toast.POSITION.TOP_CENTER });
    }
  };

 
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
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
        setResendTimer(30);
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
    const timer = setInterval(() => {
      setResendTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (resendTimer === 0) {
      clearInterval();
    }
    
  }, [resendTimer]);

  const storedData = JSON.parse(localStorage.getItem('userData'));
  const new_id = storedData?.data?._id || storedData?._id
  console.log('new_id: ' + new_id);

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
          {resendTimer > 0 ? (
<div className='otp-countdown'>
                      OTP will expire in {resendTimer} seconds
</div>
                  ) : (
<div className='resent-otp'>
<div className='resent'>I didn’t get OTP !</div>
<div className='sen-again' onClick={handleResendClick}>Send again</div>
</div>
                  )}
          {/* <div className='resent-otp' onClick={handleResendClick}>
            <p >I didn’t receive a OTP resend OTP !</p>
            <div className='resend'>
              <span>{t('Otp.5')}</span>
              <img src={refresh} alt='refresh' width='16px' height='16px' />
            </div>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
 
export default Otp;
 