// import React, { useEffect, useRef } from 'react';
// import './App.css';
// import Page1 from './Page1/Page1.jsx';
// import Page3 from './Page3/Page3.jsx';
// import Page4 from './Page4/page4';
// import Petition from './Page7/Petition';
// import Feedback from './Page7/Feedback';
// import Page8 from './Page8/Page8';
// import Footer from './Footer/Footer';
// import Meeting from './Page8/Meeting';
// import About from './Page8/About';
// import { useTranslation } from 'react-i18next';
// import Home from './Page2/Home';
// import Join from './Page5/Join';
// import Cards from './Page6/Cards';
// import { Route, Routes } from 'react-router-dom';
// import JionMember from './JionMember/JionMember';

// const App = () => {
//   const sectionRefs = useRef([]);
//   let currentSectionIndex = 0;

//   useEffect(() => {
//     const handleScroll = (event) => {
      
//       const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

//       if (scrollDirection === 'down') {
//         currentSectionIndex = currentSectionIndex < sectionRefs.current.length - 1  ? currentSectionIndex + 1 : currentSectionIndex;
//       } else {
//         currentSectionIndex =
//           currentSectionIndex > 0 ? currentSectionIndex - 1 : 0;
//       }

    
//       const targetScrollPosition = currentSectionIndex * 100 * -1 + 'vh';
//       document.querySelector('.sections-container').style.transform = `translateY(${targetScrollPosition})`;
//     };

//     window.addEventListener('wheel', handleScroll);
//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//           observer.unobserve(entry.target); 
//         }
//       });
//     });

//     const hiddenElements = document.querySelectorAll('.hidden');
//     hiddenElements.forEach((el) => observer.observe(el));

//     return () => {
//       hiddenElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []); 

//   return (
    
//       <div className="sections-container">
//       <div className="section" ref={(ref) => (sectionRefs.current[0] = ref)}>
//       <Page1/>
//       </div>
//       <section className="hidden" ref={(ref) => (sectionRefs.current[1] = ref)}>
//       <Home />
//       </section>
//       <section className="hidden" ref={(ref) => (sectionRefs.current[2] = ref)}>
//       <Page3 />
//       </section>
//       <div className="section" ref={(ref) => (sectionRefs.current[3] = ref)}>
//       <Page4 />
//       </div>
//       <div className="section" ref={(ref) => (sectionRefs.current[4] = ref)}>
//       <Join />
//       </div>
//       <div className="section" ref={(ref) => (sectionRefs.current[5] = ref)}>
//       <Cards />
//       </div>
//       <div className="section" ref={(ref) => (sectionRefs.current[6] = ref)}>
//       <Petition />
//       </div>
//       <div className="section" ref={(ref) => (sectionRefs.current[7] = ref)}>
//       <Meeting />
//       </div>
      
 
//       <div >
//       </div>
//       <div>
//       <Footer />
//       </div>
//     </div>

//   );
// };

// export default App;


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

