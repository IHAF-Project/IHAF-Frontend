import { TwitterEmbed  } from 'react-social-media-embed';
import { useTranslation } from 'react-i18next'
function TabContent3() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="tab-bg-main">
    <div className="tab-bg">
   <div className="Tab-content1">
   <div className="Tab-content1-tp">
      <p> {currentLanguage === 'ta' ? t('pageThree.2') : t('Discover the latest events, rallies, and initiatives under IHAF’S transformative leadership')}</p>
      </div>
      <div className="Tab-content1-bt">
      <TwitterEmbed  url="https://twitter.com/melvynxdev/status/1701551314017399145" width={328} />
      <TwitterEmbed  url="https://twitter.com/melvynxdev/status/1701551314017399145" width={328} />

      </div>
    </div>
    </div>
    </div>
  )
}

export default TabContent3