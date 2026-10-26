// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//       <App />

//   </BrowserRouter>,
  
// )



import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = "pk_test_YW1hemVkLWtvaS04MzUzLmNsZXJrLmFjY291bnRzLmRldiQ"

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
<ClerkProvider publishableKey={PUBLISHABLE_KEY}>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>
);
