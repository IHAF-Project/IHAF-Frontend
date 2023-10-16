import  { useState,useRef} from 'react';
import './Navbar.css'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import profile1 from '../Assets/Logout.svg'
import profile2 from '../Assets/Chat (2).png'
import profile3 from '../Assets/Exchange.png'
import profile4 from '../Assets/User (1).svg'
// import Logo from "public/images/MicrosoftTeams-image (22).png"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from "../images/IHAF ORGINAL LOGO 1.png"

const Navbar = () => {
  
 const [isOpen ,setClose] =useState(false)
 const [isPop, setIsPop] = useState(false);


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

 const currentLanguage = i18n.language;
 const tamilLanguage =i18n.language === 'ta'

 const referralCode = "SRT12345"; // Replace with your referral code

 const textRef = useRef(null);
 const [copyMessage, setCopyMessage] = useState("");

 const handleCopyClick = () => {
   const textArea = document.createElement("textarea");
   textArea.value = referralCode;
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand('copy');
   document.body.removeChild(textArea);
   setCopyMessage("Copied");
   setTimeout(() => {
     setCopyMessage("");
   }, 2000);
 };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src= {logo} alt="Logo" />
        <div className='nav-don'>
        <p className='hovdon'>{currentLanguage === 'ta' ? t('Navbar.6') : t('Donate') }</p>
        <Link className='hovjoin' to='/member' ><span className='hovjoin'>{currentLanguage === 'ta' ? t('Navbar.5') : t('JOIN US')}</span></Link>
     
        </div>
         </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <div>
        <div  className={`navbar-donation ${isOpen ? 'active' : ''}`}>
        <p>{currentLanguage === 'ta' ? t('Navbar.6') : t('Donate')}</p>
        <Link to='/login' style={{textDecoration:'none' ,color:'white',padding:'0.5em',borderRadius:'10rem',backgroundColor:'white',textAlign:'center',margin:'0'}}><span>{currentLanguage === 'ta' ? t('Navbar.5') : t('JOIN US')}</span></Link>
        </div>
      <div className='navbar-content'>
        <ul>
          <li><a href="/" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ? t('Navbar.1') : t('Home')}</a></li>
          <li><Link to="/About" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ?  t('Navbar.2'):  t('Party')}</Link></li>
          <li><a href="" className={`${tamilLanguage ? 'Navbar-link-tamil' : 'Navbar-link-english'}`}>{currentLanguage === 'ta' ?  t('Navbar.3'): t('People')}</a></li>
        </ul>
      </div>
      </div>
      <div className='navbarsocial-M'>
      <div className="navbar-social">
      <a href="https://www.youtube.com" ><TwitterIcon sx={{fontSize:'24px',color:'white'}}/></a>
        <a href="https://www.instagram.com" ><InstagramIcon sx={{fontSize:'24px',color:'white'}}/></a>
        <a href="https://www.linkedin.com" ><FacebookIcon sx={{fontSize:'24px',color:'white'}}/></a>
        <a href="https://www.facebook.com" ><YouTubeIcon sx={{fontSize:'24px',color:'white'}}/></a>
      </div>
      <div className='translate-btn-1'>
        <button>
        <div className="toggle-container"  onClick={toggleLanguage}>
        <input type="checkbox" className='toggle'/>
        <div className="slider round"></div>
     </div>
        </button>
      </div>
      <div className={`${tamilLanguage ? 'Navbar-login-ta' : 'navbar-login'}`}>
        <button  className='hov' onClick={handleClickPop}>
          <p className={`${tamilLanguage ? 'Navbar-login-tamil' : 'Navbar-login-english'}`}>
          <Link to='/login' style={{textDecoration:'none' ,color:'white'}}>{currentLanguage === 'ta' ?  t('Navbar.4'): t('Log In')}</Link>
          </p>
        </button>
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
      
      {
      isPop &&
       <div className='Popcontainer'>
       <div className='Pop-page'>
       <div className='profile-icon'><Link to='/profile'><img src={profile4} alt='profile-icon' /></Link></div>
       <div className='referal-code'>
       <img src={profile3} alt='refetal-code' />
      
       <div className="paste-button">
   <button className="button">REFERALCODE &nbsp; ▼</button>
   <div className="dropdown-content">
    <a id="top"  onClick={handleCopyClick}  ref={textRef}
          style={{ cursor: 'pointer'}}>{referralCode}</a>
    <div style={{backgroundColor:'white',color:'black' ,margin:'0.5rem',fontSize:'16px'}}>{copyMessage}</div>
  </div>
</div>
       </div>
       <div className='feedback-pop'>
        <img src={profile2} alt='feedback' />
       <p>FEEDBACK</p>
       </div>
       <div className='logout-pop'>
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
