import { InstagramEmbed } from 'react-social-media-embed';
import { useTranslation } from 'react-i18next'

function TabContent1() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="tab-bg-main">
      <div className="tab-bg">
    <div className="Tab-content1">
      <div className="Tab-content1-tp">
      <p> {currentLanguage === 'ta' ? t('pageThree.2') : t('Discover the latest events, rallies, and initiatives under IHAF’S transformative leadership')}</p>
      </div>
      <div className="Tab-content1-bt" >
      <InstagramEmbed url="https://www.instagram.com/p/CvUMPW8PXYu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" width={350} />
      <InstagramEmbed url="https://www.instagram.com/p/Cv9Ef1JP3QA/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" width={350} />
   
      </div>
    </div>
    </div>
    </div>
  )
}


export default TabContent1