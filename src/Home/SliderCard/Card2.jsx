import { useTranslation } from 'react-i18next'
import Quets from "../../Assets/Frame 14.png"

function Card2() {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const tamilLanguage =i18n.language === 'ta'
    
  return (
    <div  className={`intro-slide-2`}>
    <div className="intro-slide-content">
     <div className="intro-slide-content-right">
     <div className={`${tamilLanguage ? 'intro-slide-content-right-top-tamil' : 'intro-slide-content-right-top'}`}>
      <p>IHAF</p>
      <span>
      {currentLanguage === 'ta' ? t('pageOne.1') : t('Integral Humanism Ambedkar Federation')}
      </span>
     </div>
     </div>
     <div className="intro-slide-content-left">
      <div className="intro-slide-content-quates-1">
     <div className="Quates-img-1">
     <img src={Quets} alt='quates' />
     </div>
      <p className={`${tamilLanguage ? 'Quates-tamil' : 'Quates-english'}`}>{t('pageOne.2') }</p>
     <div className="Quates-img-2">
     <img src={Quets} alt='quates' style={{transform:'rotate(180deg)'}} />
     </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Card2