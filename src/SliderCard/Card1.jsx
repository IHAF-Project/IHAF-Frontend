
import { useTranslation } from 'react-i18next'
import Ambeth from "../Assets/Frame 39.svg"
import Quets from "../Assets/Frame 14.png"
import PropTypes from 'prop-types';

function Card1({isVisible}) {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
  return (
      
         <div className={`intro-slide-1 ${isVisible ? 'actived' : ''}`}>
        <div className="intro-slide-content">
         <div className="intro-slide-content-right">
         <div className="intro-slide-content-right-top">
          <p>IHAF</p>
          <span>
          {currentLanguage === 'ta' ? t('pageOne.1') : t('Integral Humanism Ambedkar Federation')}
          </span>
         </div>
         <div className="intro-slide-content-right-btm">
         <img src={Ambeth} alt='Ambeth' />
         </div>
         </div>
         <div className="intro-slide-content-left">
          <div className="intro-slide-content-quates">
         <div className="Quates-img-1">
         <img src={Quets} alt='quates' />
         </div>
        <p>
    <span>“</span>
  <span> {currentLanguage === 'ta' ? t('pageOne.2') : t('One')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.4') : t('should')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.5') : t('think')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.6') : t('in')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.7') : t('terms')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.8') : t('of')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.9') : t('the')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.10') : t('poor,')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.11') : t('because')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.12') : t('development')}</span>
  <span>{currentLanguage === 'ta' ? t('pageOne.13') : t('can')}</span>
  <span>{currentLanguage === 'ta' ? t(null) : t('happen')}</span>
  <span>{currentLanguage === 'ta' ? t(null) : t('only')}</span>
  <span>{currentLanguage === 'ta' ? t(null) : t('when')}</span>
  <span>{currentLanguage === 'ta' ? t(null) : t('everyone')}</span>
  <span>{currentLanguage === 'ta' ? t(null) : t('gets')}</span>
  <span>{currentLanguage === 'ta' ? t(null) : t('equal')}</span>
 <span>”</span>
</p>
          {/* <p>“ {currentLanguage === 'ta' ? t('pageOne.2') : t('One should think in terms of the poor, because development can happen only when everyone gets equal.')}”</p> */}
         <div className="Quates-img-2">
         <img src={Quets} alt='quates' style={{transform:'rotate(180deg)'}} />
         </div>
          </div>
        </div>
        </div>
      </div>
  )
}

Card1.propTypes = {
  isVisible: PropTypes.node,
};

export default Card1