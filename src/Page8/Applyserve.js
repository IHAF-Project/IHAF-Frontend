import React, { useState } from 'react';
import "./Applyserve.css"
import { useTranslation } from 'react-i18next'
function Applyserve() {
    const { t,i18n } = useTranslation();
    const isTamilLanguage = i18n.language === 'ta';
    const [dropdown2Value, setDropdown2Value] = useState('');
    const dropdown2Options = ["Option 1", "Option 2", "Option 3"];
    const handleDropdown2Change = (event) => {

      
      const selectedValue = event.target.value;
      setDropdown2Value(selectedValue);
    };

  return (
    <div className='Applyserve-container'>
        <p className= {`${isTamilLanguage ? 'apply-toserve-head-tamil' : 'apply-toserve-head'}`}>{t("hello.31")}</p>
        <p className={`${isTamilLanguage ? 'apply-content-tamil' : 'apply-content'}`}>{t('hello.32')}</p>
      <div className='Apply-serve-main'>
      <div className='apply-serve-cont'>
         <div className='apply-serve-name'>
          <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.33')}</p> <p className='equalen'>:</p> 
         </div>
         <div> <input type='text' className='serve-name'></input></div>
       </div>
       <div className='apply-serve-cont'>
         <div className='apply-serve-name'>
          <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.34')}</p> <p className='equalen'>:</p> 
         </div>
        <div>
        <div className='data5'>
      <select value={dropdown2Value} onChange={handleDropdown2Change}  className='serve-name-P'>
        <option value="">Select an option</option>
        {dropdown2Options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
        
        </div>
       </div>
       <div className='apply-serve-cont'>
         <div className='apply-serve-name'>
          <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.35')}</p> <p className='equalen'>:</p> 
         </div>
       <div>
       <div className='data5'>
      <select value={dropdown2Value} onChange={handleDropdown2Change} className='serve-name-N'>
        <option value="">Select an option</option>
        {dropdown2Options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
       </div>
       </div>
       <div className='apply-serve-cont'>
         <div className='apply-serve-name'>
          <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.36')}</p> <p className='equalen'>:</p> 
         </div>
        <div>
        <div className='data5'>
      <select value={dropdown2Value} onChange={handleDropdown2Change}  className='serve-name-Q'>
        <option value="">Select an option</option>
        {dropdown2Options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
        </div>
         
       </div>

       <div>
        <button className='serve-joinNow'>Join Now</button>
       </div>
      </div>
    </div>
  )
}

export default Applyserve
