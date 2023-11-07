
import React, { useEffect, useState } from 'react';
import './App.css';
import Feedback from './Page7/Feedback';
import Login from "./LogIn/Login.jsx"
import Profile from "./Profile/Profile.jsx"
import About from './Page8/About';
import JoinMember from "./JoinMember/JoinMember"
import { Route, Routes } from 'react-router-dom';
import arrow from '../src/images/top.png'
import image2 from "./images/logo1.png"
import Tree from './Tree';
import Otp from './LogIn/OTP/Otp';
import Applyserve from './Page8/Applyserve';
import Footer from './Footer/Footer';
import Page1 from './Page1/Page1';
import Petition from './Page7/Petition';
import Cards from './Page6/Cards';
import Page4 from './Page4/page4';
import EventDetails from "./Page8/GetEventDetails/EventDetails"
import Page3 from './Page3/Page3';

const App = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
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
    }, 3000);
  }, []);

  return (
    
<div>
{isLoading ? (
  <div className='kitna-container'>
  <div className= "kinetic"  >
  <div className= "kinetic1"  >  
   <img src = {image2}  className='image-logo-loading'></img>
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
        <Route path='/member/:_id' element={<JoinMember/>}></Route>
        <Route path='/events/:_id' element={<EventDetails/>}></Route>
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
