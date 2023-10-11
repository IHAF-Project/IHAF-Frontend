import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { gsap } from 'gsap';

import image2 from '../images/modiji.jpg';

import image3 from '../images/amitcha.jpg';

import image4 from '../images/annamalai-bjp-1.jpeg';

import image1 from '../images/Arrow 1 (1).png';

import './Page4.css';

 

const Page4 = () => {

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

   

      const hiddenElements = document.querySelectorAll('.hidden-7');

      hiddenElements.forEach((el) => observer.observe(el));

 

      const hiddenElements1 = document.querySelectorAll('.hidden-8');

      hiddenElements1.forEach((el) => observer.observe(el));

     

      return () => {

        hiddenElements.forEach((el) => observer.unobserve(el));

       hiddenElements1.forEach((el) => observer.unobserve(el));

      };

    }, []);

 

  return (

    <div className='page4-container'>

      <div className='page-4-image-text'>

        <img src={image1} alt='' className='page4-image1 hidden-7' />

        <button className={`hidden-8 ${isTamilLanguage ? 'tamil-page-4-btn' : 'page-4-btn'}`}>

          {t('hello.2')}

        </button>

      </div>

      <div className='page4-main-cont'>

        <div className='logos-slide'>

        <div className='page4-main'>

          <div className='page4-main-C'>

            <div className='img-cover4'>

              <img src={image2} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C'>

          <div className='img-cover4'>

              <img src={image3} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C'>

          <div className='img-cover4'>

              <img src={image4} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='logos-slide'>

        <div className='page4-main'>

          <div className='page4-main-C'>

          <div className='img-cover4'>

              <img src={image2} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C'>

          <div className='img-cover4'>

              <img src={image3} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C'>

          <div className='img-cover4'>

              <img src={image4} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      </div>

 

      <div className='page4-main-cont1'>

        <div className='logos-slide1'>

        <div className='page4-main'>

          <div className='page4-main-C1'>

          <div className='img-cover4'>

              <img src={image2} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C1'>

          <div className='img-cover4'>

              <img src={image3} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C1'>

          <div className='img-cover4'>

              <img src={image4} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='logos-slide1'>

        <div className='page4-main'>

          <div className='page4-main-C1'>

          <div className='img-cover4'>

              <img src={image2} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C1'>

          <div className='img-cover4'>

              <img src={image3} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

        <div className='page4-main'>

          <div className='page4-main-C1'>

          <div className='img-cover4'>

              <img src={image4} alt='' className='page4-image2' />

            </div>

            <div className='page4-p-by'>

              <p className={`${isTamilLanguage ? 'tamil-page4-p' : 'page4-p'}`}>

                {t('hello.1')}

              </p>

              <div className='page4-by'>

                <p className='by'>by</p>

                <p>Rajinikanth</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      </div>

    </div>

  );

};

 

export default Page4;

 