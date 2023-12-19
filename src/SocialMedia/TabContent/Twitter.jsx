import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TwitterEmbed  } from 'react-social-media-embed';
import { useTranslation } from 'react-i18next'
function TabContent3() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [linksitems, setLinksItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ihaf-backend.vercel.app/get-links');
        const dataitems = response.data.data;
        setLinksItems(dataitems);
        console.log(dataitems, "data items can be retrieved");
      } catch (error) {
        console.error(error, "feedback error message");
      }
    };

    fetchData();

  }, []);
    
  console.log(linksitems, "links items can be retrieved");

  return (
    <div className="tab-bg-main">
    <div className="tab-bg">
   <div className="Tab-content1">
   <div className="Tab-content1-tp">
      <p> {currentLanguage === 'ta' ? t('pageThree.2') : t('Discover the latest events, rallies, and initiatives under IHAF’S transformative leadership')}</p>
      </div>
      {linksitems.map((item) => (
      <div className="Tab-content1-bt" key={item.id}>
         {item.platform === 'Twitter' && (
          <div className='embeddedurl'>
        <TwitterEmbed  url={item.link1} width={350} />
        <TwitterEmbed  url={item.link2} width={350} />
      </div>
      
       )}
      </div>
           ))}
    </div>
    </div>
    </div>
  )
}

export default TabContent3