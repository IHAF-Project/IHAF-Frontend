import React, { useEffect, useRef } from 'react';
import image1 from "../images/MicrosoftTeams-image 1.png";
import "./About.css";
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import  Navbar from "../component/NavBar/Navbar"
import Footer from "../component/Footer/Footer"
import useScrollToTop from '../component/Hooks/useScrollToTop';
function About() {
  const textRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';

  useEffect(() => {
    const elements = Array.from(textRef.current); 
    elements.forEach((lineText, i) => {
      const split = new SplitType(lineText, { types: 'lines' });
      split.lines.map((line) => {
        const wrapEl = document.createElement('div');
        wrapEl.classList.add('line-wrapper');
        line.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(line);
      });

      gsap.from(split.lines, {
        opacity: 0,
        x: '160',
        duration: 1.25,
        repeat: -1,
        ease: 'power3.inOut',
        stagger: { amount: 0.3, from: '0' },
        scrollTrigger: {
          trigger: lineText,
          start: 'bottom top ',
          end: 'bottom bottom',
          toggleActions: 'restart none none none',
        },
      });
    });
  }, []);
useScrollToTop();
  return (
    <div className='about-container'>
       <Navbar/>
      <div className='about-main-cont'>
        <div>
          <img src={image1} alt='' className='about-image' />
        </div>
        <div>
          <p className={`${isTamilLanguage ? 'heading-about-tamil' : 'heading-about'}`} ref={textRef}>
            {t('hello.37')}
          </p>
          <p className='about-text-cont'>INTRAGRATED INFGFHF FEDRATION FOR AMBEDKAR</p>
        </div>
      </div>
      <div className='about-main2-cont'>
        <div className='why-about-cont'>
          <p className={`${isTamilLanguage ? 'why-content-tamil' : 'why-content'}`}>{t('hello.38')}</p>
          <p className={`${isTamilLanguage ? 'integral-human-tamil' : 'integral-human'}`}>{t('hello.40')}</p>
        </div>
        <div>
          <p className={`${isTamilLanguage ? 'content-why-tamil' : 'content-why'}`}>{t('hello.39')}</p>
        </div>
      </div>
      <div className='about-main-cont'>
        <p className={`${isTamilLanguage ? 'founting-price-tamil' : 'founting-price'}`}>{t('hello.44')}</p>
        <p className={`${isTamilLanguage ? 'founding-content-tamil' : 'founding-content'}`}>{t('hello.41')}</p>
      </div>
      <div className='about-main2-cont'>
        <p className={`${isTamilLanguage ? 'achiving-head-tamil' : 'achiving-head'}`}>{t('hello.42')}</p>
        <p className={`${isTamilLanguage ? 'providing-text-tamil' : 'providing-text'}`}>{t('hello.43')}</p>
      </div>
     <Footer/>
    </div>
  );
}

export default About;
