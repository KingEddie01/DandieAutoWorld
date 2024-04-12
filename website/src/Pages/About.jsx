import React from 'react'
import NavBar from '../Components/NavBar'
import image from '../asset/fabio-henning-Ciqwz8GF5WM-unsplash.jpg'
import Hero from '../Hero/Hero'

const About = () => {
  return (
    <div>
    <NavBar/>
    <Hero
    cName = 'heroAbout'
    hText = 'aboutText'
    HeroImage={image}
    title = 'About'
    heroText ='aboutHouseText'
   
   
   />
   </div>
  )
}

export default About