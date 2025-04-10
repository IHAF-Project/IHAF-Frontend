import React from 'react'
import image1 from "../../images/MicrosoftTeams-image 1.png"
import "./Footer.css"
import copy from "../../Assets/copy.png"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
function Footer() {
    const {t, i18n} = useTranslation ();
   
    const isTamilLanguage = i18n.language === 'ta';
 
    const storedData = JSON.parse(localStorage.getItem('userData'));
    const _id = storedData?.data?._id || storedData?._id
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
              <div className='foot-bt-content-1'>
               {_id ? (
                 <Link to={`/member/${_id}`}>
                 <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'} `}>{t('hello.19')}</p>
                 </Link>
               ):(
               
                <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'} `}>{t('hello.19')}</p>
               
               )}
               <Link to='/'>
                 <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`} >{t('hello.20')}</p>
                 </Link>
             
                 <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}><a href='#Social' style={{textDecoration:'none',color:'white'}}>{t('hello.21')}</a></p>
               
              </div>
              <div className='foot-bt-content-2'>
               
                <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}><a href='#Petition' style={{textDecoration:'none',color:'white'}}>{t('hello.22')}</a></p>
             
             
                <p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}><a href='#Leaders' style={{textDecoration:'none',color:'white'}}>{t('hello.23')}</a></p>
               
             
               <Link to='Feedback'><p className={`${isTamilLanguage ? 'footer-home-tamil': 'footer-home'}`}>{t('hello.24')}</p></Link>
               
              </div>
            </div>
            <div className='footer-text-address-container'>
               <p className='footer-text-Addtress-head'>{t('hello.25')}</p>
               <p className={`${isTamilLanguage ? 'footer-text-Addtress-tamil' : 'footer-text-Addtress'}`}>{t('hello.26')}</p>
            </div>
         </div>
         <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5px"}}>
          <p  style={{fontSize: "20px", color: "white"}}>©</p>
         <p className='Footer-copy-text'>{t('hello.18')}</p>
         </div>
         
         
      </div>
    </div>
    </div>
  )
}
 
export default Footer