import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Hero/Hero'
import truck from '../asset/car1.jpg'

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
     url = '/'
     btnText = 'Visit Gallery'
     btnClass = 'show'
    />
    </div>
  )
}

export default Home