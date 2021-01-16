import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if(document.documentElement.clientWidth>500){
  const img = document.createElement('img');
  img.src = './qrcode.png'
  img.style.position = 'fixed'
  img.style.left='50%'
  img.style.top='50%'
  img.style.transform='translate(-50%,-50%)'
  img.style.boxShadow='0 0 10px rgba(0,0,0,0.25)'
  document.body.appendChild(img)
}