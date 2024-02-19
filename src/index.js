import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './Translate -i18/I18n'
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

// src/index.js or src/index.jsx
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
     <StyledEngineProvider>
     <App/>
     {/* <EventDetails/> */}
     {/* <Meeting/> */}
     </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
