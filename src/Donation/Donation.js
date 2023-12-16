import React from 'react'
import { useTranslation } from 'react-i18next';

import "./Donation.css"
function Page8() {
    const { t } = useTranslation();

  return (
    <div className='page8-container'>
      <div className='page8-main'>
        
       <div className='blood-cantact'>
        <p className='page-8-blood'>{t('hello.15')}</p>
        <p className='page8-cantact'>{t('hello.16')}</p>
       </div>
      <div><p className='page8-numper'> +91 9237462862</p></div>
      </div>
    </div>
  )
}
export default Page8
