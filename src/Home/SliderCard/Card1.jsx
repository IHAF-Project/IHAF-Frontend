
import { useTranslation } from 'react-i18next'
import Quets from "../../Assets/Frame 14.png"
import PropTypes from 'prop-types';

function Card1() {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const tamilLanguage = i18n.language === 'ta'

  return (
         <div className={`intro-slide-1 `}>
        <div className="intro-slide-content">
         <div className="intro-slide-content-right">
         <div className="intro-slide-content-right-top">
          <p>IHAF</p>
          <span className={`${tamilLanguage ? 'Humanism-tamil': 'Humanism-english'}`}>
          {t('pageOne.1') }
          </span>
         </div>
         </div>
         <div className="intro-slide-content-left">
          <div className="intro-slide-content-quates">
         <div className="Quates-img-1">
         <img src={Quets} alt='quates' />
         </div>
         <p className={`${tamilLanguage ? 'Quates-tamil' : 'Quates-english'}`}>{t('pageOne.3') }</p>
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