


import React, { useEffect, useRef } from 'react';
import './App.css';
import Page1 from './Page1/Page1.jsx';
import Page3 from './Page3/Page3.jsx';
import Page4 from './Page4/page4';
import Petition from './Page7/Petition';
import Feedback from './Page7/Feedback';
import Page8 from './Page8/Page8';
import Footer from './Footer/Footer';
import Meeting from './Page8/Meeting';
import About from './Page8/About';
import { useTranslation } from 'react-i18next';
import Home from './Page2/Home';
import Join from './Page5/Join';
import Cards from './Page6/Cards';
import { Route, Routes } from 'react-router-dom';
import JionMember from './JionMember/JionMember';

const App = () => {
  return (
    <div className="sections-container">
     
        <Page1 />
        <Home />
    <Page3 />
        <Page4 />
      <Join />
        <Cards />
        <Petition />
        <Meeting />
        <Footer />
      </div>
 
  );
};

export default App;

