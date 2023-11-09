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
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = /^[0-9]{10}$/.test(value);
    setIsInputValid(isValid);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (formData.phoneNumber.length === 10 && isInputValid) {
try{
  const response = await axios.post("https://ihaf-backend.vercel.app/send-otp",{
    phoneNumber:formData.phoneNumber,
  })
  const check = {data : {success : true}}
if(check.data.success){
  toast.success('OTP Sent Successfully', {
      position: toast.POSITION.TOP_CENTER ,
      autoClose:2000
  })
  setTimeout(() => {
    navigate('/Otp');
  }, 3000); 
}
 else{
  toast.error('Failed to update data', { position: toast.POSITION.TOP_CENTER })
 }
 console.log(response)
}
catch(error){
  console.error('Error:', error);
}
}else {
  // Show input error notification
  toast.error('Invalid phone number. Please enter 10 digits.', { position: toast.POSITION.TOP_CENTER });
}
  };
  const phoneNumber = localStorage.setItem('phoneNumber',formData.phoneNumber)
  return (
    <>
    <Navbar/>
    <div className="login-container">
     <div className="login-content">
     <h1  className={` ${isTamilLanguage ? 'tamil18-font5' : ''}`}>
                            {t('Login.1')}
                        </h1>
     <p className={`${isTamilLanguage ? 'tamil18-font5': ''}`}>{t('Login.2')}</p>
     <form onSubmit={handleSubmit}>
        <div className="form-login">
          <label className={`${isTamilLanguage ? 'tamil18-font5': ''}`}  >{t('Login.3')}</label>
          <span>+91</span>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={{
              borderColor: isInputValid ? '#355cc2' : '#cb0909',
              border:'2px solid',
              boxShadow: isInputValid ? '0px 0px 4px 6px rgba(153,189,232,0.36)' : '0px 0px 4px 6px rgba(232,153,153,0.36)'
            }}
          />
        </div>
        <div className="login-btn">
          {/* <button type="submit"className={` login-button ${isTamilLanguage ? 'tamil18-font5': ''}`} style={{ width: isTamilLanguage ? '212px' : '' , fontSize: isTamilLanguage ? '21.827px' : '' }}>{t('Login.4')}</button> */}
          <Stack spacing={2} direction="row">
     
     <Button variant="contained" type="submit"className={` login-button ${isTamilLanguage ? 'tamil18-font5': ''}`} style={{ width: isTamilLanguage ? '212px' : '' , fontSize: isTamilLanguage ? '21.827px' : '' }}>{t('Login.4')}</Button>

   </Stack>
        </div>
      </form>
     </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default Login