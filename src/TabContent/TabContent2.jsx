import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { YouTubeEmbed } from 'react-social-media-embed';

function TabContent2({ embedId }) {
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

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="tab-bg-main">
      <div className="tab-bg">
        <div className="TabContent1-content">
          <div className="Tab-content1-tp">
            <p>
              {currentLanguage === 'ta'
                ? t('pageThree.2')
                : t('Discover the latest events, rallies, and initiatives under IHAF’S transformative leadership')}
            </p>
          </div>
          {linksitems.map((item) => (
            <div className="Tab-content1-bt" key={item.id}>
              {item.platform === 'Youtube' && (
                <YouTubeEmbed url={item.link1} width={650} height={300}  className="youtube" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

TabContent2.propTypes = {
  embedId: PropTypes.node,
};

export default TabContent2;
