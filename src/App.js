import React from 'react';
import Navbar from './Componants/Pages/Navbar';
import Home from './Componants/Pages/Home'
import { Route,Routes } from 'react-router-dom';
import Registration from './Componants/Pages/Registration'
import Training from "./Componants/Pages/Training";
import Program from './Componants/Pages/Program';
import Pricing from './Componants/Pages/Pricing';
import About from './Componants/Pages/About'

import './App.css';


function App() {
  return (<>

  <Navbar/>

   <Routes>
   
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/registration' element={<Registration/>} />
    <Route path='/training' element={<Training/>} />
    <Route path='/program' element={<Program/>} />
    <Route path='/pricing' element={<Pricing/>} />

  </Routes>
   </>
  );
}

export default App;
