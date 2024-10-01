import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './routers/router.js'
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contects/AuthProvider.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthProvider>
    <RouterProvider router={router}/>
 </AuthProvider>
   
 
   

);