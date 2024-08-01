/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Count from './Count.jsx'
import Nav from './Nav.jsx'
import GeneralInformation from './GeneralInformation.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import AIGenerator from './components/AIGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>

    <AIGenerator/>


  </React.StrictMode>,

)
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import AIGenerator from './components/AIGenerator';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
  
  
  <App/>
 
    
  </UserProvider>
  
);
