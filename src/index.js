import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import A from './A';
import Login from './Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const routing = (  
    
<>

   <BrowserRouter><Routes> 
    
    
          <Route path="/" element={<A />} />
          <Route path="/login" element={<Login/>} />
    

   
   
    
</Routes>
    </BrowserRouter>
</>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);


