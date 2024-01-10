import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Register } from '../auth/pages/Register';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Register/>
    </BrowserRouter>
  </React.StrictMode>
  
  
);