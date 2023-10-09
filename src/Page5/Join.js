import React,{useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import './Join.css'; // Import your CSS file

const Join = () => {
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
    
      const hiddenElements = document.querySelectorAll('.hidden-9');
      hiddenElements.forEach((el) => observer.observe(el));

      const hiddenElements1 = document.querySelectorAll('.hidden-10');
      hiddenElements1.forEach((el) => observer.observe(el));

      const hiddenElements2 = document.querySelectorAll('.hidden-11');
      hiddenElements2.forEach((el) => observer.observe(el));

      const hiddenElements3 = document.querySelectorAll('.hidden-12');
      hiddenElements3.forEach((el) => observer.observe(el));
      
      return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
       hiddenElements1.forEach((el) => observer.unobserve(el));
       hiddenElements2.forEach((el) => observer.unobserve(el));
       hiddenElements3.forEach((el) => observer.unobserve(el));
      };
    }, []); 
    return (
        <div>
            <div className={`container-5 ${isTamilLanguage ? 'tamil20-font5' : ''}`}>
                <div className='part1-5'>
                    <p className={`hidden-9 title-5 ${isTamilLanguage ? 'tamil20-font5' : ''}`}>
                        {t('Page5.1')}
                    </p>
                    
                    <img src='\images\page5-arrow.png' alt='arrow' className='hidden-10'></img>
                </div>
                <div className='part2-5'>
                    <div className='left-5 hidden-11'>
                        <img src='\images\page5.png' alt='ambedkar'></img>
                    </div>
                    <div className='right-5 hidden-12'>
                        <p className={`details-5 ${isTamilLanguage ? 'tamil18-font5' : ''}`}>
                            {t('Page5.2')}
                        </p>
                        <button className={`button-5 ${isTamilLanguage ? 'tamil20-font5' : ''}`}>
                            <img src='\images\page5-icon.png' alt='icon'></img>
                            {t('Page5.3')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;
