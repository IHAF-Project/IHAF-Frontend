import { useState } from "react"
import "./Login.css"
import Navbar from "../NavBar/Navbar";
import { useTranslation } from 'react-i18next';

function Login() {
  const { t, i18n } = useTranslation();

  const isTamilLanguage = i18n.language === 'ta';

  const [formData, setFormData] = useState({
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Phone Number:', formData.phoneNumber);
  };

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
          />
        </div>
        <div className="login-btn">
          <button type="submit"className={` login-button ${isTamilLanguage ? 'tamil18-font5': ''}`} style={{ width: isTamilLanguage ? '212px' : '' , fontSize: isTamilLanguage ? '21.827px' : '' }}>{t('Login.4')}</button>
        </div>
      </form>
     </div>
    </div>
    </>
  )
}

export default Login