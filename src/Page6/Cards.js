import React,{useEffect} from 'react'
import './Cards.css';
import { useTranslation } from 'react-i18next';
import ar from '../imgg/Frame 247.png'
import logo from '../images/IHAF ORGINAL LOGO 1.png'
const Cards = () => {
    const { t, i18n } = useTranslation();
    const isTamilLanguage = i18n.language === 'ta';
    
  
  return (
    <div className='main6 abc'>
        <div className='main-left6'>
            <p className={`title-6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}> {t('Page6.1')}</p>
           
            <p className={`main-details6  ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.2')} </p>
            <button className='main6-btn' style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.3')} <img src={ar} alt='icon'></img></button>
        </div>
        
<div className='main-right6'>
  <div className="wrapper">
    <div className="outer">
      <div className="card6" style={{ '--delay': '-1' }}>
        <div className="content6">
          
          <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.4')}</span>
            <p>{t('Page6.5')}</p>
            <p className={`details6${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1.2vw' : '' }}>{t('Page6.14')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src={''} alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '0' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.6')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.7')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1.5vw' : '' }}>{t('Page6.15')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src={''} alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '1' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.8')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.9')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.16')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src={''} alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '2' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.10')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.11')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.17')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src={''} alt="elon"/></div>
          </div>
        </div>
       
      </div>
      <div className="card6" style={{ '--delay': '2' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.12')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.13')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.18')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src={''} alt="bill"/></div>
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