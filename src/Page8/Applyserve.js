import React, { useState } from 'react';
import "./Applyserve.css"
import { useTranslation } from 'react-i18next'
import useScrollToTop from '../COMPONENTS/Hooks/useScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Applyserve() {

  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const posting = [ 'Secretary','cief','sub']
  const tamilNaduDistricts = [
    'Ariyalur',
    'Chengalpattu',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kallakurichi',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Ranipet',
    'Salem',
    'Sivaganga',
    'Tenkasi',
    'Thanjavur',
    'Theni',
    'Thoothukudi',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tirupathur',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Tiruvarur',
    'Vellore',
    'Viluppuram',
    'Virudhunagar',
  ];
  

const storedData =JSON.parse(localStorage.getItem('userData'));
const memberID =storedData?.data?.memberID

  const [serve, setServe] = useState({
    memberID: memberID || " ",
    postingLocation: " ",
    postingName: " ",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const Response = await fetch("https://ihaf-backend.vercel.app/new-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serve),
      });

      if (Response.ok) {
        const res = await Response.json();
        setServe(res);
        toast.success('Application send Successfully',{
          position:'top-right'
        });
        console.log(res, "Apply to serve datas");
      } else {
        const er = await Response.json();
        console.error(er, "error getting");
        toast.error('You are banned from LeaderShip and cannot apply for a leader posting',{
          position:'top-right'
        });
       
      }
    } catch (error) {
      console.error("error", error);
      toast.error('Somthing went Wrong',{
        position:'top-right'
      });
    }
  }
useScrollToTop();
  return (
    <div className='Applyserve-container'>
      
      <p className={`${isTamilLanguage ? 'apply-toserve-head-tamil' : 'apply-toserve-head'}`}>{t("hello.31")}</p>
      <p className={`${isTamilLanguage ? 'apply-content-tamil' : 'apply-content'}`}>{t('hello.32')}</p>
      <div className='Apply-serve-main'>
        <div className='apply-serve-cont'>
          <div className='apply-serve-name'>
            <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.33')}</p> <p className='equalen'>:</p>
          </div>
          <div>
            <input
              type='text'
              className='serve-name'
              name='name'
              value={serve.memberID}
              disabled
              onChange={(e) => setServe({ ...serve, name: e.target.value })}
            />
          </div>
        </div>
        <div className='apply-serve-cont'>
          <div className='apply-serve-name'>
            <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.34')}</p> <p className='equalen'>:</p>
          </div>
          <div>
            <div className='data5'>
              <select
                value={serve.postingLocation}
                name='postingLocation'
                onChange={(e) => setServe({ ...serve, postingLocation: e.target.value })}
                className='serve-name-P'
              >
                <option value="">Select an option</option>
                {tamilNaduDistricts.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='apply-serve-cont'>
          <div className='apply-serve-name'>
            <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.35')}</p> <p className='equalen'>:</p>
          </div>
          <div>
            <div className='data5'>
              <select
                value={serve.postingName}
                name='postingName'
                onChange={(e) => setServe({ ...serve, postingName: e.target.value })}
                className='serve-name-N'
              >
                <option value="">Select an option</option>
                {posting.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className='serve-joinNow' onClick={handlesubmit}>Join Now</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Applyserve
