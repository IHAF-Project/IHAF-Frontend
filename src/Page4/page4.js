import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../images/Arrow 1 (1).png';
import './Page4.css';
import axios from 'axios';

const Page4 = () => {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle('show');
          observer.unobserve(entry.target);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-7');
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElements1 = document.querySelectorAll('.hidden-8');
    hiddenElements1.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements1.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')

    function addAnimation() {
      scrollers.forEach((scroller) => {
        
        scroller.setAttribute('data-animated', true);
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    addAnimation();
  }, []);

  const [feeditems, setFeedItems] = useState([]);

   useEffect(() => {

  const fetchItems = async () => {

    try {

      const response = await axios.get('https://ihaf-backend.vercel.app/get-all-feedback');

      const  f1 = response.data

      setFeedItems(f1)

      console.log (f1, "fetched items is received")
      
    } catch (error) {
      
      console.error (error, "Failed to fetch items")

    }

  }
       
    fetchItems( )

    }, []);

   

  return (
    <div className='page4-container' >
      <div className='page-4-image-text'>
        <img src={image1} alt='' className='page4-image1 hidden-7' />
        <button className={`hidden-8 ${isTamilLanguage ? 'tamil-page-4-btn' : 'page-4-btn'}`}>
          {t('hello.2')}
        </button>
      </div>
      <div className='page4-main-cont1'>
        <div className='scroller' data-direction="left" data-speed="slow" >
          <div className='scroller__inner'>
            {feeditems.map(item => (
              <div className='page4-main' key={item.id}>
                <div className='page4-main-C'>
                  <div className='img-cover4'>
                    <img src={item.profileURL} alt='' className='page4-image2' />
                  </div>
                  <div className='page4-p-by'>
                    <p className="page4-p">
                      {item.content}
                    </p>
                    <div className='page4-by'>
                      <p className='by'>by</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))},
              {feeditems.map(item => (
              <div className='page4-main' key={item.id}>
                <div className='page4-main-C'>
                  <div className='img-cover4'>
                    <img src={item.profileURL} alt='' className='page4-image2' />
                  </div>
                  <div className='page4-p-by'>
                    <p className="page4-p">
                      {item.content}
                    </p>
                    <div className='page4-by'>
                      <p className='by'>by</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
