import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import Quets from "../Assets/Frame 14.png"

function Card3({isVisible}) {
  
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const tamilLanguage =i18n.language === 'ta'
  
    return (
      <div className={`intro-slide-3 ${isVisible ? 'actived' : ''}`}>
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
      <p>“ {currentLanguage === 'ta' ? t('pageOne.3') : t('If a vote for everyone is the touchstone of political democracy, work for everyone is a measure of economic democracy.')}”</p>
     <div className="Quates-img-2">
     <img src={Quets} alt='quates' style={{transform:'rotate(180deg)'}} />
     </div>
      </div>
        </div>
      </div>
    </div>
    )
  }
  
   Card3.propTypes = {
    isVisible: PropTypes.node,
};
  export default Card3