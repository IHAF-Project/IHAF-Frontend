import React, {useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.png'
import './Federation.css'; 

const Home = () => {

  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';

  
  useEffect(() => {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Toggle the 'show' class when the element is in view
          entry.target.classList.toggle('show');
          observer.unobserve(entry.target);
        }
      });
    });
  
    // Observe elements with the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  
    // Observe elements with the class 'hidden-1'
    const hiddenElements1 = document.querySelectorAll('.hidden-1');
    hiddenElements1.forEach((el) => observer.observe(el));
  
    // Clean up by unobserving elements when the component is unmounted
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements1.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div>
      <div className='container-2'>
        <div className='part1-2'>
          <img src="\images\Frame 22 (1).png" alt="MyImage" ></img>
          <p className={`tit-2 ${isTamilLanguage ? 'tamil18-font2' : ''}`}>{t('Welcome.1')}</p>
        </div>
        <div className='part2-2'>
          <div class='hidden box-2 text-box'>
            <p className={`det-2 ${isTamilLanguage ? 'tamil18-font2' : ''}`}>{t('Welcome.2')}</p>
          </div>
          <div className='hidden-1 right-logo-2'>
            <img src={logo} alt="MyImage" />
          </div>
        </div>
        <div className='part3-2'>
          <img src="\images\star2.png" alt="MyImage" ></img>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
