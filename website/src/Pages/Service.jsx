import React from 'react'
import NavBar from '../Components/NavBar'
import deal from '../asset/stylish-elegant-couple-car-salon.jpg'
import Hero from '../Hero/Hero'
const Service = () => {
  return (
    <div>
    <NavBar/>
    <Hero
    cName = 'heroService'
    hText = 'serviceText'
    HeroImage={deal}
    title = 'Service'
    heroText ='serviceHouseText'
   
   
   />
   </div>
  )
}

export default Service