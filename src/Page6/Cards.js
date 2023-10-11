import React,{useEffect} from 'react'
import './Cards.css';
import { useTranslation } from 'react-i18next';
const Cards = () => {
    const { t, i18n } = useTranslation();
    const isTamilLanguage = i18n.language === 'ta';
    
  
  return (
    <div className='main6 abc'>
        <div className='main-left6'>
            <p className={`title-6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}> {t('Page6.1')}</p>
           
            <p className={`main-details6  ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.2')} </p>
            <button className='main6-btn' style={{ fontSize: isTamilLanguage ? '1.2vw' : '' }}>{t('Page6.3')} <img src='\images\Up arrow.png' alt='icon'></img></button>
        </div>
        
<div className='main-right6'>
  <div className="wrapper">
    <div className="outer">
      <div className="card6" style={{ '--delay': '-1' }}>
        <div className="content6">
          
          <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>Ramesh kumar</span>
            <p>(President of IHAF)</p>
            <p className={`details6${isTamilLanguage ? 'tamil20-font6' : ''}`}>He is one of reson ihad standing in ground for poor and rich in funding and all providingd as a memeber and a client</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="\images\ty.jpg" alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '0' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>Ramesh kumar</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>(President of IHAF)</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>He is one of reson ihad standing in ground for poor and rich in funding and all providingd as a memeber and a client</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="\images\tt.jpg" alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '1' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>Ramesh kumar</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>(President of IHAF)</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>He is one of reson ihad standing in ground for poor and rich in funding and all providingd as a memeber and a client</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="\images\waran.jpg" alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '2' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>Ramesh kumar</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>(President of IHAF)</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>He is one of reson ihad standing in ground for poor and rich in funding and all providingd as a memeber and a client</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="\images\elon.jpg" alt="elon"/></div>
          </div>
        </div>
       
      </div>
      <div className="card6" style={{ '--delay': '2' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>Ramesh kumar</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>(President of IHAF)</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>He is one of reson ihad standing in ground for poor and rich in funding and all providingd as a memeber and a client</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src='\images\bill.jpg' alt="bill"/></div>
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