import React, { Fragment ,useState,useEffect} from 'react'
import Ambeth from "../Assets/MicrosoftTeams-image (19).png"
import Navbar from '../NavBar/Navbar'
import "./JoinMember.css"
import polygon from "../Assets/Polygon 6.svg"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next'
import Check from "../Assets/Check (2).svg"
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
import { Cloudinary } from '@cloudinary/url-gen';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function JionMember() {

  const {t , i18n} =useTranslation()
  const currentLanguage =i18n.language
  const tamilLanguage =i18n.language === 'ta'


  const {_id}=useParams()
  const navigate =useNavigate()
  const [aadharFile, setAadharFile] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [formData,setformData] = useState({
  name: "",
  aadharCard: "",
  referredBy: "",
  gender: "",
  education: "",
  dateOfBirth: "",
  bloodGroup: "",
  religion: "",
  address: "",
  state: "",
  district: "",
  aadharCardURL: null,
  profileURL: null
});




const handleFormChange = (e) => {
  const { name, value } = e.target;
 
  if (name === 'DateOfBirth') {
    setformData({
      ...formData,
      [name]: value 
    });
  } else {
    setformData({
      ...formData,
      [name]: value
    });
  }
};

const updateFormData = async () => {
  
  const isValid = Object.entries(formData).every(([key, value]) => {
    if (key === "referredBy") {
      return true;
    }
    return value !== "" && value !== null;
  });
  
  if (!isValid) {
    toast.error('All fields except Referred By are required. Please fill in all the required fields.', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }
  
  try {
    const response = await fetch(`https://ihaf-backend.vercel.app/update-joinus-member/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setformData(data);
      // Show success notification if data is updated
      toast.success('Data updated successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(()=>{
        navigate('/')
      },3000)
    } else {
      // Show error notification if data update fails
      toast.error('Failed to update data.Your are already a member and your memberID is IHAF0010.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:2000
      });
      setTimeout(()=>{
        navigate('/')
      },3000)
      console.error('Failed to update data');
    }
  } catch (error) {
    // Show error notification if an error occurs during update
    toast.error('Error updating data. Please try again later.', {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.error('Error updating data:', error);
  }
};


 const handleFormSumbit = (e) => {
  e.preventDefault();
  updateFormData();
  console.log(formData,'updated data');
};



const cloudinary = new Cloudinary({ cloud: { cloudName: 'di8yozs46'} });

const handleAadharFileSelect = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    // Upload file to Cloudinary and generate URL
    const imageUrl = cloudinary.image(selectedFile.name).toURL();

    setAadharFile(imageUrl); // Assuming setAadharFile is a state update function for the image URL
    setformData({
      ...formData,
      aadharCardURL: imageUrl,
    });
    console.log('Aadhar file uploaded:', imageUrl);
  }
};

const handleProfileFileSelect = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    // Upload file to Cloudinary and generate URL
    const imageUrl = cloudinary.image(selectedFile.name).toURL();

    setProfileFile(imageUrl); // Assuming setProfileFile is a state update function for the image URL
    setformData({
      ...formData,
      profileURL: imageUrl,
    });
    console.log('Profile file uploaded:', imageUrl);
  }
};
const handleDelete = (fileType) => {
  if (fileType === 'aadhar') {
    setAadharFile(null);
    setformData({
      ...formData,
      aadharCardURL: null,
    });
  } else if (fileType === 'profile') {
    setProfileFile(null);
    setformData({
      ...formData,
      profileURL: null,
    });
  }
};


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
     <form  onSubmit={handleFormSumbit}>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.3') : t('Name')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <input type='text' id='name' name='name' value={formData.name} required onChange={handleFormChange}/> <br/>
         </div>
         <div className='JionFrom-content-inputs'>
        <div className='jion-cont'>
        <label>{currentLanguage === 'ta' ? t('Aadhaar.1') : t('Aadhaar Number')}</label>
         <p> <Fragment>:</Fragment></p>
        </div>
         <input type='text' id='AadhaarNumber' name='aadharCard' value={formData.aadharCard} required onChange={handleFormChange}/> <br/>
         </div>
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.5') : t('Refferal code')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <input type='text' id='RefferalCode' name='referredBy'  value={formData.referredBy} onChange={handleFormChange} required/> <br/>
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
        value="Male"
        name="gender"
        checked={formData.gender === 'Male'}
        onChange={handleFormChange}
      />
      <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Gender.1') : t('Male')}</p>
    </div>
    <div className="select-box__value">
      <input
        className="select-box__input"
        type="radio"
        id="Gender_1"
        value="Female"
        name="gender"
        checked={formData.gender === 'Female'}
        onChange={handleFormChange}
      />
      <p className="select-box__input-text">{currentLanguage === 'ta' ? t('Gender.2') : t('Female')}</p>
    </div>
    <div className="select-box__value">
      <input
        className="select-box__input"
        type="radio"
        id="Gender_2"
        value="Others"
        name="gender"
        checked={formData.gender === 'Others'}
        onChange={handleFormChange}
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
            <label className="select-box__option" htmlFor="Gender_0"  >
            {currentLanguage === 'ta' ? t('Gender.1') : t('Male')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Gender_1"  >
            {currentLanguage === 'ta' ? t('Gender.2') : t('FeMale')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Gender_2"  >
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
          name="education"
          checked={formData.education === "UG"} 
          onChange={handleFormChange}
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
          name="education"
          checked={formData.education === "PG"} 
          onChange={handleFormChange}
        
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
          name="education"
          checked={formData.education === "10TH"} 
          onChange={handleFormChange}
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
          name="education"
          checked={formData.education === "10TH"} 
          onChange={handleFormChange}
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
          name="education"
          checked={formData.education === "OTHER"} 
          onChange={handleFormChange}
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
        <label className="select-box__option" htmlFor="education_0"  >
          UG
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_1"  >
          PG
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_2"  >
          10th
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_3"  >
          12th
        </label>
      </li>
      <li>
        <label className="select-box__option" htmlFor="education_4"  >
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
  name="dateOfBirth" // Add the name attribute for the DatePicker input
  selected={formData?.dateOfBirth}
  onChange={(date) => handleFormChange({ target: { name: 'dateOfBirth', value: date } })}
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
              name="bloodGroup"
              checked={formData.bloodGroup === "A+"}
              onChange={handleFormChange}
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
              name="bloodGroup"
              checked={formData.bloodGroup === "A-"}
              onChange={handleFormChange}
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
              name="bloodGroup"
              checked={formData.bloodGroup === 'B+'}
              onChange={handleFormChange}
            />
            <p className="select-box__input-text">B+</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_3"
              value="B-"
              name="bloodGroup"
              required
              checked={formData.bloodGroup === 'B-'}
              onChange={handleFormChange}
            />
            <p className="select-box__input-text">B-</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="Blood_Group_4"
              value="AB+"
              name="bloodGroup"
              required
              checked={formData.bloodGroup === 'AB+'}
              onChange={handleFormChange}
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
              name="bloodGroup"
              checked={formData.bloodGroup === 'AB-'}
              onChange={handleFormChange}
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
              name="bloodGroup"
              checked={formData.bloodGroup === 'O+'}
              onChange={handleFormChange}
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
              name="bloodGroup"
              checked={formData.bloodGroup === 'O-'}
              onChange={handleFormChange}
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
            <label className="select-box__option" htmlFor="Blood_Group_0"  >
              A+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_1">
              A-
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_2"   >
              B+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_3"   >
              B-
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_4"  >
              AB+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_5"  >
              AB-
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_6"  >
              O+
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Blood_Group_7"  >
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
              name="religion"
              checked={formData.religion === 'Hinduism'}
              onChange={handleFormChange}
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
              name="religion"
              checked={formData.religion === 'Christianity'}
              onChange={handleFormChange}
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
              name="religion"
              checked={formData.religion === 'Islam'}
              onChange={handleFormChange}
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
            <label className="select-box__option" htmlFor="Religion_0"  >
            {currentLanguage === 'ta' ? t('Religion.2') : t('Hinduism')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Religion_1"  >
            {currentLanguage === 'ta' ? t('Religion.1') : t('Christianity')}
            </label>
          </li>
          <li>
            <label className="select-box__option" htmlFor="Religion_2"  >
            {currentLanguage === 'ta' ? t('Religion.3') : t('Islam')}
            </label>
          </li>
        </ul>
      </div>
         </div>
         <div className='JionFrom-content-inputs'>
        <div className='Address-jion'>
        <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('Address.1') : t('JionMemberShip.11')}</label>
          <p> <Fragment>:</Fragment></p>
          <textarea id='Address'name='address' value={formData.address} onChange={handleFormChange}></textarea>
         </div>
          <div className='Address'>
          <label>{currentLanguage === 'ta' ? t('Address.2') : t('state')}</label>
          <input type="text" className="text-area-address" id='State'name='state' value={formData.state} onChange={handleFormChange} ></input>
          <label>{currentLanguage === 'ta' ? t('Address.3') : t('District')}</label>
           <input type="text" className="text-area-address" id='District' name='district' value={formData.district} onChange={handleFormChange}></input>
          </div>
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
        <input type="file" name='aadharCardURL'  onChange={handleAadharFileSelect} style={{ display: 'none' }} />
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
        <input type="file" name='profileURL'  onChange={handleProfileFileSelect} style={{ display: 'none' }} />
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
         <button type="submit" 
         onClick={handleFormSumbit} 
         
  >
    {currentLanguage === 'ta' ? t('Aadhaar.6') : t('Join Now')}</button>
         </div>
     </form>
     </div>
     </div>
    </div>
    <ToastContainer/>
    <Footer/>
    </div>
  )
}

export default  JionMember