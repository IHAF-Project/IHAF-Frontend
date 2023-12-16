import React, { useEffect, useState } from 'react';
import './Petition.css';
import image1 from '../images/Arrow 1 (1).png';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Petition() {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [userData, setUserData] = useState(null);



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
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const _id = storedData?.data?._id || storedData?._id

  useEffect (() =>{
    const fetchData = async () =>{
      const response = await fetch(`https://ihaf-backend.vercel.app/get-new-memberById/${_id}`)
      const data = await response.json();
    if(data?.data?.isAdminApproved || data?.isAdminApproved === true){
      setUserData(data?.data)
      console.log(userData,'api-successfully')
    }else{
      console.log(storedData?.data?.isAdminApproved || storedData?.isAdminApproved,'local-successfully')
    }
    }
    fetchData()
  },[])

  console.log(userData?.memberID, 'api')
 const memberID = userData?.memberID || storedData?.memberID

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);

  const [data, setdata] = useState({
    memberID:memberID ||"",
    issues: '',
    imageURL: '',
  });

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

  useEffect(() => {
    // Update data when memberID changes
    setdata((prevData) => ({
      ...prevData,
      memberID: memberID || '',
    }));
  }, [memberID]);

  const handleFileChange = async (e) => {
 
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ivs6otkx');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData);
      const secureUrl = response.data.secure_url;
      console.log(secureUrl, "upload");
      
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
      
        handleSuccess();
        setdata( {issues:"",imageURL:""});
        
       
      } else {
        const errorResponse = await res.json();
        console.error('Error Response:', errorResponse);
        if (errorResponse) {
          // Show your popup or perform any action you want
          setErrorPopupOpen(true);
          
        }
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
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.5')}</p>
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
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.8')} *</p>
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
     
      {isSuccessPopupOpen && (
        <div className="success-popup">
          <p>You submitted your petition successful!</p>
          <p>Our support team will contact you and solve your petition quickly as possible.</p>
          <button className="close-button" onClick={() => setSuccessPopupOpen(false)}>Close</button>
        </div>
      )},
       {isErrorPopupOpen && (
        <div className="success-popup">
          <p>Incomplete form submission !</p>
          
          <button className="close-button" onClick={() => setErrorPopupOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Petition;


