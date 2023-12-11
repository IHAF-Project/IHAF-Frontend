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
import profile from '../../Assets/profile.jpg'
import aadhar from '../../Assets/aadhar card.JPG'
import { useEffect } from 'react'


function JionMember() {

  const {t , i18n} =useTranslation()
  const currentLanguage =i18n.language
  const tamilLanguage =i18n.language === 'ta'
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const localid = storedData?.data?.memberID || storedData?.memberID
  const localuid=storedData?.data?._id || storedData?._id


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
  const tamilNaduDistrictsInTamil = [
    'அரியலூர்',
    'செங்கல்பட்டு',
    'சென்னை',
    'கோயம்புத்தூர்',
    'கடலூர்',
    'தருமபுரி',
    'திண்டுக்கல்',
    'ஈரோடு',
    'கள்ளக்குறிச்சி',
    'காஞ்சிபுரம்',
    'கன்னியாகுமரி',
    'கரூர்',
    'கிருஷ்ணகிரி',
    'மதுரை',
    'நாகபட்டினம்',
    'நாமக்கல்',
    'நீலகிரி',
    'பெரம்பலூர்',
    'புதுக்கோட்டை',
    'ராமநாதபுரம்',
    'ராணிப்பேடு',
    'சேலம்',
    'சிவகங்கை',
    'தென்காசி',
    'தஞ்சாவூர்',
    'தேனி',
    'தூத்துக்குடி',
    'திருச்சிராப்பள்ளி',
    'திருநெல்வேலி',
    'திருபத்தூர்',
    'திருபூர்',
    'திருவள்ளூர்',
    'திருவண்ணாமலை',
    'திருவாரூர்',
    'வேலூர்',
    'விழுப்புரம்',
    'விருதுநகர்',
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
  const indianStatesInTamil = [
    'அந்தமான் மற்றும் நிகோபார் தீவுகள்',
    'ஆந்திரா பிரதேசம்',
    'அருணாசலபிரதேசம்',
    'அசாம்',
    'பீகார்',
    'சண்டக் கர்',
    'சத்தீஸ்கரம்',
    'தாத்ரா மற்றும் நாகர் ஹவெலி',
    'தமான் மற்றும் டியூ',
    'தில்லி',
    'கோவா',
    'குஜராத்',
    'ஹரியானா',
    'ஹிமாசல பிரதேசம்',
    'ஜம்மு மற்றும் காஷ்மீர்',
    'ஜார்கண்ட்',
    'கர்நாடகா',
    'கேரளா',
    'லடாக்',
    'லக்ஷத்வீப்',
    'மத்திய பிரதேசம்',
    'மஹாராஷ்டிரா',
    'மணிப்பூர்',
    'மேகாலயா',
    'மிசாரம்',
    'நாகாலாண்ட்',
    'ஒரிசா',
    'புதுச்சேரி',
    'பஞ்சாப்',
    'ராஜஸ்தான்',
    'சிக்கிம்',
    'தமிழ்நாடு',
    'தெலங்கானா',
    'திரிபுரா',
    'உத்தரப்பிரதேசம்',
    'உத்தராஞ்சலம்',
    'பங்காளம்',
  ];
  
  
  
  const genderE = ['Male','Female','Other'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const educationE = ['10th','12th','UG','PG','Other'];
  const religionsE = ['Hinduism', 'Christianity', 'Islam', 'Buddhism', 'Judaism', 'Sikhism', 'Other'];
  const gendersInTamil = ['ஆண்', 'பெண்', 'மற்றவை'];

const educationInTamil = ['10ஆம்', '12ஆம்', 'மற்றவை'];
const religionsInTamil = ['இந்துதமம்', 'கிறிஸ்தவம்', 'இஸ்லாம்', 'பௌத்தமம்', 'யூதாயம்', 'சீக்கியம்', 'மற்றவை'];
  const [Districts, setDistricts] = useState(tamilNaduDistricts);
  const [states, setstates] = useState(indianStates);
  const [gender, setgender] = useState(genderE);
 
  const [religions, setreligions] = useState(religionsE);
  const [education, seteducation] = useState(educationE);
  const [applied, setapplied] = useState('');
  const [appliedpop, setappliedpop] = useState(false);
  let selectedprofile;
  
  

  

  
  
  const [isInputValid, setIsInputValid] = useState(true);
  let member;
 
  
  useEffect(() => {
    const check = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://ihaf-backend.vercel.app/get-all-new-members')
        const result =await response.json();
        const data = result.data
      
          // Use setApplied to update the state
          setapplied(result.data.message);
          for (let i = 0; i < data.length; i++) {
            const object = data[i];
            
            if(object._id === localuid){
              member= object;
              // Check if the name property is a non-empty string
                const hasNonEmptyName = typeof member.name === 'string' && member.name.trim() !== '';
              if(hasNonEmptyName ===true){
                
                setappliedpop(true);
              }
            }
            
            // console.log(`Object ${i + 1}:`, object);
            // Perform additional actions with each object
        }
      
        } catch (error) {
          console.error('Error updating member:', error);
        }
      };
    
  
    check();
  
    if (tamilLanguage) {
      setDistricts(tamilNaduDistrictsInTamil);
      setstates(indianStatesInTamil);
      setgender(gendersInTamil);
      setreligions(religionsInTamil);
      seteducation(educationInTamil);
    } else {
      setDistricts(tamilNaduDistricts);
      setstates(indianStates);
      setgender(genderE);
      setreligions(religionsE);
      seteducation(educationE);
    }
  }, []);
  
  const handleFormChange = (e) => {
    let { name, value } = e.target;
    let isValid = true;
  
    if (name === "aadharCard") {
      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, '');
  
      // Limit the value to 12 characters
      const trimmedValue = numericValue.slice(0, 12);
      
  
      // Add a space after every four digits
      const formattedValue = trimmedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  
      // Update the input value
      value = formattedValue;
  
      isValid = /^\d{12}$/.test(numericValue);
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
  
  
const updateFormData = async () => {
  let isValidAdharNumber
  const isValid = Object.entries(formData).every(([key, value]) => {
   
    if (key === "referredBy") {
      return true;
    }
    if(key=== "aadharCard"){
      // Additional validation for adharnumber
      const removespaceadhar=formData.aadharCard = formData.aadharCard.replace(/\s/g, '');
       isValidAdharNumber = /^\d{12}$/.test(removespaceadhar);
      console.log(formData.aadharCard)
      console.log(isValidAdharNumber)
      }
    
    return value !== "" && value !== null && isInputValid === true;
  });
 
  if (!isValid && !isValidAdharNumber) {
    toast.error('All fields except Referred By are required. Please fill in all the required fields and ensure Adhar Number is 12 digits.', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }

  if (!isValid) {
    toast.error('All fields except Referred By are required. Please fill in all the required fields.', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }

  if (!isValidAdharNumber) {
    toast.error('Please ensure Adhar Number is 12 digits.', {
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
      setpopsuccess(true)
      // Show success notification if data is updated
      // toast.success('Data updated successfully!', {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      setTimeout(()=>{
        navigate('/')
      },5000)
    } else {
      // Show error notification if data update fails
      if(localid){
      toast.error(`Failed to update data.Your are already a member and your memberID is ${localid}.`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:2000
      });
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
    else{
      const data1 = await response.json();
      toast.error(`${data1.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:2000
      });
    }
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


const handleFormSumbit = async (e) => {
  e.preventDefault();
  // if(localid){
  //   toast.error(`You are already a member, and your memberID is ${localid}.`, {
  //     position: toast.POSITION.TOP_RIGHT,
  //     autoClose:3000
  //   });
  //   setTimeout(() => {
  //     navigate('/')
  //   }, 6000);
   
  // }
  await updateFormData(e);
  console.log(formData, 'updated data');
};

const handleYesClick =async (e) => {
  if(appliedpop){
    setappliedpop(false)
    navigate('/')
  
  
  }
 if(popdata==='successfully'){
  setpopsuccess(false)
    
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
 {/* aadhar */}

         <div className='JionFrom-content-inputs'>
        <div className='jion-cont'>
        <label> {currentLanguage === 'ta' ? t('Aadhaar.1') : t('Aadhaar Number')}<span style={{ color: 'red', paddingLeft:'0' }}>*</span> </label>
         <p> <Fragment>:</Fragment></p>
        </div>
         <input placeholder='0000 0000 0000'maxLength="14"  type="text" id='AadhaarNumber' name='aadharCard' value={formData.aadharCard} onChange={handleFormChange}/> <br/>
       
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
              <option value="">{t('JionMemberShip.16')}</option>
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
              <option value="">{t('JionMemberShip.16')}</option>
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
              <option value="">{t('JionMemberShip.16')}</option>
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
              <option value="">{t('JionMemberShip.16')}</option>
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
          <div className='data5 dist'>
        <select
          value={formData.district}
          name='district'
          onChange={handleFormChange}
          className='text-area-address' // Add your CSS class here
        >
          <option value="">{t('JionMemberShip.16')}</option>
          {Districts.map((option) => (
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
          <div className='data5 dist'>
            <select 
              value={formData.state}
              name='state'
              onChange={handleFormChange}
              className='text-area-address' // Add your CSS class here
            >
              <option value="">{t('JionMemberShip.16')}</option>
              {states.map((option) => (
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
        <img src={aadharFile || aadhar} alt='preview'></img>
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
        <img src={profileFile || profile} alt='preview'></img>
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
      <p>You successfully completed 100% of membship form!</p>
      <div className='p2'>IHAF administrator will make you member after validating your data</div>
      <div>
        <button onClick={handleYesClick} className='popup-yes'>
          Okey
        </button>
      </div>
    </div>
  </div>
)}
{appliedpop && (
  <div className='popup-overlay'>
    <div className='gallery-popup'>
      <p>You already applied for membership!</p>
      <div className='p2'>Administrator will verify your application soon...</div>
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