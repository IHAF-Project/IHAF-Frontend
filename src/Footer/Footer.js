import React from 'react'
import image1 from "../images/MicrosoftTeams-image 1.png"
import "./Footer.css"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
function Footer() {
    const {t, i18n} = useTranslation ();
    
    const isTamilLanguage = i18n.language === 'ta';
  return (
    <div className='Footer-container'>
    <div className='Footer-container-main'>
      <div className='footer-logo'>
         <img src={image1} alt='' className='footer-image1'></img>
        </div> 
      <div className='footer-copy-rights'>
         <p className={`${isTamilLanguage ? 'Footer-integral-tamil' : 'Footer-integral'} `} >{t('hello.17')}</p>
         <div className='footer-social'>
           <div className='footer-join-us'>
              <div>
                 <Link to="/member">
                 <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'} `}>{t('hello.19')}</p>
                 </Link>
                 <Link to="/home">
                 <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}>{t('hello.20')}</p>
                 </Link>
                 <Link to="/socialmedia">
                 <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}>{t('hello.21')}</p>
                 </Link>
              </div>
              <div>
                <Link to="/petition">
                <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}>{t('hello.22')}</p>
                </Link>
                <Link to="/leader">
                <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}>{t('hello.23')}</p>
                </Link>
                <Link to="/Feedback">
                <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}>{t('hello.24')}</p>
                </Link>
              </div>
            </div> 
            <div className='footer-text-address-container'>
               <p className='footer-text-Addtress-head'>{t('hello.25')}</p> 
               <p className={`${isTamilLanguage ? 'footer-text-Addtress-tamil' : 'footer-text-Addtress'}`}>{t('hello.26')}</p>
            </div>
         </div>
         <p className='Footer-copy-text'>{t('hello.18')}</p>
         
      </div>
    </div>
    </div>
  )
}

export default Footer
