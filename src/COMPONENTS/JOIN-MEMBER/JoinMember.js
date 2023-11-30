import React, { Fragment ,useState} from 'react'
import Ambeth from "../../Assets/MicrosoftTeams-image (19).png"
import Navbar from '../NAVBAR/Navbar'
import axios from 'axios'
import polygon from "../../Assets/Polygon 6.svg"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next'
import Check from "../../Assets/Check (2).svg"
import Footer from '../FOOTER/Footer'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./JoinMember.css"
import useScrollToTop from '../Hooks/useScrollToTop'
import { color } from '@cloudinary/url-gen/qualifiers/background'


function JionMember() {

  const {t , i18n} =useTranslation()
  const currentLanguage =i18n.language
  const tamilLanguage =i18n.language === 'ta'
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const localid = storedData?.data?.memberID;

  const {_id}=useParams()
  const [showload, setshowload] = useState(false);
  const [showload1, setshowload1] = useState(false);
  const navigate =useNavigate()
  const [aadharFile, setAadharFile] = useState(null);
  const [popsuccess, setpopsuccess] = useState(false);
  const [popdata, setpopdata] = useState('');
  const [profileFile, setProfileFile] = useState(null);
  const [formData, setformData] = useState({
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
  let selectedAdhar;

  const tamilNaduDistricts = [
    'Ariyalur',
    'Chengalpattu',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kallakurichi',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Ranipet',
    'Salem',
    'Sivaganga',
    'Tenkasi',
    'Thanjavur',
    'Theni',
    'Thoothukudi',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tirupathur',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Tiruvarur',
    'Vellore',
    'Viluppuram',
    'Virudhunagar',
  ];

  const indianStates = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  const gender = ['Male','Female','Other'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const education = ['10th','12th','UG','PG','Other'];
  const religions = ['Hinduism', 'Christianity', 'Islam', 'Buddhism', 'Judaism', 'Sikhism', 'Other'];

  

  
  
  const [isInputValid, setIsInputValid] = useState(true);
  let selectedprofile;
  
const handleFormChange = (e) => {
  const { name, value } = e.target;
  let isValid = true;

  if (name === "aadharCard") {
    isValid = /^[0-9]{12}$/.test(value);
  }
  if (name === 'DateOfBirth') {
    setformData({
      ...formData,
      [name]: value 
    });
  } else {
    setIsInputValid(isValid);
    setformData({
      ...formData,
      [name]: value
    });
  }
};

const updateFormData = async (e) => {
  if(!localid)
  {
  
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
      setpopdata('successfully')
      // toast.success('Data updated successfully!', {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
     
    } else {
      const errorData = await response.json(); // Assuming the error response contains JSON data
      console.error('Error:', errorData);
 
     
      toast.error(`${errorData.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:5000
      });
   
     
    }
  } catch (error) {

    toast.error(`${error}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.error('Error updating data:', error);
  }
  }
};


const handleFormSumbit = async (e) => {
  e.preventDefault();
  if(localid){
    toast.error(`You are already a member, and your memberID is ${localid}.`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:3000
    });
    setTimeout(() => {
      navigate('/')
    }, 6000);
   
  }
  await updateFormData(e);
  console.log(formData, 'updated data');
};

const handleYesClick =async (e) => {
  
 if(popdata==='successfully'){
  setpopsuccess(false)
    // navigate('/')
 }
 else{
  setpopsuccess(false)

 }

}

  const handleAadharFileSelect = async (e) => {
    setshowload1(true)
  const selectedFile = e.target.files[0];
  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('upload_preset', 'ivs6otkx');

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData);
    const secureUrl = response.data.secure_url;
    
    console.log(secureUrl, "upload");
    setAadharFile(secureUrl);
    setformData(prevData => ({
      ...prevData,
      aadharCardURL: secureUrl,
    }));
    setshowload1(false)
  } catch (error) {
    console.log('Error uploading Aadhar file:', error);
  }
};

const handleProfileFileSelect = async (e) => {
  setshowload(true)
  const selectedFile = e.target.files[0];
  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('upload_preset', 'ivs6otkx');

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData);
    const secureUrl = response.data.secure_url;
    selectedprofile=secureUrl
    console.log(secureUrl, "upload");
    
    setProfileFile(secureUrl);
    setformData(prevData => ({
      ...prevData,
      profileURL: secureUrl,
    }));
    setshowload(false)
  } catch (error) {
    console.log('Error uploading profile file:', error);
  }
};

