import React, { useState } from 'react';

import "./Applyserve.css"
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

function Applyserve() {

  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [dropdown2Value, setDropdown2Value] = useState('');
  const dropdown2Options = ["Option 1", "Option 2", "Option 3"];
  const handleDropdown2Change = (event) => {
    const selectedValue = event.target.value;
    setDropdown2Value(selectedValue);
  };
  
  const navigate = useNavigate();

  const [serve, setServe] = useState({
    name: "",
    postingLocation: "",
    postingName: "",
    qualification: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const Response = await fetch("https://ihaf-backend.vercel.app/new-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serve),
      });

      if (Response.ok) {
        const res = await Response.json();
        setServe(res);
        console.log(res, "Apply to serve datas");
      } else {
        const er = await Response.json();
        console.error(er, "error getting");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <div className='Applyserve-container'>
      <p className={`${isTamilLanguage ? 'apply-toserve-head-tamil' : 'apply-toserve-head'}`}>{t("hello.31")}</p>
      <p className={`${isTamilLanguage ? 'apply-content-tamil' : 'apply-content'}`}>{t('hello.32')}</p>
      <div className='Apply-serve-main'>
        <div className='apply-serve-cont'>
          <div className='apply-serve-name'>
            <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.33')}</p> <p className='equalen'>:</p>
          </div>
          <div>
            <input
              type='text'
              className='serve-name'
              name='name'
              value={serve.name}
              onChange={(e) => setServe({ ...serve, name: e.target.value })}
            />
          </div>
        </div>
        <div className='apply-serve-cont'>
          <div className='apply-serve-name'>
            <p className={`${isTamilLanguage ? 'text-serve-tamil' : 'text-serve'}`}>{t('hello.34')}</p> <p className='equalen'>:</p>
          </div>
          <div>
            <div className='data5'>
              <select
                value={serve.postingLocation}
                name='postingLocation'
                onChange={(e) => setServe({ ...serve, postingLocation: e.target.value })}
                className='serve-name-P'
              >
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
              <select
                value={serve.postingName}
                name='postingName'
                onChange={(e) => setServe({ ...serve, postingName: e.target.value })}
                className='serve-name-N'
              >
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
              <select
                value={serve.qualification}
                name='qualification'
                onChange={(e) => setServe({ ...serve, qualification: e.target.value })}
                className='serve-name-Q'
              >
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
          <button className='serve-joinNow' onClick={handlesubmit}>Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Applyserve
