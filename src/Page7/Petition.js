import React,{useEffect} from 'react'
import "./Petition.css"
import image1 from "../images/Arrow 1 (1).png"
import { useTranslation } from 'react-i18next';

function Petition() {
  const { t,i18n } = useTranslation();
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
    
      const hiddenElements = document.querySelectorAll('.hidden-13');
      hiddenElements.forEach((el) => observer.observe(el));

      const hiddenElements1 = document.querySelectorAll('.hidden-14');
      hiddenElements1.forEach((el) => observer.observe(el));
      return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        hiddenElements1.forEach((el) => observer.unobserve(el));
       
      };
    }, []); 
  return (
    <div className='page7-petition-container abc'>
      <div className='page-7-image-text'>
        <img src={image1} alt='' className='page4-image1 hidden-13'></img>
        <p className={`hidden-14 ${isTamilLanguage ? 'petition-7-btn-tamil' : 'petition-7-btn'}`}>{t('hello.3')}</p> 
      </div>
      
      <div className='page7-input-container'>
       <div className='petition-inputs'>
        <div className='petition-input-cont'> 
         <div className='petition-in-c'>   <div><p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.5')} </p> </div> <div className='equal' >:</div></div>
         <input className='input-name-petition' type='text'></input>
        </div>
        <div className='petition-input-cont'>
         <div className='petition-in-c'><div>  <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.7')} </p> </div> <div className='equal' >:</div></div>
         <input className='input-contact-petition' type='text'></input>
        </div>
        <div className='petition-input-cont'>
        <div className='petition-in-c' ><div> <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.8')} </p> </div> <div className='equal'>:</div></div>
         <textarea className='input-address-petition' type='Address'></textarea>
        </div>
        <div className='petition-input-cont'>
          <div className='petition-in-c'><div> <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.9')} </p> </div> <div className='equal' >:</div></div>
         <textarea className='input-address-petition' typeof='message'></textarea>
        </div>
        <div className='petition-input-cont'>
          <div className='petition-in-c'><div> <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.27')} </p> </div> <div className='equal' >:</div></div>
          <div className='input-audio-petition'>
 
  <div>
      <input
      className='file-upload-petition'
        type="file"
        id="file"
      />
  </div>
</div>
     </div>
        <div className='page7-submit'>
      <button className='petition-submit-btn'>
          {t('hello.6')}
        </button>
      </div>
       </div>
      
      </div>
     
    </div>
  )
}

export default Petition
