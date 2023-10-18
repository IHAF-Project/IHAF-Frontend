import React, { useRef,useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './Home.css'; 

const Home = () => {
  const textRef = useRef(null);
  const text1Ref = useRef(null); 
  const contentRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting ) {
          entry.target.classList.toggle('show');
          observer.unobserve(entry.target);
        }
      });
    });
    
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));

      const hiddenElements1 = document.querySelectorAll('.hidden-1');
      hiddenElements1.forEach((el) => observer.observe(el));
      return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        hiddenElements1.forEach((el) => observer.unobserve(el));
       
      };
    }, []); 

  return (
    <div>
      <div className='container-2'>
        <div className='part1-2'>
          <img src="\images\Frame 22 (1).png" alt="MyImage" ref={text1Ref}></img>
          <p className={`tit-2 ${isTamilLanguage ? 'tamil18-font2' : ''}`}>{t('Welcome.1')}</p>
        </div>
        <div className='part2-2'>
          <div  ref={contentRef} class='hidden box-2 text-box'>
            <p className={`det-2 ${isTamilLanguage ? 'tamil18-font2' : ''}`}>{t('Welcome.2')}</p>
          </div>
          <div className='hidden-1 right-logo-2'>
            <img src="\images\MicrosoftTeams-image (22).png" alt="MyImage" />
          </div>
        </div>
        <div className='part3-2'>
          <img src="\images\star2.png" alt="MyImage" ref={textRef}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
