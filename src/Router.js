import React from 'react'
import Page1 from './Page1/Page1.jsx';
import Page3 from './Page3/Page3.jsx';
import Page4 from './Page4/page4.js';
import Petition from './Page7/Petition.js';

// import Login from "./LogIn/Login.jsx"
import Page8 from './Page8/Page8.js';
import Footer from './Footer/Footer.js';
import Meeting from './Page8/Meeting.js';
// import Profile from "./Profile/Profile.jsx"

import Home from './Page2/Home.js';
import Join from './Page5/Join.js';
import Cards from './Page6/Cards.js';

function Router() {
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

export default Router
