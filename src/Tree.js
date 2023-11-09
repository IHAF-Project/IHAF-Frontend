import React from 'react'
import Page1 from './INTRO-PAGE/Page1.jsx';
import Page3 from './SOCIAL-MEDIA/Social.jsx';
import Page4 from './FEEDBACK-SCROLL/Feedback-scroll.js';
import Petition from './Page7/Petition';
import Page8 from './Page8/Page8';
import Footer from './COMPONENTS/FOOTER/Footer.js';
import Meeting from './Page8/Meeting';
import Home from './AMBEDKAR-FED/Page2.js';
import Join from './JOIN/Join.js';
import Cards from './Page6/Cards';
import useScrollToTop from './COMPONENTS/Hooks/useScrollToTop.js';
function Tree() {
  useScrollToTop();
  return (
    <div>
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
    </div>
  )
}

export default Tree