const handleKeyDown = (e) => {
  e.preventDefault(); // Prevent the default form submission
  if (e.key === 'Enter') {
    handleFormSumbit(e);
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

useScrollToTop();
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
{/* name */}
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>
               
              {currentLanguage === 'ta' ? t('JionMemberShip.3') : t('Name')}
              <span style={{ color: 'red', paddingLeft:'0' }}>*</span>
        </label>


         <p> <Fragment>:</Fragment></p>
         </div>
         <input type='text' id='name' name='name' value={formData.name}  onChange={handleFormChange}/> <br/>
         </div>

         <div className='JionFrom-content-inputs'>
        <div className='jion-cont'>
        <label> {currentLanguage === 'ta' ? t('Aadhaar.1') : t('Aadhaar Number')}<span style={{ color: 'red', paddingLeft:'0' }}>*</span> </label>
         <p> <Fragment>:</Fragment></p>
        </div>
         <input placeholder='Enter 12 digit adhaarnumber' type='text' id='AadhaarNumber' name='aadharCard' value={formData.aadharCard} onChange={handleFormChange}/> <br/>
       
         </div>

         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label >{currentLanguage === 'ta' ? t('JionMemberShip.5') : t('Refferal code')}</label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <input placeholder='(Optional)' type='text' id='RefferalCode' name='referredBy'  value={formData.referredBy} onChange={handleFormChange}/> <br/>
         </div>

         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
           <label>{currentLanguage === 'ta' ? t('JionMemberShip.4') : t('JionMemberShip.4')} <span style={{ color: 'red' , paddingLeft:'0'}}>*</span></label>
          <p> <Fragment>:</Fragment></p>
          </div>   
           <div className='data5'>
            <select 
              value={formData.gender}
              name='gender'
              onChange={handleFormChange}
              className='text-area-address' // Add your CSS class here
            >
              <option value="">Select your Gender</option>
              {gender.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </div>
         </div>

         <div className='JionFrom-content-inputs'>
     <div className='jion-cont'>
     <label>{currentLanguage === 'ta' ? t('JionMemberShip.7') : t('Education')} <span style={{ color: 'red', paddingLeft:'0' }}>*</span></label>
  <p> <Fragment>:</Fragment></p>
     </div>
     <div className='data5'>
            <select 
              value={formData.education}
              name='education'
              onChange={handleFormChange}
              className='text-area-address' // Add your CSS class here
            >
              <option value="">Select your education</option>
              {education.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </div>
         </div>
{/* dob */}
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.8') : t('Date of Birth')} <span style={{ color: 'red', paddingLeft:'0' }}>*</span></label>
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
{/* blood */}
         <div className='JionFrom-content-inputs'>
          <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('JionMemberShip.9') : t('Blood Group')} <span style={{ color: 'red', paddingLeft:'0' }}>*</span></label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <div className='data5'>
            <select 
              value={formData.bloodGroup}
              name='bloodGroup'
              onChange={handleFormChange}
              className='text-area-address' // Add your CSS class here
            >
              <option value="">Select your Blood group</option>
              {bloodGroups.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </div>
         </div>
{/* religion */}
         <div className='JionFrom-content-inputs'>
         <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('Religion.4') : t('JionMemberShip.10')} <span style={{ color: 'red', paddingLeft:'0' }}>*</span></label>
         <p> <Fragment>:</Fragment></p>
         </div>
         <div className='data5'>
            <select 
              value={formData.religion}
              name='religion'
              onChange={handleFormChange}
              className='text-area-address' // Add your CSS class here
            >
              <option value="">Select your Religion</option>
              {religions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </div>
         </div>
{/* address */}
         <div className='JionFrom-content-inputs'>
        <div className='Address-join'>
        <div className='ad-main'>
         
          <div className='ad-data'>
            <div className='jion-cont'>
         <label>{currentLanguage === 'ta' ? t('Address.1') : t('JionMemberShip.11')} <span style={{ color: 'red' , paddingLeft:'0'}}>*</span></label>
          <p> <Fragment>:</Fragment></p>
          </div>
          <textarea className='JionFrom-content-inputs' id='Address'name='address' value={formData.address} onChange={handleFormChange}></textarea>
          </div>
{/* district */}
          <div className='ad-sub'>
          <div className='Address'>
          <div className='ad-data'>
          <div className='jion-cont'>
          <label>{currentLanguage === 'ta' ? t('Address.3') : t('District')} <span style={{ color: 'red' , paddingLeft:'0'}}>*</span></label>
          <p> <Fragment>:</Fragment></p>
          </div>
          <div className='data5'>
        <select
          value={formData.district}
          name='district'
          onChange={handleFormChange}
          className='text-area-address' // Add your CSS class here
        >
          <option value="">Select your district</option>
          {tamilNaduDistricts.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
    </div>
    </div>
  {/* state */}
          <div  className='ad-data'>
          <div className='jion-cont'>
          <label>{currentLanguage === 'ta' ? t('Address.2') : t('State')} <span style={{ color: 'red' , paddingLeft:'0'}}>*</span></label>
          <p> <Fragment>:</Fragment></p>
          </div>
          <div className='data5'>
            <select 
              value={formData.state}
              name='state'
              onChange={handleFormChange}
              className='text-area-address' // Add your CSS class here
            >
              <option value="">Select your state</option>
              {indianStates.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </div>
          </div>
        </div>
        
         </div>
         </div>
         </div>
{/* uploadadhar */}
         <div className='Upload-content-inputs'>
         
        <div className='jion-cont'>
        <div className='join-sub'>
        <div className='UploadAdharaCard'>
         <p>{currentLanguage === 'ta' ? t('Aadhaar.2') : t('Upload Adhara card')} <span style={{ color: 'red' , paddingLeft:'0'}}>*</span></p>
         <span>{currentLanguage === 'ta' ? t('Aadhaar.3') : t('(FRONT SIDE OF ADHAR ONLY REQUIRED)')}</span>
         </div>
         <p> <Fragment>:</Fragment></p>
        </div>
        <div className='sub-2'>
        <div className='sub-3'>
     
                   <div className='Upload-adhar-btn'>
                   <label className="upload-btn">
        {currentLanguage === 'ta' ? t('Aadhaar.5') : t('Upload Aadhar')}
        <input type="file" name='aadharCardURL'  onChange={handleAadharFileSelect} style={{ display: 'none' }} />
      </label>
     </div>
     <div className='uploaded-btn'> 
      {aadharFile ? <div style={{display:'flex',alignItems:'center',gap:'0.3em'}}>
        <img src={Check} alt='star'/>
        <p>{currentLanguage === 'ta' ? t('Address.5') : t('Uploaded')} <span style={{ color: 'red', paddingLeft:'0'}}></span></p>
      </div> : <span>{currentLanguage === 'ta' ? t('Address.4') : t('Not Upload')}</span>}
      {aadharFile  && <img src='https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png' width="25px" height="25px" alt='Delete' onClick={() => handleDelete('aadhar')} />}
      </div>
      <div className='preview'>
        <img src={aadharFile} alt='preview'></img>
      </div>
      </div>
      <div>
      {showload1 &&<div className='loads'> Adharphoto uploading Please wait...</div>}
      </div>
      </div>
      </div>
         </div>
{/* uploadphoto */}
         <div className='Upload-content-inputs'>
          
         <div className='jion-cont'>
         <div className='join-sub'>
     <div className='UploadAdharaCard'>
         <p>{currentLanguage === 'ta' ? t('JionMemberShip.14') : t('Upload your photo')} <span style={{ color: 'red', paddingLeft:'0'}}>*</span></p>
         </div>
         <p> <Fragment>:</Fragment></p>
         </div>
         <div className='sub-2'>
        <div className='sub-3'>
 
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
      <div className='preview'>
        <img src={profileFile} alt='preview'></img>
      </div>
      </div>
      
      <div>
      {showload &&<div className='loads'> Profile uploading Please wait...</div>}
      </div>
      </div>
      </div>
         </div>
         <div className='JoinNow'>
         <button type="submit" onKeyDown={handleKeyDown}>
    {currentLanguage === 'ta' ? t('Aadhaar.6') : t('Join Now')}</button>
         </div>
     </form>
     </div>
     </div>
    </div>
    <ToastContainer/>
    
{popsuccess && (
  <div className='popup-overlay'>
    <div className='gallery-popup'>
      <p>Items uploaded {popdata}!</p>
      <div>
        <button onClick={handleYesClick} className='popup-yes'>
          Okey
        </button>
      </div>
    </div>
  </div>
)}
    <Footer/>
    </div>
  )
}

export default  JionMember