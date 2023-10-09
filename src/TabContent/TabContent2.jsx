import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
function TabContent2({embedId}) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="tab-bg">
    <div className="TabContent1-content">
    <div className="Tab-content1-tp">
      <p> {currentLanguage === 'ta' ? t('pageThree.2') : t('Discover the latest events, rallies, and initiatives under IHAF’S transformative leadership')}</p>
      </div>
      <div className="Tab-content1-bt">
   <iframe

  className='youtube'
  style={{padding:'0.2rem'}}

  src={`https://www.youtube.com/embed/${embedId}`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"

  >
  </iframe>
     </div>
    </div>
    
    </div>
  )
}

TabContent2.propTypes={
    embedId:PropTypes.node
}

export default TabContent2