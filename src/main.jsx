import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
//import { ShoppingCart } from '../pages/ShoppingCart';
//import { Item_shopingCart } from '../pages/Item_shopingCart';
import { Single_product } from '../pages/Single_product'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Single_product/>
    </BrowserRouter>
  </React.StrictMode>
  
  
);