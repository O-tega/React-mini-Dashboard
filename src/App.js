import React from 'react';
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import ProductDetails from './components/projects/ProjectDetails';
import './index.css';

const App =()=>{
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/project/:id' element={<ProductDetails/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App;
