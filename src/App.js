import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import './index.css';

const App =()=>{
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
