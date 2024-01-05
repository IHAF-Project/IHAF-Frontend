import  { useState,useRef, useEffect} from 'react';
import './Navbar.css'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import profile1 from '../../Assets/Logout.svg'
import profile2 from '../../Assets/Chat (2).png'
import profile3 from '../../Assets/Exchange.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'


const Navbar = () => {
  
 const [isOpen ,setClose] =useState(false)
 const [isPop, setIsPop] = useState(false);
 const [userData,setUserData] = useState(null)



  const handleClickPop = () => {
    setIsPop(!isPop);
  };

 const handleClick = () => {
  setClose(!isOpen)
 }

 const { t, i18n } = useTranslation();

 function toggleLanguage() {

  const currentLanguage = i18n.language; 
  const newLanguage = currentLanguage === 'ta' ? 'en' : 'ta';
  i18n.changeLanguage(newLanguage);
   
 }

 const storedData = JSON.parse(localStorage.getItem('userData'));
 const _id = storedData?.data?._id || storedData?._id
 
 

useEffect (() =>{

  const fetchData = async () =>{
    const response = await fetch(`https://ihaf-backend.vercel.app/get-new-memberById/658164ad7b45eb149d241651`)
    const data = await response.json();
    
  if(data?.data?.isAdminApproved || data?.isAdminApproved === true){
    setUserData(data?.data)
    console.log(userData,'api-successfully')
  }else{
    console.log(storedData?.data?.isAdminApproved || storedData?.isAdminApproved,'local-successfully')
  }
  }
  fetchData()
},[])

 const phoneNumber = storedData?.data?.phoneNumber || userData?.phoneNumber || storedData?.phoneNumber || '9994321692'
 const memberId =userData?.memberID || storedData?.memberID || storedData?.data?.memberID || 'IHAF0001'
 const userprofile= storedData?.data?.profileURL || userData?.profileURL || storedData?.profileURL
 const refferal = storedData?.data?.referralCode || userData?.referralCode || storedData?.referralCode
 const isDeleted = storedData?.isDeleted

 const currentLanguage = i18n.language;
 const tamilLanguage =i18n.language === 'ta'

 const textRef = useRef(null);
 const [copyMessage, setCopyMessage] = useState("");

 const handleCopyClick = () => {
   const textArea = document.createElement("textarea");
   textArea.value = refferal;
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand('copy');
   document.body.removeChild(textArea);
   setCopyMessage("Copied");
   setTimeout(() => {
     setCopyMessage("");
   }, 2000);
 };
 

  const logoutUser = () =>{
    localStorage.clear();
    window.location.href ="/";
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to='/' style={{textDecoration:'none'}}><img src= {logo} alt="Logo" /></Link>  
        <div className='nav-don'>
        {/* <p className='hovdon'>{currentLanguage === 'ta' ? t('Navbar.6') : t('Donate') }</p> */}
      { _id && !memberId? (
  <Link className='hovjoin' to={`/member/658164ad7b45eb149d241651`} ><span className='hovjoin'>{currentLanguage === 'ta' ? t('Navbar.5') : t('JOIN US')}</span></Link>
      ): ('')
      }
        </div>
         </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <div>
        <div  className={`navbar-donation ${isOpen ? 'active' : ''}`}>
        <p>{currentLanguage === 'ta' ? t('Navbar.6') : t('Donate')}</p>
       {_id ? ( <Link to={`/member/658164ad7b45eb149d241651`} style={{textDecoration:'none' ,color:'white',padding:'0.5em',borderRadius:'10rem',backgroundColor:'white',textAlign:'center',margin:'0'}}>
         <span>{currentLanguage === 'ta' ? t('Navbar.5') : t('JOIN US')}</span>
       </Link>) : ('')}
      </div>
      <div className='navbar-content'>
        <ul>
          <li><Link to="/" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ? t('Navbar.1') : t('Home')}</Link></li>
          <li><Link to="/About" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ?  t('Navbar.2'):  t('Party')}</Link></li>
          {/* <li><a href="" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ?  t('Navbar.3'): t('People')}</a></li> */}
          <li><Link to="/gallery" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ?  t('Navbar.7'):  t('Gallery.1')}</Link></li>
        </ul>
      </div>
      </div>
      <div className='navbarsocial-M'>
      <div className="navbar-social">
      <Link to="https://x.com/ihafindia?s=21" target='_blank'><TwitterIcon sx={{fontSize:'24px',color:'white'}}/></Link>
        <Link to="https://instagram.com/ihafindia?igshid=MzRlODBiNWFlZA==" target='_blank' ><InstagramIcon sx={{fontSize:'24px',color:'white'}}/></Link>
        <Link to="https://www.facebook.com/profile.php?id=100093003670459&mibextid=LQQJ4d" target='_blank' ><FacebookIcon sx={{fontSize:'24px',color:'white'}}/></Link>
        <Link to="https://www.youtube.com/watch?v=I5gZZfvoTDU" target='_blank'><YouTubeIcon sx={{fontSize:'24px',color:'white'}}/></Link>
      </div>
      <div className='translate-btn-1'>
        <button>
        <div className="toggle-container">
        <input type="checkbox" className='toggle'  onClick={toggleLanguage}/>
        <div className="slider round"></div>
     </div>
        </button>
      </div>
      <div className={`${tamilLanguage ? 'Navbar-login-ta' : 'navbar-login'}`}>
       
       
        {phoneNumber ? 
        (
       <img className='profile' src={userprofile || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='ProfileImage' width="50px" height="50px" onClick={handleClickPop}/>
       ) :
        ( 
         <button>
        <p className={`${tamilLanguage ? 'Navbar-login-tamil' : 'Navbar-login-english'}`}>
        <Link to='/login' style={{textDecoration:'none' ,color:'white'}}>{currentLanguage === 'ta' ?  t('Navbar.4'): t('Log In')}
       </Link>
       </p>
       </button>
       )}   
      </div>
      </div>
      </div>
      <div className='translate-btn'>
        <button onClick={toggleLanguage}>
        <div className="toggle-container">
        <input type="checkbox" className='toggle'/>
        <div className="slider round"></div>
    </div>
        </button>
      </div>
      <div className="navbar-toggle">
         <button onClick={handleClick}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      
      {isPop &&
       <div className='Popcontainer'>
       <div className='Pop-page'>
       <div className='profile-icon'>
       {memberId ? (
        <Link to={`/profile/IHAF0001`}> <img className='profile' src= {userprofile || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='ProfileImage' width="75px" height="75px" />
        </Link> ) : 'Not a member of IHAF' } 
       </div>
       {memberId ? (<>
       <div className='referal-code'>

       <img className='profile' src={profile3} alt='refetal-code'/>

    <div className="paste-button">
   <button className="button">REFERALCODE &nbsp;▼</button>
   <div className="dropdown-content">
    <p id="top"  onClick={handleCopyClick}  
          style={{ cursor: 'pointer'}}>{refferal}</p>
    <div style={{backgroundColor:'white',color:'black' ,margin:'0.5rem',fontSize:'16px'}}>{copyMessage}</div>
  </div>
</div>
       </div>
       <div className='feedback-pop'>
        <img src={profile2} alt='feedback' />
        <Link to="/feedback">
      <p>FEEDBACK</p>
    </Link>
       </div>
      </>) : '' }
       
       <div className='logout-pop' onClick={logoutUser} style={{cursor:'pointer'}}>
        <img src={profile1} alt='logout' />
        <p>LOGOUT</p>
       </div>
       </div>
      </div>
     }  
    </nav>
  );
};

export default Navbar;
