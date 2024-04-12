import React from 'react'
import NavBar from '../Components/NavBar'
import contact from '../asset/people-business-communication-concept-glad-dark-skinned-african-american-woman-has-telephone-conversation.jpg'
import Hero from '../Hero/Hero'
const Contact = () => {
  return (
    <div>
    <NavBar/>
    <Hero
    cName = 'heroContact'
    hText = 'contactText'
    HeroImage={contact}
    title = 'Contact'
    heroText ='contactHouseText'
   
   
   />
   </div>
  )
}

export default Contact