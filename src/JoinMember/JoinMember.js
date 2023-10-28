import React, { Fragment ,useState,useRef} from 'react'
import Ambeth from "../Assets/MicrosoftTeams-image (18).png"
import Navbar from '../NavBar/Navbar'
import "./JoinMember.css"
import polygon from "../Assets/Polygon 6.svg"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next'
import Check from "../Assets/Check (2).svg"
import Footer from '../Footer/Footer'

function JionMember() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [profileFile, setProfileFile] = useState(null);

  const handleAadharFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setAadharFile(selectedFile);
      console.log('Aadhar file uploaded:', selectedFile);
    }
  };

  const handleProfileFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setProfileFile(selectedFile);
      console.log('Profile file uploaded:', selectedFile);
    }
  };

  const handleDelete = (fileType) => {
    if (fileType === 'aadhar') {
      setAadharFile(null);
    } else if (fileType === 'profile') {
      setProfileFile(null);
    }
  };

    const {t , i18n} =useTranslation()
    const currentLanguage =i18n.language
    const tamilLanguage =i18n.language === 'ta'

  return (
    <div className='JionMembership-contain'>
    <Fragment><Navbar/></Fragment>
    <div className='JionFrom-contain'>
     <div className={`${tamilLanguage ? 'JionFrom-title-tamil' : 'JionFrom-title-english'}`}>
     <h1>{currentLanguage === 'ta' ? t('JionMemberShip.1') : t('JOIN MEMBERSHIP')}</h1>
     <p>"{currentLanguage === 'ta' ? t('JionMemberShip.2') : t(`Empower yourself with the Ambedkar Party membership and together, we'll shape a brighter, more inclusive future.`)}"</p>
     </div>
     <div className='JionFrom-content'>
     <div className='JionFrom-content-left'>
     <img src={Ambeth} alt ='Ambethkar' className='jionMember-coverImg'/>
     </div>
     <div className='JionFrom-content-right'>
     <form>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.3') : t('Name')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <input type='text' id='name' name='Name' required/> <br/>
         </div>
         <div className='JionFrom-content-inputs'>
        <div className='jion-cont'>
        <label>{currentLanguage === 'ta' ? t('Aadhaar.1') : t('Aadhaar Number')}</label>
         <p> <Fragment>:</Fragment></p>
        </div>
         <input type='text' id='name' name='Name' required/> <br/>
         </div>
        
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.5') : t('Refferal code')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <input type='text' id='name' name='Name' required/> <br/>
         </div>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
           <label>{currentLanguage === 'ta' ? t('JionMemberShip.4') : t('JionMemberShip.4')}</label>
          <p> <Fragment>:</Fragment></p>
          </div>   
         <div>
         <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Gender_0"
              required
              value="1"
              name="Ben"
              defaultChecked // Use defaultChecked for the initially checked radio
            />
            <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Gender.1') : t('Male')}</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Gender_1"
              required
              value="2"
              name="Ben"
            />
            <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Gender.2') : t('FeMale')}</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Gender_2"
              value="3"
              required
              name="Ben"
            />
            <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Gender.3') : t('Others')}</p>
          </div>
          <img
            className="select-box__icon"
            src={polygon}
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className="select-box__list">
          <li>
            <label className="select-box__option" htmlFor="Gender_0" aria-hidden="aria-hidden">
            {currentLanguage === 'ta' ? t('Gender.1') : t('Male')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Gender_1" aria-hidden="aria-hidden">
            {currentLanguage === 'ta' ? t('Gender.2') : t('FeMale')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Gender_2" aria-hidden="aria-hidden">
            {currentLanguage === 'ta' ? t('Gender.3') : t('Others')}
            </label>
          </li>
        </ul>
      </div>
      </div>
         </div>
      
         <div className='JionFrom-content-inputs'>
     <div className='jion-cont'>
     <label>{currentLanguage === 'ta' ? t('JionMemberShip.7') : t('Education')}</label>
  <p> <Fragment>:</Fragment></p>
     </div>
  <div className="select-box">
    <div className="select-box__current" tabIndex="1">
      <div className="select-box__value">
        <input
          className="select-box__input"
          type="radio"
          id="education_0"
          required
          value="UG"
          name="Education"
          defaultChecked // Use defaultChecked for the initially checked radio
        />
        <p className="select-box__input-text">UG</p>
      </div>
      <div className="select-box__value">
        <input
          className="select-box__input"
          type="radio"
          id="education_1"
          required
          value="PG"
          name="Education"
          defaultChecked // Use defaultChecked for the initially checked radio
        />
        <p className="select-box__input-text">PG</p>
      </div>
      <div className="select-box__value">
        <input
          className="select-box__input"
          type="radio"
          required
          id="education_2"
          value="10TH"
          name="Education"
          defaultChecked // Use defaultChecked for the initially checked radio
        />
        <p className="select-box__input-text">10TH</p>
      </div>
      <div className="select-box__value">
        <input
          className="select-box__input"
          type="radio"
          id="education_3"
          required
          value="12TH"
          name="Education"
          defaultChecked // Use defaultChecked for the initially checked radio
        />
        <p className="select-box__input-text">12TH</p>
      </div>
      <div className="select-box__value">
        <input
          className="select-box__input"
          type="radio"
          id="education_4"
          required
          value="OTHER"
          name="Education"
          defaultChecked // Use defaultChecked for the initially checked radio
        />
        <p className="select-box__input-text">OTHER</p>
      </div>
      <img
            className="select-box__icon"
            src={polygon}
            alt="Arrow Icon"
            aria-hidden="true"
          />
    </div>
    <ul className="select-box__list">
      <li>
        <label className="select-box__option" htmlFor="education_0" aria-hidden="aria-hidden">
          UG
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_1" aria-hidden="aria-hidden">
          PG
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_2" aria-hidden="aria-hidden">
          10th
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_3" aria-hidden="aria-hidden">
          12th
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_4" aria-hidden="aria-hidden">
          Others
        </label>
      </li>
    </ul>
  </div>
         </div>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.8') : t('Date of Birth')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
        <div>
        <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
      />
        </div>
         </div>
         <div className='JionFrom-content-inputs'>
          <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.9') : t('Blood Group')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_0"
              required
              value="A+"
              name="Blood_Group"
              defaultChecked // Use defaultChecked for the initially checked radio
            />
            <p className="select-box__input-text">A+</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_1"
              required
              value="A-"
              name="Blood_Group"
            />
            <p className="select-box__input-text">A-</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_2"
              value="B+"
              required
              name="Blood_Group"
            />
            <p className="select-box__input-text">B+</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_3"
              value="B-"
              name="Blood_Group"
              required
            />
            <p className="select-box__input-text">B-</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_4"
              value="AB+"
              name="Blood_Group"
              required
            />
            <p className="select-box__input-text">AB+</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_5"
              required
              value="AB-"
              name="Blood_Group"
            />
            <p className="select-box__input-text">AB-</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_6"
              required
              value="O+"
              name="Blood_Group"
            />
            <p className="select-box__input-text">O+</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_7"
              required
              value="O-"
              name="Blood_Group"
            />
            <p className="select-box__input-text">O-</p>
          </div>
      
          <img
            className="select-box__icon"
            src={polygon}
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className="select-box__list">
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_0" aria-hidden="aria-hidden">
              A+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_1" aria-hidden="aria-hidden">
              A-
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_2" aria-hidden="aria-hidden" >
              B+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_3" aria-hidden="aria-hidden" >
              B-
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_4" aria-hidden="aria-hidden">
              AB+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_5" aria-hidden="aria-hidden">
              AB-
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_6" aria-hidden="aria-hidden">
              O+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_7" aria-hidden="aria-hidden">
              O-
            </label>
          </li>
         
        </ul>
      </div>
         </div>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('Religion.4') : t('JionMemberShip.10')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              required
              id="Religion_0"
              value="Hinduism"
              name="Religion"
              defaultChecked // Use defaultChecked for the initially checked radio
            />
            <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Religion.2') : t('Hinduism')}</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Religion_1"
              required
              value="Christianity"
              name="Religion"
            />
            <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Religion.1') : t('Christianity')}</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Religion_2"
              value="Islam"
              required
              name="Religion"
            />
            <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Religion.3') : t('Islam')}</p>
          </div>
          <img
            className="select-box__icon"
            src={polygon}
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className="select-box__list">
          <li>
            <label className="select-box__option" htmlFor="Religion_0" aria-hidden="aria-hidden">
            {currentLanguage === 'ta' ? t('Religion.2') : t('Hinduism')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Religion_1" aria-hidden="aria-hidden">
            {currentLanguage === 'ta' ? t('Religion.1') : t('Christianity')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Religion_2" aria-hidden="aria-hidden">
            {currentLanguage === 'ta' ? t('Religion.3') : t('Islam')}
            </label>
          </li>
        </ul>
      </div>
         </div>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('Address.1') : t('JionMemberShip.11')}</label>
          <p> <Fragment>:</Fragment></p>
         </div>
          <div className='Address'>
          <textarea></textarea>
          <label>{currentLanguage === 'ta' ? t('Address.2') : t('state')}</label>
          <input type="text" className="text-area-address" ></input>
          <label>{currentLanguage === 'ta' ? t('Address.3') : t('District')}</label>
           <input type="text" className="text-area-address" ></input>
          </div>
         </div>
         <div className='Upload-content-inputs'>
        <div className='jion-cont'>
        <div className='UploadAdharaCard'>
         <p>{currentLanguage === 'ta' ? t('Aadhaar.2') : t('Upload Adhara card')}</p>
         <span>{currentLanguage === 'ta' ? t('Aadhaar.3') : t('(FRONT SIDE OF ADHAR ONLY REQUIRED)')}</span>
         </div>
         <p> <Fragment>:</Fragment></p>
        </div>
     
                   <div className='Upload-adhar-btn'>
                   <label className="upload-btn">
        {currentLanguage === 'ta' ? t('Aadhaar.5') : t('Upload Aadhar')}
        <input type="file" name='aadhar' onChange={handleAadharFileSelect} style={{ display: 'none' }} />
      </label>

     </div>
     <div className='uploaded-btn'> 
      {aadharFile ? <div style={{display:'flex',alignItems:'center',gap:'0.3em'}}>
        <img src={Check} alt='star'/>
        <p>{currentLanguage === 'ta' ? t('Address.5') : t('Uploaded')}</p>
      </div> : <span>{currentLanguage === 'ta' ? t('Address.4') : t('Not Upload')}</span>}
      {aadharFile  && <img src='https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png' width="25px" height="25px" alt='Delete' onClick={() => handleDelete('aadhar')} />}
      </div>
         </div>
         <div className='Upload-content-inputs'>
   
     <div className='UploadAdharaCard'>
         <p>{currentLanguage === 'ta' ? t('JionMemberShip.14') : t('Upload your photo')}</p>
         </div>
         <p> <Fragment>:</Fragment></p>
 
         <div className='Upload-adhar-btn'>
         <label className="upload-btn">
        {currentLanguage === 'ta' ? t('JionMemberShip.14') : t('Upload Profile')}
        <input type="file" name='profile' onChange={handleProfileFileSelect} style={{ display: 'none' }} />
      </label>
     </div>
    <div className='uploaded-btn'> 
      {profileFile ? <div style={{display:'flex',alignItems:'center',gap:'0.3em'}}>
        <img src={Check} alt='star'/>
        <p>{currentLanguage === 'ta' ? t('Address.5') : t('Uploaded')}</p>
      </div> : <span>{currentLanguage === 'ta' ? t('Address.4') : t('Not Upload')}</span>}
      {profileFile  && <img src='https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png' width="25px" height="25px" alt='Delete' onClick={() => handleDelete('profile')} />}
      </div>
         </div>
         <div className='JoinNow'>
         <p>{currentLanguage === 'ta' ? t('Aadhaar.6') : t('Join Now')}</p>
         </div>
     </form>
     </div>
     </div>
    </div>
    <Footer/>
    </div>
  )
}

export default  JionMember