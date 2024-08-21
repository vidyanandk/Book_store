import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // ***we remove it because when used routes then it render same the component two times
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,


  // so used BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
