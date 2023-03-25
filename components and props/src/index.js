import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card'
import App from './components/App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Card name = "kattapa"/>
  </React.StrictMode>
);

 