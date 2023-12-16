
import React, { useEffect, useState } from 'react';
import './App.css';
import Feedback from './Page7/Feedback';
import Login from "./LogIn/Login.jsx"
import Profile from "./COMPONENTS/Profile/Profile.jsx"
import About from './Page8/About';
import JoinMember from "./COMPONENTS/JOIN-MEMBER/JoinMember.js"
import { Route, Routes } from 'react-router-dom';
import arrow from '../src/images/top.png'
import image2 from "./images/logo1.png"
import Tree from './Tree';
import Otp from './LogIn/OTP/Otp';
import Applyserve from './Page8/Applyserve';
import Footer from './COMPONENTS/FOOTER/Footer.js';
import Page1 from './INTRO-PAGE/Page1.jsx';
import Petition from './Page7/Petition';
import Cards from './cards/Cards';
import Page4 from './FEEDBACK-SCROLL/Feedback-scroll.js';
import EventDetails from "./Page8/GetEventDetails/EventDetails.js"
import Page3 from './SOCIAL-MEDIA/Social.jsx';
import Gallery from './Gallery/Gallery.js';

const App = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
        console.log("hi")
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    
<div>
{isLoading ? (
  <div className='kitna-container'>
  <div className= "kinetic"  >
  <div className= "kinetic1"  >  
   <img src = {image2} alt='load' className='image-logo-loading'></img>
   </div>
   </div>
</div>
) : (
  <div className="container" >
      <Routes>
       <Route path="/" element={<Tree />} />
        <Route path="/About" element={<About />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='/profile/:memberId' element={<Profile />} />
        <Route path="/Login" element={<Profile/>} />
        <Route path="/applyserve" element={<Applyserve/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/home" element={<Page1/>} />
        <Route path="/petition" element={<Petition/>} />
        <Route path="/leader" element={<Cards/>} />
        <Route path="/feedbackuser" element={<Page4/>} />
        <Route path="/socialmedia" element={<Page3/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path='/member/:_id' element={<JoinMember/>}></Route>
        <Route path='/events/:_id' element={<EventDetails/>}></Route>
        <Route path='/join/:_id' element={<JoinMember/>}></Route>
      </Routes>
 
      {showScrollButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} title="Go to top">
         <img src={arrow} alt='up arrow'></img>
        </button>
      )}
    </div>
)}
</div>
  );
};

export default App
