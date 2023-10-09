import React from 'react'
import { useTranslation } from 'react-i18next'
import './Feedback.css'
function Feedback() {
    const {t , i18n} = useTranslation()

    const isTamilLanguage = i18n.language=="ta"
  return (
    <div className='feedback-container abc'>
      <div className='feedback-container-main'>
        <p className={`${isTamilLanguage ? 'Feedback-heading-tamil ' : 'Feedback-heading'}`}>{t ('hello.10')}</p>
        <p className={`${isTamilLanguage ? 'Feedback-text-tamil' : 'Feedback-text'}`}>{t('hello.11')}</p>
       <div className='feedback-input-data'>
        <div className='feedback-input-conta'>
          <div className='feedbackname'><div className={`${isTamilLanguage ? 'feed-name-tamil' : 'feed-name'}`}>{t("hello.12")}</div> <div className='equal'>:</div></div>
          <input type='text' className='feedback-input-name'></input> 
        </div>
        <div className='feedback-input-conta'>
        <div className='feedbackname'><div className={`${isTamilLanguage ? 'feed-name-tamil' : 'feed-name'}`}>{t("hello.13")}</div> <div className='equal'>:</div></div>  
        <textarea className='feedback-textarea'></textarea>
        </div>
       
       </div>
        <div className='feed-btn-con'> <button className={`${isTamilLanguage ? 'feedback-btn-tamil' : 'feedback-btn'}`}>{t("hello.14")}</button></div>
      </div>
    </div>
  )
}

export default Feedback
