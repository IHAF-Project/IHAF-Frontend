import React, { useEffect, useState } from 'react';
import './Petition.css';
import image1 from '../images/Arrow 1 (1).png';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Petition() {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const memberID=storedData?.data?.memberID

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle('show');
          observer.unobserve(entry.target);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-13');
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElements1 = document.querySelectorAll('.hidden-14');
    hiddenElements1.forEach((el) => observer.observe(el));
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements1.forEach((el) => observer.unobserve(el));
    };
  }, []);


  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [data, setdata] = useState({
    memberID: memberID || "",
    issues: '',
    imageURL: '',
  });
// Function to handle a successful submission and open the popup
const handleSuccess = () => {
  setSuccessPopupOpen(true);
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value
    });
  };



  const handleFileChange = async (e) => {
 
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ivs6otkx');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData);
      const secureUrl = response.data.secure_url;
      console.log(secureUrl, "upload");
      handleSuccess();
      setdata({
        ...data,
        imageURL: secureUrl,
      });
    } catch (error) {
      console.log('Error uploading file:', error);
    }
  };
  const handlesubmit = async (e) => {
   
    e.preventDefault();
 
    try {
      const res = await fetch('https://ihaf-backend.vercel.app/new-petition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
 
      if (res.ok) {
        const t1 = await res.json();
        console.log(t1, 'success');
        setdata(t1);
      } else {
        const errorResponse = await res.json();
        console.error('Error Response:', errorResponse);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };


  return (
    <div className="page7-petition-container abc" id='Petition'>
      <div className="page-7-image-text">
        <img src={image1} alt="" className="page4-image1 hidden-13"></img>
        <p className={`hidden-14 ${isTamilLanguage ? 'petition-7-btn-tamil' : 'petition-7-btn'}`}>
          {t('hello.3')}
        </p>
      </div>
      <div className='page7-petition-text '>
        <p className={`${isTamilLanguage ? 'page7-petition-tamil-p' : 'page7-petition-text-p'}`}>{t('hello.4')} </p>
      </div>
      <div className="page7-input-container">
        <div className="petition-inputs">
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.5')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <input
              className="input-name-petition"
              type="text"
              name="memberID"
              value={data.memberID}
              onChange={handleChange}
              disabled
            />
          </div>
       
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.8')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <textarea
              className="input-address-petition"
              name="issues"
              value={data.issues}
              onChange={handleChange}
            ></textarea>
          </div>
      
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.27')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <div className="input-audio-petition">
              <div>
                <input
                  className="file-upload-petition"
                  id="file"
                  name='imageURL'
                  accept="*/*"
                  type="file"
                  onChange={handleFileChange}
                />
               
              </div>
            </div>
          </div>
          <div className="page7-submit">
            <button className="petition-submit-btn" onClick={handlesubmit}>
              {t('hello.6')}
            </button>
          </div>
        </div>
      </div>
      {/* Successful submission popup */}
      {isSuccessPopupOpen && (
        <div className="success-popup">
          <p>You submitted your petition successful!</p>
          <p>Our support team will contact you and solve your petition quickly as possible.</p>
          <button className="close-button" onClick={() => setSuccessPopupOpen(false)}>Close</button>
          {/* You can add additional content or a close button here */}
        </div>
      )}
    </div>
  );
}

export default Petition;


