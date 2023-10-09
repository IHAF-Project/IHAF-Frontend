import React from 'react';
import './App.css';
import Page1 from './Page1/Page1.jsx';
import Page3 from './Page3/Page3.jsx';
import Page4 from './Page4/page4';
import Petition from './Page7/Petition';
import Feedback from './Page7/Feedback';
// import Login from "./LogIn/Login.jsx"
import Page8 from './Page8/Page8';
import Footer from './Footer/Footer';
import Meeting from './Page8/Meeting';
// import Profile from "./Profile/Profile.jsx"
import About from './Page8/About';
import { useTranslation } from 'react-i18next';
import Home from './Page2/Home';
import Join from './Page5/Join';
import Cards from './Page6/Cards';
import { Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import arrow from '../src/imgg/🦆 icon _arrow thick left_ (4).png'
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
        <Route path="/About" element={<About />} />
        <Route path="/FeedBack" element={<Feedback />} />
        {/* <Route path="/Login" element={<Login/>} /> */}
        {/* <Route path="/Login" element={<Profile/>} /> */}
      </Routes>
      <Page1 />
      <Home />
      <Page3 />
      <Page4 />
      <Join />
      <Cards />
      <Petition />
      <Meeting />
      <Page8 />
      <Footer />
      {showScrollButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} title="Go to top">
         <img src={arrow} alt='up arrow'></img>
        </button>
      )}
    </div>
  );
};


// const App = () => {
//   const {  i18n } = useTranslation();
//   function handleclick(lng){
//     i18n.changeLanguage(lng);
//   }
//   return (
//     <div>
//       <div className='header'>
//       <button onClick={()=>handleclick('en')}>English</button>
//       <button  onClick={()=>handleclick('ta')}>Tamil</button>
//       </div>
      
//     </div>
//   )
// }
export default App
