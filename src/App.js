


import React, { useEffect, useState } from 'react';
import './App.css';

import Feedback from './Page7/Feedback';
import Login from "./LogIn/Login.jsx"
import Profile from "./Profile/Profile.jsx"
import About from './Page8/About';
import { useTranslation } from 'react-i18next';
import JoinMember from "./JoinMember/JoinMember"
import { Route, Routes } from 'react-router-dom';
import arrow from '../src/images/top.png'
import Tree from './Tree';
import Otp from './LogIn/OTP/Otp';

const App = () => {


  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Remove event listener on component unmount
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
    <div class="kinetic"></div>
    </div>
) : (
  <div className="container" >
      <Routes>
      <Route path="/" element={<Tree />} />
        <Route path="/About" element={<About />} />
        <Route path="/FeedBack" element={<Feedback />} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='/profile/:memberId' element={<Profile />} />
        <Route path='/member' element={<JoinMember/>}></Route>
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
