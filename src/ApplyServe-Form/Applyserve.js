import React, { useState } from 'react';
import "./Applyserve.css"
import { useTranslation } from 'react-i18next'
import useScrollToTop from '../component/Hooks/useScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/NavBar/Navbar';

function Applyserve() {

  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const posting = [ 'Secretary','cief','sub']
  
  const tamilNaduDistricts = [ 'Ariyalur', 'Chennai', 'Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kanchipuram','Kanyakumari','Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam','Namakkal', 'Perambalur', 'Pudukkottai','Ramanathapuram', 'Salem', 'Sivaganga', 'Thanjavur','Theni','Thiruvallur','Thiruvarur','Thoothukudi (Tuticorin)','Tiruchirappalli', 'Tirunelveli','Tiruppur','Tiruvannamalai','Vellore','Viluppuram','Virudhunagar','Tenkasi','Chengalpattu','Ranipet','Tirupathur','Kallakurichi','Mayiladuthurai','Dindigul',
  ];
  
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const memberID=storedData?.data?.memberID || storedData?.memberID

  const navigate = useNavigate()

  let [serve, setServe] = useState({
    memberID: memberID || "",
    postingLocation: "",
    postingName: "",
   
  });

  const handlesubmit = async (e) => {
  
    e.preventDefault();
    if(serve.postingLocation ==="" || serve.postingName ===""){
      toast.success('Incomplete form submission',{
        position:'top-right'
        
      });
      return

    }

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
        setServe({
         
          postingLocation: "",
          postingName: "",
          
        });
        console.log(res, "Apply to serve datas");
      } else {
        const er = await Response.json();
        console.error(er, "error getting");
        toast.success(`You are ${er.message}.`,{
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
    <div>
      <Navbar></Navbar>
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
              name='MemberID'
              value={serve.memberID}
              
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
                <option value="">Posting Location</option>
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
                <option value="">Posting Name</option>
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
    </div>
  )
}

export default Applyserve
