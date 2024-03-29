
import React, { useState } from "react";
import axios from "axios";
import Stack from '@mui/material/Stack';
import "./Login.css"
import Button from '@mui/material/Button';
import Navbar from "../component/NavBar/Navbar";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmPopup from "../component/ConfirmPopup/ConfirmPopup";

 
 
function Login() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
 
  const [formData, setFormData] = useState({
    phoneNumber: '',
  });
  const [isInputValid, setIsInputValid] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  
  const [sentOTP, setSentOTP] = useState(false);
  // New state variable to hold data for ConfirmPopup
  const [confirmPopupData, setConfirmPopupData] = useState(null);
  const [resp, setresp] = useState(false);
 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = /^[0-9]{10}$/.test(value);
    setIsInputValid(isValid);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  const handleCancel1 = () => {
    setShowPopup(false);
   
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
 
    if (formData.phoneNumber.length === 10 && isInputValid && formData.phoneNumber.length !== 0) {
      try {
       
        const response = await axios.post("https://ihaf-backend.vercel.app/send-otp", {
          phoneNumber: formData.phoneNumber,
          
        });
 
        console.log(response.data.status)
        
        if (response.data.data.status==="AWAITED-DLR") {
          setSentOTP(true)
 
          setConfirmPopupData(formData.phoneNumber);
 
          // Show ConfirmPopup on successful OTP send
          toast.success('OTP sent successfully.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            
          })
          setTimeout(() => {
            navigate('/Otp');
          }, 2000);
        } 
        else{
          
          setSentOTP(false)
          toast.error('Error! Try again sometime', { position: toast.POSITION.TOP_CENTER })}
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
      }
    } else {
      // Show input error notification
      setSentOTP(false);
      toast.error('Invalid phone number. Please enter 10 digits.', { position: toast.POSITION.TOP_CENTER });
    }
  };
 
  const phoneNumber = localStorage.setItem('phoneNumber', formData.phoneNumber);

  
  // useEffect(() => {
  //   // Attach event listener when the component mounts
  //   const handleGlobalKeyDown = (e) => {
  //     if (e.key === "Enter") {
  //       handleSubmit(e);
  //     }
  //   };

  //   window.addEventListener("keydown", handleGlobalKeyDown);

  //   // Detach event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("keydown", handleGlobalKeyDown);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className="login-container">
        <div className="login-content">
          <h1 className={` ${isTamilLanguage ? 'tamil18-font5' : ''}`}>
            {t('Login.1')}
          </h1>
          <p className={`${isTamilLanguage ? 'tamil18-font5' : ''}`}>
            {t('Login.2')}
          </p>
         
            <div className="form-login">
              <label className={`${isTamilLanguage ? 'tamil18-font5' : ''}`}>
                {t('Login.3')}
              </label>
              <span>+91</span>
              <input
                type="tel"
                max='10'
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter your phone number"
                style={{
                  borderColor: isInputValid ? '#355cc2' : '#cb0909',
                  border: '2px solid',
                  boxShadow: isInputValid
                    ? '0px 0px 4px 6px rgba(153,189,232,0.36)'
                    : '0px 0px 4px 6px rgba(232,153,153,0.36)',
                }}
              />
            </div>
            {resp&&
            <div style={{color:'red',textAlign:'center'}}>Error sending OTP!</div>}
            {sentOTP&&
            <div style={{color:'green',textAlign:'center'}}>OTP sent successfully !</div>}
            <div className="login-btn">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  type="submit"
                  className={` login-button ${isTamilLanguage ? 'tamil18-font5' : ''}`}
                  style={{
                    width: isTamilLanguage ? '212px' : '',
                    fontSize: isTamilLanguage ? '21.827px' : '',
                  }}
                >
                  {t('Login.4')}
                </Button>
              </Stack>
            </div>
         
        </div>
      </div>
      </form>
      {/* Replace ToastContainer with your custom notification */}
      <ToastContainer />
     
      {/* Conditionally render ConfirmPopup */}
      {showPopup && (
        <ConfirmPopup
          // Add relevant props as needed
          data={confirmPopupData} // Pass data as a prop
         
          onCancel={handleCancel1}
        />
      )}
    </>
  );
}
 
export default Login;