import React from 'react'
import Page1 from './Home/Home.jsx';
import Page3 from './SocialMedia/Social.jsx';
import Page4 from './FeedBack-Scrolls/Feedback-scroll.js';
import Petition from './Petition/Petition';
import Page8 from './Blood-donation/Blood-donate.js';
import Footer from './component/Footer/Footer.js';
import Meeting from './Meeting&Events/Meeting/Meeting.js';
import Home from './Federation-About/Federation.js';
import Join from './JOIN/Join'
import Cards from './ApplyServe-Slider/Slider.js';
import useScrollToTop from './component/Hooks/useScrollToTop.js';
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