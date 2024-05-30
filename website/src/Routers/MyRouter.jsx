import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';
import Gallery from '../Components/Gallery';

const MyRouter = () => {
  return (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
  )
}

export default MyRouter