import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Feedback.css';
import axios from 'axios';

function Feedback() {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === "ta";

  const [feeditems, setFeedItems] = useState({
    memberID: "",
    link1: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ihaf-backend.vercel.app/new-feedback', feeditems, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data, "feedback items received");
        setFeedItems(data);

      } else {
        console.error(response.data, "feedback error message");
      }
    } catch (error) {
      console.error(error, "error message");
    }
  }

  return (
    <div className='feedback-container abc'>
      <div className='feedback-container-main'>
        <p className={`${isTamilLanguage ? 'Feedback-heading-tamil' : 'Feedback-heading'}`}>{t('hello.10')}</p>
        <p className={`${isTamilLanguage ? 'Feedback-text-tamil' : 'Feedback-text'}`}>{t('hello.11')}</p>
        <div className='feedback-input-data'>
          <div className='feedback-input-conta'>
            <div className='feedbackname'><div className={`${isTamilLanguage ? 'feed-name-tamil' : 'feed-name'}`}>{t("hello.12")}</div> <div className='equal'>:</div></div>
            <input
              type='text'
              className='feedback-input-name'
              value={feeditems.memberID}
              onChange={(e) => setFeedItems({ ...feeditems, memberID: e.target.value })}
            />
          </div>
          <div className='feedback-input-conta'>
            <div className='feedbackname'><div className={`${isTamilLanguage ? 'feed-name-tamil' : 'feed-name'}`}>{t("hello.13")}</div> <div className='equal'>:</div></div>
            <textarea
              className='feedback-textarea'
              value={feeditems.content}
              onChange={(e) => setFeedItems({ ...feeditems, content: e.target.value })}
              placeholder='100/12'
            />
          </div>
        </div>
        <div className='feed-btn-con'>
          <button
            className={`${isTamilLanguage ? 'feedback-btn-tamil' : 'feedback-btn'}`}
            onClick={handleSubmit}
          >
            {t("hello.14")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
