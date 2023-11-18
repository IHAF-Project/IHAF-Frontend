
import CustomNotification  from '../COMPONENTS/login popup/Popup';
import { useState } from "react"
import "./Login.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from "../COMPONENTS/NAVBAR/Navbar";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Login() {
  
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phoneNumber: '',
  });
  const [isInputValid, setIsInputValid] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({});

  const handleNotification = (message, type) => {
    setNotificationData({ message, type });
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = /^[0-9]{10}$/.test(value);
    setIsInputValid(isValid);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleKeyDown = async(e) => {
    
    if(e.key==='Enter'){
      e.preventDefault();
      handleSubmit(e);
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.phoneNumber.length === 10 && isInputValid) {
try{
  const response = await axios.post("https://ihaf-backend.vercel.app/send-otp",{
    phoneNumber:formData.phoneNumber,
  })
  const check = {data : {success : true}}
if(check.data.success){
  handleNotification('OTP Sent Successfully', 'success');
  setTimeout(() => {
    navigate('/Otp');
  }, 4); 
}
 else{
  handleNotification('Failed to update data', 'error');
 }
 console.log(response)
}
catch(error){
  console.error('Error:', error);
}
}else {
  // Show input error notification
  handleNotification('Invalid phone number. Please enter 10 digits.', 'error');
  
}

  };
  const phoneNumber = localStorage.setItem('phoneNumber',formData.phoneNumber)
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-content">
          <h1 className={` ${isTamilLanguage ? 'tamil18-font5' : ''}`}>
            {t('Login.1')}
          </h1>
          <p className={`${isTamilLanguage ? 'tamil18-font5' : ''}`}>
            {t('Login.2')}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-login">
              <label className={`${isTamilLanguage ? 'tamil18-font5' : ''}`}>
                {t('Login.3')}
              </label>
              <span>+91</span>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onKeyDown={handleKeyDown} // <-- Use handleKeyDown here
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
          </form>
        </div>
      </div>
     {/* Replace ToastContainer with your custom notification */}
          <CustomNotification
            message={notificationData.message}
            type={notificationData.type}
            onClose={closeNotification}
          />
    </>
  );
}

export default Login