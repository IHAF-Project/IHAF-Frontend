import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './page-i18/I18n'
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
// import Demo from './Demo/Demo';
// import Otp from './LogIn/OTP/Otp';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
     <StyledEngineProvider>
     <App />
     {/* <Otp/> */}
     </StyledEngineProvider>
 {/* <Demo/>  */}
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
