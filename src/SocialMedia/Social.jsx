import './Social.css'
import Arrow from '../Assets/Arrow 1.png'
import  { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import twitter from "../Assets/Twitter.svg"
import facebook from "../Assets/Instagram (3).png"
import youtube from "../Assets/Youtube.svg"
import TabContent1 from '../SocialMedia/TabContent/Instagram';
import TabContent2 from '../SocialMedia/TabContent/Youtube';
import TabContent3 from '../SocialMedia/TabContent/Twitter';


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
      <div className="tabs"  >
          <div   className={`tab  ${activeTab === 0 ? 'Tabactive ' : ''}`} style={{padding:'5px'}} onClick={() => handleTabClick(0)}> 
          <div className='youtube-box '>
         <p>{currentLanguage === 'ta' ? t('pageThree.4') : t('Youtube')}</p>
         <img src={youtube} alt='youtube' />
         </div>
         </div>
         <div 
          className={`tab ${activeTab === 1 ? 'Tabactive' : ''}`}
          onClick={() => handleTabClick(1)}
          style={{padding:'5px'}}
        >
       <div className='facebook-box'>
      <p> {currentLanguage === 'ta' ? t('pageThree.3') : t('Instagram')}</p>
       <img src={facebook} alt='facebook' />
      </div>
         </div>
         <div
          className={`tab ${activeTab === 2 ? 'Tabactive' : ''} `  }
          onClick={() => handleTabClick(2)}
          style={{padding:'5px'}}
        >
          <div className='twitter-box '>
    <p>{currentLanguage === 'ta' ? t('pageThree.5') : t('X')}</p>
     <img src= "https://res.cloudinary.com/dbjlbongr/image/upload/v1720692439/x_nawxaw.png" alt='twitter' />
          </div>
         </div>
      </div>
     
      <div className="tab-content hidden-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {activeTab === 0 && <TabContent2 />}
        {activeTab === 1 && <TabContent1 />}  
        {activeTab === 2 && <TabContent3 />}
      </div>
     </div>
     </div>
    </div>
  )
}

export default Page3