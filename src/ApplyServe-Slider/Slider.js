import React, { useEffect, useState } from 'react'
import './Slider.css';
import { useTranslation } from 'react-i18next';
import ar from '../images/tri.png'
import surya from '../images/bg-modi 1 (2).png'
import law1 from '../images/law1.jpg'
import law2 from '../images/law2.jpg'

import law4 from '../images/law4.jpg'
import law3 from "../images/MicrosoftTeams-image (23).png"

import { Link } from 'react-router-dom';
const Cards = () => {
    const { t, i18n } = useTranslation();
    const isTamilLanguage = i18n.language === 'ta';

    const [userData, setUserData] = useState(null);

    const storedData = JSON.parse(localStorage.getItem('userData'));
    const _id = storedData?.data?._id || storedData?._id
    const adminok = storedData?.data?.isAdminApproved || storedData?.isAdminApproved
    
    useEffect (() =>{
   

      if( adminok === true){
        const data= storedData
        setUserData(data?.data)
        console.log(userData,'api-successfully')
      }else{
        console.log(storedData?.data?.isAdminApproved || storedData?.isAdminApproved,'local-successfully')
      }

    },[])

    const phoneNumber =storedData?.data?.phoneNumber || userData?.phoneNumber || storedData?.phoneNumber
    const memberId =userData?.memberID || storedData?.data?.memberID ||  storedData?.memberID
   

  return (
    <div className='main6 abc' id='Leaders'>
        <div className='main-left6'>
        <p className={`title-6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}> {t('Page6.1')}</p>  
        <p className={`main-details6  ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.2')} </p>
       
      
        {phoneNumber ? (
  memberId ? (
    <Link to='/applyserve' className='w-auto h-auto '>
      <button className='main6-btn' style={{ fontSize: isTamilLanguage ? '12px' : '' }}>{t('Page6.3')} <img src={ar} alt='icon' /></button>
    </Link>
  ) : (
    <Link to={`/member/${_id}`}>
      <button className='main6-btn' style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.3')} <img src={ar} alt='icon' /></button>
    </Link>
  )
) : (
  <Link to="/login">
    <button className='main6-btn' style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.3')} <img src={ar} alt='icon' /></button>
  </Link>
)}

      
   </div>
  
<div className='main-right6'>
  <div className="wrapper">
    <div className="outer">
    

<div className="card6" style={{ '--delay': '-5' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.8')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.9')}</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.16')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {surya} alt=""/></div>
  </div>
</div>

</div>
<div className="card6" style={{ '--delay': '-4' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.10')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.11')}</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.17')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law4} alt="elon"/></div>
  </div>
</div>

</div>
<div className="card6" style={{ '--delay': '-3' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.12')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.13')}</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.18')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law3} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '-2' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.22')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>({t('Page6.23')})</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.24')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law2} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '-1' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.25')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>({t('Page6.26')})</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.24')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law1} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '1' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.25')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>({t('Page6.26')})</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.30')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law1} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '2' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.22')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>({t('Page6.23')})</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.33')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law2} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '3' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.34')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>({t('Page6.35')})</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.36')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law3} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '4' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.10')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>({t('Page6.11')})</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.39')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {law4} alt="bill"/></div>
  </div>
</div>
</div>
<div className="card6" style={{ '--delay': '5' }}>
<div className="content6">
<div className="left6">
    <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.4')}</span>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.5')}</p>
    <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.42')}</p>
  </div>
  <div className='right6'>
  <div className="img6"><img src= {surya} alt="bill"/></div>
  </div>
</div>
</div>

    </div>
  </div>
  </div>
        
    </div>
  )
}

export default Cards


