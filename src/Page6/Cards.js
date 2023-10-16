import React from 'react'
import './Cards.css';
import { useTranslation } from 'react-i18next';
import ar from '../imgg/Frame 247.png'
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
            <p className={`details6${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.14')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="https://www.lotustimes.org/wp-content/uploads/2019/09/20190904_150020.jpg" alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '0' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.6')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.7')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.14')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="https://th.bing.com/th/id/R.165f1b90a6015feb1983f0756296479f?rik=lVjBO8zAJviCJA&riu=http%3a%2f%2fharyanaassembly.gov.in%2fwp-content%2fuploads%2f2019%2f11%2fSITA-RAM.jpg&ehk=VrkmWQa116UYaHOAEASle%2fhY4m64E4ClN0FLNULcuuM%3d&risl=&pid=ImgRaw&r=0" alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '1' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.8')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.9')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.14')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="https://wd-image.webdunia.com/image-conversion/process-aws.php?url=https://nonprod-media.webdunia.com/public_html/_media/ta/img/article/2020-08/04/full/1596516607-4602.jpg&w=&h=&outtype=webp" alt=""/></div>
          </div>
        </div>
        
      </div>
      <div className="card6" style={{ '--delay': '2' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.10')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.11')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.14')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src="https://ourneta.com/wp-content/uploads/2020/03/Shekhar-Govindrao-Nikam-Page.jpg" alt="elon"/></div>
          </div>
        </div>
       
      </div>
      <div className="card6" style={{ '--delay': '2' }}>
        <div className="content6">
        <div className="left6">
            <span className={`name6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.12')}</span>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`}>{t('Page6.13')}</p>
            <p className={`details6 ${isTamilLanguage ? 'tamil20-font6' : ''}`} style={{ fontSize: isTamilLanguage ? '1vw' : '' }}>{t('Page6.14')}</p>
          </div>
          <div className='right6'>
          <div className="img6"><img src='https://cdn.thewire.in/wp-content/uploads/2022/01/29125242/VINOJ-P-SELVAM.jpg' alt="bill"/></div>
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