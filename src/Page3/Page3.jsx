import './Page3.css'
import Arrow from '../Assets/Arrow 1.png'
import  { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import twitter from "../Assets/Twitter.svg"
import facebook from "../Assets/Instagram (3).png"
import youtube from "../Assets/Youtube.svg"
import TabContent1 from '../TabContent/TabContent1';
import TabContent2 from '../TabContent/TabContent2';
import TabContent3 from '../TabContent/TabContent3';


const Page3 = () => {

   const [activeTab, setActiveTab] = useState(0);
   const [isFrozen, setIsFrozen] = useState(false);
   const { t, i18n } = useTranslation();
   const currentLanguage = i18n.language;


   const handleTabClick = (index) => {
     setActiveTab(index);
  };
  const handleMouseEnter = () => {
   setIsFrozen(true);
   };

  const handleMouseLeave = () => {
     setIsFrozen(false);
   };
  

  // useEffect(() => {
  //   let interval;
  //   if (!isFrozen) {
  //     interval = setInterval(() => {
  //       const active = (activeTab + 1) % 3;
  //       setActiveTab(active);
  //     }, 3000); 
  //   }

  //   return () => clearInterval(interval);
  // }, [activeTab, isFrozen]); 


//animaton for scrolling to reach the current page
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting ) {
        entry.target.classList.toggle('show');
        entry.target.classList.toggle('show-1')
        observer.unobserve(entry.target);
      }
    });
  });
  
    const hiddenElements = document.querySelectorAll('.hidden-2');
    hiddenElements.forEach((el) => observer.observe(el));

    

    const hiddenElements4 = document.querySelectorAll('.hidden-6');
    hiddenElements4.forEach((el) => observer.observe(el));
    

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements4.forEach((el) => observer.unobserve(el));
    };
  }, []); 

  return (
    <div className='social-page-container' id='Social'>
     <div className='social-page-tp-con'>
      <div className='social-page-tp'>
      <p> {currentLanguage === 'ta' ? t('pageThree.1') : t('Social Media')}</p>
       <img src={Arrow} alt='Arrow' class='hidden-2'/>
      </div>
     </div>
     <div className='social-page-btm-con'>
     <div className='social-page-btm'>
      <div className="tabs">
          <div   className={`tab  ${activeTab === 0 ? 'Tabactive ' : ''}`}  onClick={() => handleTabClick(0)}> 
          <div className='youtube-box '>
         <p>{currentLanguage === 'ta' ? t('pageThree.4') : t('Youtube')}</p>
         <img src={youtube} alt='youtube' />
         </div>
         </div>
         <div 
          className={`tab ${activeTab === 1 ? 'Tabactive' : ''}`}
          onClick={() => handleTabClick(1)}
        >
       <div className='facebook-box'>
      <p> {currentLanguage === 'ta' ? t('pageThree.3') : t('Instagram')}</p>
       <img src={facebook} alt='facebook' />
      </div>
         </div>
         <div
          className={`tab ${activeTab === 2 ? 'Tabactive' : ''} `  }
          onClick={() => handleTabClick(2)}
        >
          <div className='twitter-box '>
    <p>{currentLanguage === 'ta' ? t('pageThree.5') : t('Twitter')}</p>
     <img src={twitter} alt='twitter' />
          </div>
         </div>
      </div>
     
      <div className="tab-content hidden-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {activeTab === 0 && <TabContent2 embedId="Cz6P9g5Z9C8" />}
        {activeTab === 1 && <TabContent1 />}  
        {activeTab === 2 && <TabContent3 />}
      </div>
     </div>
     </div>
    </div>
  )
}

export default Page3