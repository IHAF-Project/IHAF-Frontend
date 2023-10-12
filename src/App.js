import React from 'react';
import './App.css';

import Feedback from './Page7/Feedback';
import Login from "./LogIn/Login.jsx"
import Profile from "./Profile/Profile.jsx"
import About from './Page8/About';
import { useTranslation } from 'react-i18next';

import { Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import arrow from '../src/imgg/🦆 icon _arrow thick left_ (4).png'
import Tree from './Tree';
const App = () => {
  const { t, i18n } = useTranslation();

  function handleclick(lng) {
    i18n.changeLanguage(lng);
  }
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




  return (
    <div className="container" >
      <Routes>
      <Route path="/" element={<Tree />} />
        <Route path="/About" element={<About />} />
        <Route path="/FeedBack" element={<Feedback />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login" element={<Profile/>} />
      </Routes>
 
      {showScrollButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} title="Go to top">
         <img src={arrow} alt='up arrow'></img>
        </button>
      )}
    </div>
  );
};

export default App
