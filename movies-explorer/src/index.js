import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
import { lang } from './constants/constants';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet htmlAttributes={{ lang: lang }}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
