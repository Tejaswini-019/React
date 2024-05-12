import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import './App.css';
//import App from './App';
import Menu from './Menu';
//import Dashboard from './Dashboard';
import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
//import Wizard from './Wizard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Navigation/>
       </BrowserRouter>
  </React.StrictMode>
  
);
reportWebVitals();
