import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './page-i18/I18n'
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import EventDetails from './Page8/GetEventDetails/EventDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
     <StyledEngineProvider>
     <App/>
     {/* <EventDetails/> */}
     </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
