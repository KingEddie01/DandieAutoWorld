import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Hero/Hero'
import truck from '../asset/car1.jpg'
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'



const Home = () => {
  
  return (
    <div>
     <NavBar/>
     <Hero
     cName = 'hero'
     HeroImage={truck}
     heroText = 'houseText'
     hText = 'homeText'
     ptext = 'pHomeText'
     title = 'Luxury For All'
     text = 'Transparency In Dealings'
     url = '/gallery'
     btnText = 'Visit Gallery'
     btnClass = 'show'
    />
    <div style={{marginTop:"20px"}}>
   
    </div>
   
    
    <div style={{marginTop:"20px"}}>
      <p>&copy; {new Date().getFullYear()} <a href="https://www.instagram.com/dandieautoworld/" target='blank'>DandieAutoWorld</a></p>
    </div>
    </div>
  )
}

export default Home