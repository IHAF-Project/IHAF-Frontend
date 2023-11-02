import React from 'react'
import Page1 from './Page1/Page1.jsx';
import Page3 from './Page3/Page3.jsx';
import Page4 from './Page4/page4';
import Petition from './Page7/Petition';
import Page8 from './Page8/Page8';
import Footer from './Footer/Footer';
import Meeting from './Page8/Meeting';
import Home from './Page2/Home';
import Join from './Page5/Join';
import Cards from './Page6/Cards';
function Tree() {
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